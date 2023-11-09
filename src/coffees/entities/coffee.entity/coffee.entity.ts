import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from '../flavor.entity/flavor.entity';

@Entity()
@ObjectType({ description: 'Object representing a coffee' })
export class Coffee {
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
}
