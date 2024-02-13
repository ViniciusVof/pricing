import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StoreService {
  constructor(@InjectRepository(Store) private storeRepo: Repository<Store>) {}

  create(createStoreDto: CreateStoreDto) {
    const store = this.storeRepo.create(createStoreDto);
    return this.storeRepo.save(store);
  }

  findAll() {
    return this.storeRepo.find();
  }

  findOne(id: string) {
    return this.storeRepo.findOne({
      where: { id },
    });
  }

  update(id: string, updateStoreDto: UpdateStoreDto) {
    return this.storeRepo.update({ id }, updateStoreDto);
  }

  remove(id: string) {
    return this.storeRepo.delete({ id });
  }
}
