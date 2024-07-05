import { InputType, Int, Field } from '@nestjs/graphql';
import { MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreatePostInput {
  @Field(() => Int, { description: 'title' })
  @MinLength(3)
  @MaxLength(20)
  title: string;
}
