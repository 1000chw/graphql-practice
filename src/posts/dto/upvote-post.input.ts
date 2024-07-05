import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class UpvotePostInput {
  @Field(() => Int, { description: 'post id' })
  postId: number;
}
