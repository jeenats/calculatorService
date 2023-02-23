import  winston from 'winston';
const { createLogger, format, transports } = winston;
const { combine, timestamp, colorize,printf } = format

const options:any = {
    transports: [ new winston.transports.Console({
        level: 'info',
    }),
    new winston.transports.File({
        level: 'error',
        filename: 'logs/error.log'
    })],
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
};
if (process.env.CA_LOG_LEVEL){
    options.level = process.env.CA_LOG_LEVEL;
} else {
    options.level = 'info';
}

console.log(JSON.stringify(options));
export default createLogger(options)