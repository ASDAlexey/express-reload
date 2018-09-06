import 'reflect-metadata';
import * as http from 'http';
import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './ioc/ioc';
import { getLogger } from './helpers/log.helper';

import './ioc/loader';
const log = getLogger(module);

const server = new InversifyExpressServer(container);
server.setConfig((app) => {
  http.globalAgent.maxSockets = 50;

  // open ssl
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  // read link bellow about express behind a proxy
  app.set('trust proxy', true);
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
  app.set('view cache', process.env.NODE_ENV === 'production');

  // middleware
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ limit: '2mb' }));
  app.use(cors());
});

const app = server.build();

const port = app.get('port');
app.listen({ port }, () => {
  const NODE_ENV = process.env.NODE_ENV;
  const ENV_TYPE = process.env.ENV_TYPE || '';
  const env = `NODE_ENV:${NODE_ENV}, ENV_TYPE:${ENV_TYPE}`;
  log.info(`Running express.js server on localhost:${port}`);
});
