import * as http from 'http';

import { CONFIG } from './config';
import { app } from './app';
import { Logger } from './services/logger';

const log = new Logger({
  name: "ServerLogger",
});

// ignore SSL certificate errors (self signed certificate)
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// process.env.TZ="Etc/UTC";

// print stack trace on node warning
process.on('warning', (err) => {
  console.warn("Warning:", err.stack);
});
process.on('uncaughtException', (err) => {
  console.log('Caught exception: ', err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled rejection at ', promise, `reason: ${reason}`);
  process.exit(1);
});
process.on('exit', (code) => {
  // Only synchronous calls
  console.log(`Process exited with code: ${code}`)
})

const httpServer = http.createServer(app);

httpServer.on('error', (err) => {
  log.error('HTTP server error: ', err);
});
httpServer.listen(CONFIG.HTTP_SERVER_PORT, () => {
  log.info(`HTTP server is listening on ${CONFIG.HTTP_SERVER_PORT}`);
});

