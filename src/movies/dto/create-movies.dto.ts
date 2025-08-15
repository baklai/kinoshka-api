import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly originalTitle: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsString()
  @IsOptional()
  readonly poster: string;

  @IsString()
  @IsOptional()
  readonly quality: string;

  @IsString()
  @IsOptional()
  readonly duration: string;

  @IsString()
  @IsOptional()
  readonly age: string;

  @IsString()
  @IsOptional()
  readonly year: string;

  @IsString()
  @IsOptional()
  readonly imdb: string;

  @IsString()
  @IsOptional()
  readonly likes: string;

  @IsString()
  @IsOptional()
  readonly dislikes: string;

  @IsArray()
  @IsOptional()
  readonly categories: string[];

  @IsArray()
  @IsOptional()
  readonly genres: string[];

  @IsArray()
  @IsOptional()
  readonly actors: string[];

  @IsArray()
  @IsOptional()
  readonly directors: string[];

  @IsArray()
  @IsOptional()
  readonly countries: string[];

  @IsArray()
  @IsOptional()
  readonly episodes: string[];

  @IsString()
  @IsOptional()
  readonly source: string;

  @IsBoolean()
  @IsOptional()
  readonly completed: boolean;
}
