import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested
} from 'class-validator';

enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export class SortDto {
  @IsOptional()
  @IsEnum(SortOrder)
  year?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  imdb?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  likes?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  dislikes?: SortOrder;
}

export class FiltersDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  originalTitle?: string;

  @IsOptional()
  @IsString()
  year?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  genres?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  countries?: string[];
}

export class PaginateQueryDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  readonly page: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(20)
  readonly limit: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => SortDto)
  readonly sort?: SortDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => FiltersDto)
  readonly filters?: FiltersDto;
}
