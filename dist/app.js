"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const logger_1 = require("./services/logger");
const config_1 = require("./config");
const dataProvider_1 = require("./services/dataProvider");
const log = new logger_1.Logger({
    name: "AppLogger",
});
// ----------------------------------------------------------------
const app = express_1.default();
exports.app = app;
app.locals.pretty = true;
// loopback -> 127.0.0.1/8, ::1/128
app.set('trust proxy', 'loopback'); // the client’s IP address as the left-most entry in the X-Forwarded-* header.
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/assets', express_1.default.static(path.join(__dirname, 'public')));
app.get('/favicon.ico', (req, res) => res.sendStatus(204));
// === Frontend pages ===
// Homepage
app.get('/', async (req, res, next) => {
    log.debug("Get /");
    try {
        const dataProvider = new dataProvider_1.DataProvider();
        const categories = await dataProvider.getCategories();
        res.render('homepage.pug', {
            pageTitle: config_1.CONFIG.I18N.PAGE_TITLE,
            categoryListTitle: config_1.CONFIG.I18N.CATEGORY_LIST_TITLE,
            listProductsLink: config_1.CONFIG.I18N.LIST_PRODUCTS_LINK,
            categories
        });
    }
    catch (e) {
        next(e);
    }
});
// Products in Category 
app.get('/category/:categoryId', async (req, res, next) => {
    const pCategoryId = parseInt(req.params.categoryId, 10);
    // TODO: parse query arg
    const pOffset = 0;
    log.debug(`Get category: ${pCategoryId}`);
    try {
        const dataProvider = new dataProvider_1.DataProvider();
        const categories = await dataProvider.getCategories();
        const category = categories.find((c) => c.categoryId == pCategoryId);
        if (!category) {
            throw new Error("No category found");
        }
        const productPage = await dataProvider.getProductPage(pCategoryId, config_1.CONFIG.PRODUCT_PAGE_SIZE, pOffset);
        res.render('category.pug', {
            pageTitle: `${config_1.CONFIG.I18N.PAGE_TITLE} (${category.title})`,
            categoryListTitle: config_1.CONFIG.I18N.CATEGORY_LIST_TITLE,
            categoryId: pCategoryId,
            categories,
            productPage
        });
    }
    catch (e) {
        log.error(e);
        next(e);
    }
});
// error handler
app.use(async (err, req, res, next) => {
    log.error(err.stack);
    res.render('error.pug', {
        pageTitle: config_1.CONFIG.I18N.PAGE_TITLE,
        errorMessage: JSON.stringify(err.message),
    });
});
//# sourceMappingURL=app.js.map