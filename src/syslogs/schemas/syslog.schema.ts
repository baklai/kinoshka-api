import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsDate, IsMongoId, IsNumber, IsOptional, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Syslog {
  @IsString()
  @IsMongoId()
  readonly id: string;

  @IsString()
  @IsMongoId()
  @Prop({ type: String })
  readonly host: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, trim: true })
  readonly method: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, trim: true })
  readonly baseUrl: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String })
  readonly params: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String })
  readonly query: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String })
  readonly body: string;

  @IsNumber()
  @IsOptional()
  @Prop({ type: Number })
  readonly status: number;

  @IsString()
  @IsOptional()
  @Prop({ type: String })
  readonly userAgent: string;

  @IsDate()
  @IsOptional()
  readonly createdAt: Date;

  @IsDate()
  @IsOptional()
  readonly updatedAt: Date;
}

export type SyslogDocument = HydratedDocument<Syslog>;

export const SyslogSchema = SchemaFactory.createForClass(Syslog);
