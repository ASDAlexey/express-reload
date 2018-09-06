import * as winston from 'winston';
import * as path from 'path';

export const getLogger = (module: any) => {
  const resultPath = module.filename.split(path.sep).slice(-2).join(path.sep);
  return new winston.Logger({
    transports: [new winston.transports.Console({ colorize: true, label: resultPath })],
  });
};
