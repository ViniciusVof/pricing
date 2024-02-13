import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  storeUrl: string;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.stores)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;
}
