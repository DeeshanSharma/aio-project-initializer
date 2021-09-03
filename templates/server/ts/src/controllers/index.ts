import { Request, Response } from 'express';
// import MODEL from '../models';

async function getHome(req: Request, res: Response) {
  try {
    res.send('Hey your server is up and running.');
  } catch (err) {
    res.status(400).json({ status: 'error', message: 'Something went wrong' });
  }
}

export default { getHome };
