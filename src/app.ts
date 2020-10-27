import { Express, Request, Response, NextFunction } from 'express';
import express from "express";

import * as path from 'path';
import { Logger } from './services/logger';
import { CONFIG } from './config';
import { DataProvider } from './services/dataProvider';

const log = new Logger({
    name: "AppLogger",
});
// ----------------------------------------------------------------
const app: Express = express();

app.locals.pretty = true;

// loopback -> 127.0.0.1/8, ::1/128
app.set('trust proxy', 'loopback'); // the client’s IP address as the left-most entry in the X-Forwarded-* header.

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/assets', express.static(path.join(__dirname, 'public')));
app.get('/favicon.ico', (req, res) => res.sendStatus(204));

// === Frontend pages ===
// Homepage
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
    log.debug("Get /");

    try {
        const dataProvider = new DataProvider();
        const categories = await dataProvider.getCategories();

        res.render('homepage.pug', {
            I18N: CONFIG.I18N,
            pageTitle: CONFIG.I18N.PAGE_TITLE,
            categories
        });
    } catch (e) {
        next(e);
    }
});

// Products in Category 
app.get('/category/:categoryId', async (req: Request, res: Response, next: NextFunction) => {
    const pCategoryId = parseInt(req.params.categoryId, 10);
    const pOffset = req.query.offset && parseInt(req.query.offset, 10) || 0;
    log.debug(`Get category: ${pCategoryId}`);

    try {
        const dataProvider = new DataProvider();
        const categories = await dataProvider.getCategories();

        // get current category (we have one level of categories, another API call is not necessary)
        const category = categories.find((c) => c.categoryId == pCategoryId);
        if (!category) {
            throw new Error("No category found");
        }
        const productPage = await dataProvider.getProductPage(pCategoryId, CONFIG.PRODUCT_PAGE_SIZE, pOffset);

        res.render('category.pug', {
            I18N: CONFIG.I18N,
            pageTitle: `${CONFIG.I18N.PAGE_TITLE} (${category.title})`,
            categoryId: pCategoryId,
            categories,
            productPage
        });
    } catch (e) {
        log.error(e);
        next(e);
    }
});


// Product Detail 
app.get('/product/:productId', async (req: Request, res: Response, next: NextFunction) => {
    const pProductId = parseInt(req.params.productId, 10);
    const pAllOffers = req.query.allOffers && true || false;

    log.debug(`Get product: ${pProductId}`);

    try {
        const dataProvider = new DataProvider();
        const productDetail = await dataProvider.getProduct(pProductId);

        const categories = await dataProvider.getCategories();
        const category = categories.find((c) => c.categoryId == productDetail.categoryId);
        if (!category) {
            throw new Error("No category found");
        }

        res.render('product.pug', {
            I18N: CONFIG.I18N,
            pageTitle: `${CONFIG.I18N.PAGE_TITLE}`,
            category,
            product: productDetail,
            firstOffers: pAllOffers ? productDetail.offers : productDetail.offers.slice(0, 3),
            hiddenOffers: pAllOffers ? null : productDetail.offers.slice(3),
        });
    } catch (e) {
        log.error(e);
        next(e);
    }
});

// error handler
app.use(async (err, req, res, next) => {
    log.error(err.stack);

    res.render('error.pug', {
        pageTitle: CONFIG.I18N.PAGE_TITLE,
        errorMessage: JSON.stringify(err.message),
    });
});

export { app }