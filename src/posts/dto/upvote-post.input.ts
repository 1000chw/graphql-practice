import { InputType, Int, Field, PartialType, PickType } from '@nestjs/graphql';
import { Post } from '../entities/post.entity';

@InputType()
export class UpvotePostInput extends PickType(
  Post,
  ['id', 'votes'],
  InputType,
) {}
