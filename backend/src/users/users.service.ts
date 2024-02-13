import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async create(createUserDto: CreateUserDto) {
    const saltRounds = 10;

    const passwordHash = await hash(createUserDto.password, saltRounds);

    const newUser: CreateUserDto = {
      ...createUserDto,
      password: passwordHash,
    };

    const user = this.userRepo.create(newUser);

    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find({
      relations: {
        stores: true,
      },
    });
  }

  findOne(id: string) {
    return this.userRepo.findOne({
      where: { id },
    });
  }

  findOneByEmail(email: string) {
    return this.userRepo.findOneBy({
      email,
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepo.update({ id }, updateUserDto);
  }

  remove(id: string) {
    return this.userRepo.delete({ id });
  }
}
