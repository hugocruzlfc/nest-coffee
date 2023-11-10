import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DataLoader from 'dataloader';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { In, Repository } from 'typeorm';

@Injectable({
  scope: Scope.REQUEST,
})
export class FlavorsByCoffeeLoader extends DataLoader<number, Flavor[]> {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeesRepository: Repository<Coffee>,
  ) {
    super((keys) => this.batchLoadFn(keys));
  }

  private async batchLoadFn(coffeeIds: readonly number[]): Promise<Flavor[][]> {
    const coffeesWithFlavors = await this.coffeesRepository.find({
      select: ['id'],
      relations: ['flavors'],
      where: {
        id: In(coffeeIds as number[]),
      },
    });

    return coffeesWithFlavors.map((coffee) => coffee.flavors);
  }
}
