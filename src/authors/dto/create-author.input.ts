import { InputType, Int, Field, OmitType } from '@nestjs/graphql';
import { Author } from '../entities/author.entity';

@InputType()
export class CreateAuthorInput extends OmitType(
  Author,
  ['id', 'posts'],
  InputType,
) {}
