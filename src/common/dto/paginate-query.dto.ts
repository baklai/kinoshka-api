import { Transform } from 'class-transformer';
import { IsInt, IsObject, IsOptional, Max, Min } from 'class-validator';

export class PaginateQueryDto {
  @IsInt()
  readonly page: number;

  @Min(1)
  @Max(50)
  @IsInt()
  readonly limit: number;

  @IsObject()
  @IsOptional()
  @Transform(({ value }) => (value ? JSON.parse(value) : {}))
  readonly sort: Record<string, any>;

  @IsObject()
  @IsOptional()
  @Transform(({ value }) => (value ? JSON.parse(value) : {}))
  readonly filters: Record<string, any>;
}
