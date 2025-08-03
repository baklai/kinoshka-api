import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsArray, IsDate, IsMongoId, IsOptional, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

import { PaginateResponseDto } from 'src/common/dto/paginate-response.dto';

@Schema()
export class Movie {
  @IsString()
  @IsMongoId()
  readonly id: string;

  @IsString()
  @Prop({ type: String, required: true, trim: true })
  readonly title: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, required: false, trim: true })
  readonly originalTitle: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, required: false, trim: true })
  readonly link: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, required: false, trim: true })
  readonly poster: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, required: false, trim: true })
  readonly category: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, required: false, trim: true })
  readonly quality: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, required: false, trim: true })
  readonly rating: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, required: false, trim: true })
  readonly year: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, required: false, trim: true })
  readonly country: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, required: false, trim: true })
  readonly genres: string;

  @IsArray()
  @IsOptional()
  @Prop({ type: [String], required: false, default: [] })
  readonly actors: string[];

  @IsArray()
  @IsOptional()
  @Prop({ type: [String], required: false, default: [] })
  readonly directors: string[];

  @IsString()
  @IsOptional()
  @Prop({ type: String, required: false, trim: true })
  readonly description: string;

  @IsArray()
  @IsOptional()
  @Prop({ type: [String], required: false, default: [] })
  readonly episode: string[];

  @IsDate()
  @IsOptional()
  readonly createdAt: Date;

  @IsDate()
  @IsOptional()
  readonly updatedAt: Date;
}

export class PaginateMovie extends PaginateResponseDto {
  @IsArray()
  @IsOptional()
  docs: Movie[];
}

export type MovieDocument = HydratedDocument<Movie>;

export const MovieSchema = SchemaFactory.createForClass(Movie);
