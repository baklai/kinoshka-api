import { Transform } from 'class-transformer';
import { IsInt, IsObject, IsOptional, Max, Min } from 'class-validator';

export class PaginateQueryDto {
  @Min(0, { message: 'Значення "limit" не може бути менше 0.' })
  @Max(50, { message: 'Значення "limit" не може перевищувати 50.' })
  @IsInt({ message: 'Значення "limit" повинно бути цілим числом.' })
  readonly limit: number;

  @Min(0, { message: 'Значення "offset" не може бути менше 0.' })
  @IsInt({ message: 'Значення "offset" повинно бути цілим числом.' })
  readonly offset: number;

  @IsObject({ message: 'Поле "sort" повинно бути обʼєктом.' })
  @IsOptional()
  @Transform(({ value }) => (value ? JSON.parse(value) : {}))
  readonly sort: Record<string, any>;

  @IsObject({ message: 'Поле "filters" повинно бути обʼєктом.' })
  @IsOptional()
  @Transform(({ value }) => (value ? JSON.parse(value) : {}))
  readonly filters: Record<string, any>;
}
