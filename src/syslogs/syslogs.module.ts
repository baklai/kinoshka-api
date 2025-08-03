import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Syslog, SyslogSchema } from './schemas/syslog.schema';
import { SyslogsService } from './syslogs.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Syslog.name, schema: SyslogSchema }])],
  controllers: [],
  providers: [SyslogsService],
  exports: [SyslogsService]
})
export class SyslogsModule {}
