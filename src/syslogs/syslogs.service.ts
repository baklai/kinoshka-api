import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';

import { Cron } from '@nestjs/schedule';
import { Syslog } from './schemas/syslog.schema';
import { CreateSyslogDto } from './dto/create-syslog.dto';

@Injectable()
export class SyslogsService {
  constructor(@InjectModel(Syslog.name) private readonly syslogModel: PaginateModel<Syslog>) {}

  async create(syslogDto: CreateSyslogDto): Promise<Syslog> {
    return await this.syslogModel.create(syslogDto);
  }

  @Cron('0 0 * * *')
  async handleTaskSysLogs() {
    let error = false;
    const monthOffcet = new Date();
    monthOffcet.setMonth(monthOffcet.getMonth() - 3);
    try {
      await this.syslogModel.deleteMany({ createdAt: { $lt: monthOffcet } }).exec();
    } catch (err) {
      error = true;
    } finally {
      console.info(`127.0.0.1 [system] TASK ${error ? 500 : 200} - CLEAR LOGS`);
      await this.syslogModel.create({
        host: '127.0.0.1',
        profile: 'system',
        method: 'TASK',
        baseUrl: 'CLEAR LOGS',
        params: null,
        query: null,
        body: null,
        status: error ? 500 : 200,
        userAgent: null
      });
    }
  }
}
