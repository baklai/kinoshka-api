import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { Schema } from 'mongoose';
import * as mongooseAutopopulate from 'mongoose-autopopulate';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import appConfig from './config/app.config';
import { SyslogsModule } from './syslogs/syslogs.module';
import { MoviesModule } from './movies/movies.module';
// @ts-ignore
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [appConfig]
    }),

    ScheduleModule.forRoot(),

    MongooseModule.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
        connectionFactory: connection => {
          connection.plugin((schema: Schema) => {
            schema.set('autoCreate', false);
            schema.set('versionKey', false);
            schema.set('timestamps', true);
            schema.virtual('id').get(function () {
              return this._id;
            });
            schema.set('toJSON', {
              virtuals: true,
              transform: function (doc, ret) {
                delete ret._id;
              }
            });
            schema.set('toObject', {
              virtuals: true,
              transform: function (doc, ret) {
                delete ret._id;
              }
            });
          });
          connection.plugin(mongooseAutopopulate);
          connection.plugin(mongooseAggregatePaginate);
          connection.plugin(mongoosePaginate);

          return connection;
        }
      })
    }),
    MoviesModule,
    SyslogsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).exclude().forRoutes('*');
  }
}
