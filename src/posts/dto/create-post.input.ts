import { InputType, Int, Field, OmitType } from '@nestjs/graphql';
import { MaxLength, MinLength } from 'class-validator';
import { Post } from '../entities/post.entity';

@InputType()
export class CreatePostInput extends OmitType(
  Post,
  ['id', 'authorInfo'],
  InputType,
) {}
