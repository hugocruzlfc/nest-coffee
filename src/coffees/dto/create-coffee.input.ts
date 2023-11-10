import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { Coffee } from '../entities/coffee.entity';
import { CoffeeType } from 'src/common/enums/coffe-type.enum';

@InputType({ description: 'Input type for creating a coffee' })
export class CreateCoffeeInput {
  @MinLength(3)
  @Field(() => String, { description: 'A new coffee' })
  name: string;
  brand: string;
  // @Field(() => [String]) <---- required when CLI Plugin is disabled
  flavors: string[];
  type: CoffeeType;
}
