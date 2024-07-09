import { forwardRef, Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { AuthorsModule } from '../authors/authors.module';
import { Author } from '../authors/entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Author])],
  providers: [TypeOrmModule, PostsResolver, PostsService],
  exports: [PostsService, TypeOrmModule],
})
export class PostsModule {}
