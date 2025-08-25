import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

declare module 'express' {
  export interface Request {
    user?: { fullname?: string };
  }
}

import { SyslogsService } from 'src/syslogs/syslogs.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private syslogsService: SyslogsService) {}
  private logger = new Logger('HTTP');

  async use(request: Request, response: Response, next: NextFunction): Promise<void> {
    const { ip, method, baseUrl, query, params, body } = request;

    const userAgent = request.get('user-agent') || '';

    response.on('close', async () => {
      const { statusCode } = response;

      this.logger.log(
        `${ip} ${method} ${statusCode} ${baseUrl} ${params ? JSON.stringify(params) : ''} ${query ? JSON.stringify(query) : ''}`
      );

      await this.syslogsService.create({
        host: ip || '',
        method: method || '-',
        baseUrl: baseUrl || '-',
        params: params ? JSON.stringify(params) : '',
        query: query ? JSON.stringify(query) : '',
        body: body ? JSON.stringify(body) : '',
        status: statusCode,
        userAgent: userAgent
      });
    });

    next();
  }
}
