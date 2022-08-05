import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class CoursesService {
<<<<<<< HEAD
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,

    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  findAll() {
=======
  @Inject('COURSES_REPOSITORY')
  private courseRepository: Repository<Course>;

  @Inject('TAGS_REPOSITORY')
  private tagRepository: Repository<Tag>;

  async findAll() {
>>>>>>> b9e9cb9
    return this.courseRepository.find({
      relations: ['tags'],
    });
  }

<<<<<<< HEAD
  findOne(id: string) {
    const course = this.courseRepository.findOne(id, {
=======
  async findOne(id: string) {
    const course = await this.courseRepository.findOne({
      where: { id },
>>>>>>> b9e9cb9
      relations: ['tags'],
    });

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return course;
  }

  async create(createCourseDto: CreateCourseDto) {
    const tags = await Promise.all(
      createCourseDto.tags.map((name) => this.preloadTagByName(name)),
    );

    const course = this.courseRepository.create({
      ...createCourseDto,
      tags,
    });
    return this.courseRepository.save(course);
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const tags =
      updateCourseDto.tags &&
      (await Promise.all(
        updateCourseDto.tags.map((name) => this.preloadTagByName(name)),
      ));

    const course = await this.courseRepository.preload({
<<<<<<< HEAD
      id: id,
=======
      id,
>>>>>>> b9e9cb9
      ...updateCourseDto,
      tags,
    });

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return this.courseRepository.save(course);
  }

  async remove(id: string) {
    const course = await this.courseRepository.findOne({
      where: { id },
    });

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return this.courseRepository.remove(course);
  }

  private async preloadTagByName(name: string): Promise<Tag> {
<<<<<<< HEAD
    const tag = await this.tagRepository.findOne({ name });
=======
    const tag = await this.tagRepository.findOne({ where: { name } });
>>>>>>> b9e9cb9

    if (tag) {
      return tag;
    }

    return this.tagRepository.create({ name });
  }
}
