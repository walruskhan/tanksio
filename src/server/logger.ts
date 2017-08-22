import * as winston from 'winston';

type LoggerMap = {[alias: string]: winston.Logger}

const loggers: LoggerMap = {};

/**
 * Creates a new logger with a named alias
 */
function create_logger(alias: string): winston.Logger {
    const logger = new winston.Logger({
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({filename: `${alias}.log`})
        ]
    });

    loggers[alias] = logger;
    return logger;
}

/**
 * Retrieves a previously created logger, or creates it if it doesn't exist
 * If the overwrite flag is set - any previous aliased logger is replaced
 */
function get(alias: string, overwrite: boolean = false): winston.Logger {
    if (alias in loggers || overwrite) {
        return loggers[alias];
    }

    return create_logger(alias);
}

export {
    create_logger,
    get
};