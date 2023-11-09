import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Object representing a coffee' })
export class Coffee {
  @Field(() => ID, { description: 'Id of the coffee' })
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}
