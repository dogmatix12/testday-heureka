
import node_fetch, { RequestInfo, RequestInit } from 'node-fetch';
// import { StatusError } from './statusError';

export class HttpFetcher {
  /*
    // custom ERR-detecting json parser
    private static JSON_PARSER<T>(res): Promise<T> {
  
      return res.text()
        .then(
          (body) => {
            let parseError;
            if (body.length > 0) {
              try {
                body = JSON.parse(body);
              } catch (err) {
                // response cannot be parsed
                parseError = err;
              }
            }
            if (!res.ok) { // status =2xx
              return Promise.reject(new StatusError(res, body));
            }
            if (parseError) {
              return Promise.reject(new Error('Error parsing JSON data'));
            }
            // empty
            return body;  // Promise.resolve()
          });
    }
    */

  // fetchJSON
  public static fetchJSON<T>(
    url: RequestInfo,
    init?: RequestInit
  ): Promise<T> {
    if (!init) {
      init = {};
    }
    init.headers = {
      ...init.headers,
      ...{
        'Accept': 'application/json'
      }
    };

    return node_fetch<T>(url, init)
      .then((res) => res.json());
    // HttpFetcher.JSON_PARSER );
  }

}