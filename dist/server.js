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
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const config_1 = require("./config");
const app_1 = require("./app");
const logger_1 = require("./services/logger");
const log = new logger_1.Logger({
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
    console.log(`Process exited with code: ${code}`);
});
const httpServer = http.createServer(app_1.app);
httpServer.on('error', (err) => {
    log.error('HTTP server error: ', err);
});
httpServer.listen(config_1.CONFIG.HTTP_SERVER_PORT, () => {
    log.info(`HTTP server is listening on ${config_1.CONFIG.HTTP_SERVER_PORT}`);
});
//# sourceMappingURL=server.js.map