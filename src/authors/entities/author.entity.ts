import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../../posts/entities/post.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('authors')
@ObjectType()
export class Author {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column()
  first_name?: string;

  @Field({ nullable: true })
  @Column()
  last_name?: string;

  @Field(() => [Post])
  @OneToMany(() => Post, (post) => post.author)
  @JoinTable()
  posts: Post[];
}
