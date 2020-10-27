# TestDat - heureka app

A Node.js app using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.


PS C:\Users\josef\Documents\heureka> node --version
v12.16.1
PS C:\Users\josef\Documents\heureka> npm --version
6.13.4

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
git push heroku
heroku open
```
// - https://safe-chamber-80030.herokuapp.com/ | https://git.heroku.com/safe-chamber-80030.git
## Known pitfalls

- Load More Offers at product page: currently only implemented via reload page, if javascript is enabled, can be implemented via Fetch API 
- Error processing are not implemented, it is necessary to return various error codes and display errors according to the context (40x, 500, ...)
- 
