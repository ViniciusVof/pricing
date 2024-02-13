import { Injectable } from '@nestjs/common';
import { CreatePricingDto } from './dto/create-pricing.dto';
import { UpdatePricingDto } from './dto/update-pricing.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pricing } from './entities/pricing.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PricingsService {
  constructor(
    @InjectRepository(Pricing) private pricingRepo: Repository<Pricing>,
  ) {}

  create(createPricingDto: CreatePricingDto) {
    const pricing = this.pricingRepo.create(createPricingDto);
    return this.pricingRepo.save(pricing);
  }

  findAll() {
    return this.pricingRepo.find();
  }

  findOne(id: string) {
    return this.pricingRepo.findOne({
      where: { id },
    });
  }

  findAllByStoreId(id: string) {
    return this.pricingRepo.find({
      where: {
        store: {
          id,
        },
      },
    });
  }

  update(id: string, updatePricingDto: UpdatePricingDto) {
    return this.pricingRepo.update({ id }, updatePricingDto);
  }

  remove(id: string) {
    return this.pricingRepo.delete({ id });
  }
}
