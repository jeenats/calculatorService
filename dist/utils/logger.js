"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
var createLogger = winston_1.default.createLogger, format = winston_1.default.format, transports = winston_1.default.transports;
var combine = format.combine, timestamp = format.timestamp, colorize = format.colorize, printf = format.printf;
var options = {
    transports: [new winston_1.default.transports.Console({
            level: 'info',
        }),
        new winston_1.default.transports.File({
            level: 'error',
            filename: 'logs/error.log'
        })],
    format: format.combine(format.colorize(), format.timestamp(), format.printf(function (_a) {
        var timestamp = _a.timestamp, level = _a.level, message = _a.message;
        return "[".concat(timestamp, "] ").concat(level, ": ").concat(message);
    })),
};
if (process.env.CA_LOG_LEVEL) {
    options.level = process.env.CA_LOG_LEVEL;
}
else {
    options.level = 'info';
}
console.log(JSON.stringify(options));
exports.default = createLogger(options);
