import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class PaginateResponseDto {
  @IsNumber()
  @IsOptional()
  readonly limit: number;

  @IsNumber()
  @IsOptional()
  readonly offset: number;

  @IsNumber()
  @IsOptional()
  readonly page: number;

  @IsBoolean()
  @IsOptional()
  readonly hasPrevPage: boolean;

  @IsBoolean()
  @IsOptional()
  readonly hasNextPage: boolean;

  @IsNumber()
  @IsOptional()
  readonly totalPages: number;

  @IsNumber()
  @IsOptional()
  readonly totalDocs: number;

  @IsNumber()
  @IsOptional()
  readonly prevPage: number;

  @IsNumber()
  @IsOptional()
  readonly nextPage: number;

  @IsNumber()
  @IsOptional()
  readonly pagingCounter: number;
}
