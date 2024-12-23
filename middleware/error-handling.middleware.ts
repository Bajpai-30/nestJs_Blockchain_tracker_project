import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ErrorHandlingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: Error | any) => void): void {
    try {
      next();
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

