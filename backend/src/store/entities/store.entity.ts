import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  storeUrl: string;

  @Column('decimal', { precision: 5, scale: 2 })
  cardFee: number;

  @Column('decimal', { precision: 5, scale: 2 })
  checkoutFee: number;

  @Column('decimal', { precision: 5, scale: 2 })
  gatewayFee: number;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.stores)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
