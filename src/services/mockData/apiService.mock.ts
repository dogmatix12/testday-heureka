import nock from 'nock';
import { CONFIG } from '../../config';
import { Product } from '../../model/product.model';
import { categoryArr, mockOfferArr, productMap } from './mockData';
// import { BigNumber } from 'bignumber.js';

export function disableNock(): void {
  nock.cleanAll();
  nock.restore();
  // nock.enableNetConnect();
}

// disable all HTTP request to outside
export function enableNock(): nock.Scope {
  if (!nock.isActive()) {
    nock.activate();
  }
  nock.disableNetConnect();
  nock.enableNetConnect('127.0.0.1');

  const nockScope = nock(CONFIG.CATALOGUE_API_URI,
    {  // all http(s) requests (filteringScope will match all)
      filteringScope: (scope) => {
        if (/^https?:\/\/127.0/.test(scope)) {
          return false;
        }
        return true;
      },
    })
    .persist();

  return nockScope;
}

export function enableServiceMock(nockScope: nock.Scope): nock.Scope {
  // const customerBalanceRE = new RegExp('(.*)/balance/v1/(.*)/balance/(.*)');

  nockScope
    .intercept('/categories/', 'GET')
    .reply(200, (/* uri, requestBody: nock.Body */) => {
      return categoryArr;
    });

  // response single product
  const productRE = new RegExp('(.*)/product/(.*)/');
  nockScope
    .intercept(productRE, 'GET')
    .reply(200, (uri /*, requestBody: nock.Body */) => {
      const rProductId = Number(uri.replace(productRE, '$2'));

      let product;
      productMap.forEach((v: Product[]) => {
        if (!product) {
          product = v.find((pV) => pV.productId == rProductId);
        }
      });
      return product;
    })

  const productsRE = new RegExp('(.*)/products/(.*)/(.*)/(.*)/');
  const productsCountRE = new RegExp('(.*)/products/(.*)/count/');
  nockScope
    .intercept(productsRE, 'GET')
    .reply(200, (uri /*, requestBody: nock.Body */) => {
      const rCategoryId = Number(uri.replace(productsRE, '$2'));
      const rOffset = Number(uri.replace(productsRE, '$3'));
      const rLength = Number(uri.replace(productsRE, '$4'));
      const products = productMap.get(rCategoryId);
      return products?.slice(rOffset, rOffset + rLength);
    })
    .intercept(productsCountRE, 'GET')
    .reply(200, (uri /*, requestBody: nock.Body */) => {
      const rCategoryId = Number(uri.replace(productsCountRE, '$2'));
      return {
        count: productMap.get(rCategoryId)?.length
      }
    });

  const offersRE = new RegExp('(.*)/offers/(.*)/');
  const offersCountRE = new RegExp('(.*)/offers/(.*)/count/');
  nockScope
    .intercept(offersRE, 'GET')
    .reply(200, (uri /*, requestBody: nock.Body */) => {
      // const rOfferId = Number(uri.replace(offersRE, '$2'));
      return mockOfferArr;
    })
    .intercept(offersCountRE, 'GET')
    .reply(200, (uri /*, requestBody: nock.Body */) => {
      // const rOfferId = Number(uri.replace(offersCountRE, '$2'));
      return {
        count: mockOfferArr.length
      };
    })


  // nockScope.get("/404").replyWithError("something awful happened");
  return nockScope;
}
