import { Store } from 'src/store/entities/store.entity';
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
export class Pricing {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  productName: string;
  @Column('decimal', { precision: 5, scale: 2 })
  productCost: number;
  @Column('decimal', { precision: 5, scale: 2 })
  shippingCost: number;
  @Column('decimal', { precision: 5, scale: 2 })
  marketingFee: number;

  @Column()
  storeId: string;

  @ManyToOne(() => Store, (store) => store.pricings)
  @JoinColumn({ name: 'storeId', referencedColumnName: 'id' })
  store: Store;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
