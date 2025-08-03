import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly originalTitle: string;

  @IsString()
  @IsOptional()
  readonly link: string;

  @IsString()
  @IsOptional()
  readonly poster: string;

  @IsString()
  @IsOptional()
  readonly category: string;

  @IsString()
  @IsOptional()
  readonly quality: string;

  @IsString()
  @IsOptional()
  readonly rating: string;

  @IsString()
  @IsOptional()
  readonly year: string;

  @IsString()
  @IsOptional()
  readonly country: string;

  @IsString()
  @IsOptional()
  readonly genres: string;

  @IsArray()
  @IsOptional()
  readonly actors: string[];

  @IsArray()
  @IsOptional()
  readonly directors: string[];

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsArray()
  @IsOptional()
  readonly episode: string[];
}
