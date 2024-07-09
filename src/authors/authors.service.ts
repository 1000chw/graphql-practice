import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {
    this.authorsRepository = authorsRepository;
  }

  async create(createAuthorInput: CreateAuthorInput): Promise<Author> {
    const newAuthor = this.authorsRepository.create(createAuthorInput);
    const res = await this.authorsRepository.save(newAuthor);
    console.log(res);
    return res;
  }

  findAll() {
    return `This action returns all authors`;
  }

  async findOne(id: number) {
    return await this.authorsRepository.findOneBy({ id });
  }

  async update(updateAuthorInput: UpdateAuthorInput): Promise<Author> {
    const author = await this.authorsRepository.findOne({
      relations: ['posts'],
      where: { id: updateAuthorInput.id },
    });

    const newAuthor = {
      ...author,
      ...updateAuthorInput,
    };
    const res = await this.authorsRepository.save(newAuthor);
    return res;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
