# TestDat - heureka app

A Node.js app using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone git@github.com:dogmatix12/testday-heureka
cd testday-heureka
npm install
npm run dev
```

Your app should now be running on [localhost:8080](http://localhost:8080/).

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```

## Known pitfalls

- Load More Offers at product page: currently only implemented via reload page, if javascript is enabled, can be implemented via Fetch API 
- Error processing are not implemented, it is necessary to return various error codes and display errors according to the context (40x, 500, ...)
- 
