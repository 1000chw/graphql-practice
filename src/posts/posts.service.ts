import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { UpvotePostInput } from './dto/upvote-post.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { Author } from '../authors/entities/author.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorsRepository: Repository<Author>,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostInput: CreatePostInput) {
    const newPost = this.postRepository.create(createPostInput);
    newPost.authorInfo = await this.authorsRepository.findOneBy({
      id: newPost.author,
    });
    return this.postRepository.save(newPost);
  }

  findAll(author?: any) {
    return `This is author ${author?.authorId}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }

  async upvoteById(postInput: UpvotePostInput) {
    const post = await this.postRepository.findOneBy({ id: postInput.id });
    console.log(post);
    const newPost = {
      ...post,
      ...postInput,
    };
    console.log(newPost);
    return this.postRepository.save(newPost);
  }
}
