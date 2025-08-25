import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, PaginateResult, Types } from 'mongoose';
import { PaginateQueryDto } from 'src/movies/dto/query-movies.dto';
import { CreateMovieDto } from './dto/create-movies.dto';
import { UpdateMovieDto } from './dto/update-movies.dto';
import { Movie } from './schemas/movie.schema';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie.name) private readonly movieModel: PaginateModel<Movie>) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const newMovie = await this.movieModel.create({ ...createMovieDto });

    if (!newMovie) {
      throw new NotFoundException('Запис не створено');
    }

    return newMovie;
  }

  async findAll(query: PaginateQueryDto): Promise<PaginateResult<Movie>> {
    const { page = 1, limit = 5, sort: rawSort = {}, filters: rawFilters = {} } = query;

    const filters = Object.entries(rawFilters).reduce(
      (acc, [key, value]) => {
        if (value === undefined) return acc;

        if (['title', 'originalTitle', 'year'].includes(key)) {
          acc[key] = { $regex: value, $options: 'i' };
        } else if (['genres', 'countries'].includes(key)) {
          acc[key] = { $in: value };
        }

        return acc;
      },
      {} as Record<string, any>
    );

    const sort = Object.fromEntries(
      Object.entries(rawSort).filter(([, value]) => value !== undefined)
    );

    return await this.movieModel.paginate(filters, {
      sort,
      page,
      limit,
      lean: false,
      allowDiskUse: true
    });
  }

  async findOneById(id: string): Promise<Movie | any> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Недійсний ідентифікатор запису');
    }

    const findMovie = await this.movieModel.findById(id);

    if (!findMovie) {
      throw new NotFoundException('Запис не знайдено');
    }

    return findMovie;
  }

  async updateOneById(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Недійсний ідентифікатор запису');
    }

    const updatedMovie = await this.movieModel
      .findByIdAndUpdate(id, { $set: { ...updateMovieDto } }, { new: true })
      .exec();

    if (!updatedMovie) {
      throw new NotFoundException('Запис не знайдено');
    }

    return updatedMovie;
  }

  async removeOneById(id: string): Promise<Movie> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Недійсний ідентифікатор запису');
    }

    const findMovie = await this.movieModel.findById(id);

    if (!findMovie) {
      throw new NotFoundException('Запис не знайдено');
    }

    const deletedMovie = await this.movieModel.findByIdAndDelete(id).exec();

    if (!deletedMovie) {
      throw new NotFoundException('Запис не знайдено');
    }

    return deletedMovie;
  }
}
