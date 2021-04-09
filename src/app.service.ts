import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './user/user.entity';
import {Repository} from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {
  }
  getHello(): string {
    return 'Hello World!';
  }
  async create(data: any) : Promise<User>{
    return this.userRepository.save(data);
  }
  async findOne(condition:any):Promise<User>{
    return this.userRepository.findOne(condition);
  }
}
