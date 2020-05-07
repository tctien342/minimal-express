import { NextFunction, Response, Request } from 'express';

export const ERR_TYPE = {
  SUCCESS: 'Success',
  AUTH: 'Authorization failed',
  DB_ERR: 'Database failed',
  PERM_ERR: 'Permission not accepted',
  INPUT: 'Input value not accepted',
};

export function responseBuilder(data: object, errType: string, errMess: string): string {
  return JSON.stringify({ data: data, err_type: errType, mess: errMess });
}

/**
 * Set content type by default
 * @param {express.Request} req request from client
 * @param {express.Response} res response from server
 * @param {express.NextFunction} next next function will be progress
 */
export function setResponseJSON(req: Request, res: Response, next: NextFunction) {
  res.set('Content-Type', 'application/json');
  next();
}

/**
 * Checking if request contain request key
 * @param {express.Request} req request from client
 * @param {express.Response} res response from server
 * @param {express.NextFunction} next next function will be progress
 */
export function checkRequestToken(req: Request, res: Response, next: NextFunction, token: string) {
  if (!req.headers.hasOwnProperty(process.env.HEADER_TOKEN_PREFIX) && !req.query.token) {
    res.send(responseBuilder({}, ERR_TYPE.INPUT, 'Missing services token'));
  } else {
    if ((req.headers[process.env.HEADER_TOKEN_PREFIX] || req.query.token) === token) {
      next();
    } else {
      res.send(responseBuilder({}, ERR_TYPE.INPUT, 'Token not accepted'));
    }
  }
}
