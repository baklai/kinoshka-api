import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSyslogDto {
  @IsOptional()
  @IsString()
  readonly host: string;

  @IsOptional()
  @IsString()
  readonly params: string;

  @IsOptional()
  @IsString()
  readonly query: string;

  @IsOptional()
  @IsString()
  readonly body: string;

  @IsOptional()
  @IsString()
  readonly method: string;

  @IsOptional()
  @IsString()
  readonly baseUrl: string;

  @IsOptional()
  @IsNumber()
  readonly status: number;

  @IsOptional()
  @IsString()
  readonly userAgent: string;
}
