import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';
import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';
import { CoffeeType } from 'src/common/enums/coffe-type.enum';

@Entity()
@ObjectType({
  description: 'Object representing a coffee model',
  implements: () => Drink,
})
export class Coffee implements Drink {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'Id of the coffee' })
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  // @Column({ type: 'json' })
  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, { cascade: true })
  flavors?: Flavor[];

  @CreateDateColumn()
  createdAt?: Date;

  @Column({ nullable: true })
  type: CoffeeType;
}
