import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { FlavorsByCoffeeLoader } from './data-loader/flavor-by-coffee.loader/flavors-by-coffee.loader';

// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

@Resolver(() => Coffee)
export class CoffeeFlavorsResolver {
  constructor(
    // @InjectRepository(Flavor)
    // private readonly flavorRepository: Repository<Flavor>,
    private readonly flavorsByCoffeeLoader: FlavorsByCoffeeLoader,
  ) {}

  @ResolveField('flavors', () => [Flavor])
  async getFlavorsOfCoffee(@Parent() coffee: Coffee) {
    // return this.flavorRepository
    //   .createQueryBuilder('flavor')
    //   .innerJoin('flavor.coffees', 'coffees', 'coffees.id = :coffeeId', {
    //     coffeeId: coffee.id,
    //   })
    //   .getMany();
    return this.flavorsByCoffeeLoader.load(coffee.id);
  }
}
