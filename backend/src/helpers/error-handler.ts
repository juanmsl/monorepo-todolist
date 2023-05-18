import { Request, Response } from 'express';

export class ErrorHandler {

  static notFound(_: Request, res: Response) {
    res.status(404).json({
      message: 'Not Found'
    });
  }

}
