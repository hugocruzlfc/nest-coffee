import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Input type for creating a coffee' })
export class CreateCoffeeInput {
  @Field(() => String, { description: 'A new coffee' })
  name: string;
  brand: string;
  // @Field(() => [String]) <---- required when CLI Plugin is disabled
  flavors: string[];
}
