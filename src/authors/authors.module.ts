import { forwardRef, Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { PostsModule } from '../posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author]), PostsModule],
  exports: [TypeOrmModule, AuthorsResolver],
  providers: [AuthorsResolver, AuthorsService],
})
export class AuthorsModule {}
