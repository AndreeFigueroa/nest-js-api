import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto as any);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: number) {
    return this.userRepository.findByPk(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(updateUserDto as any, {
      where: { id },
    });
  }
  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  remove(id: number) {
    return this.userRepository.destroy({
      where: { id },
    });
  }
}
