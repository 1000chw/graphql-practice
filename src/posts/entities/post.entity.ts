import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from '../../authors/entities/author.entity';

@ObjectType()
@Entity('posts')
export class Post {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field(() => Int, { nullable: true })
  @Column()
  votes?: number;

  @Field()
  @ManyToOne(() => Author, (author) => author.id, {})
  @Column({ name: 'author', nullable: true })
  @JoinColumn([{ name: 'author', referencedColumnName: 'id' }])
  author: number;

  @Field(() => Author)
  authorInfo: Author;
}
