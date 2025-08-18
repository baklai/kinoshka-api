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
  @Prop({ type: String, trim: true })
  readonly originalTitle: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, trim: true })
  readonly description: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, trim: true })
  readonly poster: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, trim: true })
  readonly quality: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, trim: true })
  readonly duration: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, trim: true })
  readonly age: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, trim: true })
  readonly year: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, trim: true })
  readonly imdb: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, trim: true })
  readonly likes: string;

  @IsString()
  @IsOptional()
  @Prop({ type: String, trim: true })
  readonly dislikes: string;

  @IsArray()
  @IsOptional()
  @Prop({ type: [String], default: [] })
  readonly genres: string[];

  @IsArray()
  @IsOptional()
  @Prop({ type: [String], default: [] })
  readonly actors: string[];

  @IsArray()
  @IsOptional()
  @Prop({ type: [String], default: [] })
  readonly directors: string[];

  @IsArray()
  @IsOptional()
  @Prop({ type: [String], default: [] })
  readonly countries: string[];

  @IsArray()
  @IsOptional()
  @Prop({
    type: [{ title: { type: String, trim: true }, source: { type: String, trin: true } }],
    default: []
  })
  readonly episodes: string[];

  @IsString()
  @IsOptional()
  @Prop({ type: String, trim: true })
  readonly source: string;

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
