import { Resolver, Query } from '@nestjs/graphql';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { DrinksResultUnion } from 'src/common/unions/drinks-result.union';
import { Tea } from 'src/teas/entities/tea.entity/tea.entity';

@Resolver()
export class DrinksResolver {
  @Query(() => [DrinksResultUnion], { name: 'drinks' })
  async findAll(): Promise<(typeof DrinksResultUnion)[]> {
    const coffee = new Coffee();
    coffee.id = 1;
    coffee.name = 'Colombia';
    coffee.brand = 'Nescafe';

    const tea = new Tea();
    tea.name = 'Green Tea';
    return [coffee, tea];
  }
}
