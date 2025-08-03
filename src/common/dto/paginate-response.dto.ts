import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class PaginateResponseDto {
  @IsOptional()
  @IsNumber({}, { message: 'Значення "totalDocs" повинно бути числом.' })
  totalDocs: number;

  @IsOptional()
  @IsNumber({}, { message: 'Значення "limit" повинно бути числом.' })
  limit: number;

  @IsOptional()
  @IsNumber({}, { message: 'Значення "offset" повинно бути числом.' })
  offset: number;

  @IsOptional()
  @IsBoolean({ message: 'Значення "hasPrevPage" повинно бути булевим (true/false).' })
  hasPrevPage: boolean;

  @IsOptional()
  @IsBoolean({ message: 'Значення "hasNextPage" повинно бути булевим (true/false).' })
  hasNextPage: boolean;

  @IsOptional()
  @IsNumber({}, { message: 'Значення "page" повинно бути числом.' })
  page: number;

  @IsOptional()
  @IsNumber({}, { message: 'Значення "totalPages" повинно бути числом.' })
  totalPages: number;

  @IsOptional()
  @IsNumber({}, { message: 'Значення "prevPage" повинно бути числом.' })
  prevPage: number;

  @IsOptional()
  @IsNumber({}, { message: 'Значення "nextPage" повинно бути числом.' })
  nextPage: number;

  @IsOptional()
  @IsNumber({}, { message: 'Значення "pagingCounter" повинно бути числом.' })
  pagingCounter: number;
}
