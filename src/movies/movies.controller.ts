import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PaginateResult } from 'mongoose';
import { PaginateQueryDto } from 'src/common/dto/paginate-query.dto';
import { CreateMovieDto } from './dto/create-movies.dto';
import { UpdateMovieDto } from './dto/update-movies.dto';
import { MoviesService } from './movies.service';
import { Movie } from './schemas/movie.schema';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return await this.moviesService.create(createMovieDto);
  }

  @Get()
  async findAll(@Query() query: PaginateQueryDto): Promise<PaginateResult<Movie>> {
    return await this.moviesService.findAll(query);
  }

  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<Movie> {
    return await this.moviesService.findOneById(id);
  }

  @Put(':id')
  async updateOneById(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto
  ): Promise<Movie> {
    return await this.moviesService.updateOneById(id, updateMovieDto);
  }

  @Delete(':id')
  async removeOneById(@Param('id') id: string): Promise<Movie> {
    return await this.moviesService.removeOneById(id);
  }
}
