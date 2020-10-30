# TestDat - heureka app

A Node.js app using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```
git clone git@github.com:dogmatix12/testday-heureka
cd testday-heureka
npm install
npm run dev
```

Your app should now be running on [localhost:8080](http://localhost:8080/).

## Deploying to Heroku

```
heroku create
git push heroku
heroku open
```
// - https://safe-chamber-80030.herokuapp.com/ | https://git.heroku.com/safe-chamber-80030.git

## Improvements branch

```
>  heroku create --remote improvements --region eu

> git push improvements main 
> heroku open --remote improvements
```
// Creating app... done, ⬢ guarded-fjord-94801, region is eu
// https://guarded-fjord-94801.herokuapp.com/ | https://git.heroku.com/guarded-fjord-94801.git

## Known pitfalls

- Load More Offers at product page: currently only implemented via reload page, if javascript is enabled, can be implemented via Fetch API 
- Error processing are not implemented, it is necessary to return various error codes and display errors according to the context (40x, 500, ...)
- 
