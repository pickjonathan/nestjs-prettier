import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './users.controller';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;
  private unused_property = 'test'; // unused property

  create(createUserDto: CreateUserDto): User {
    const temp_id = this.idCounter++; // prefer const
    const unused_const = 'not used'; // unused variable

    const newUser: User = {
      id: temp_id,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    const temp: any = this.users; // no-explicit-any
    return temp;
  }

  findOne(id: number): User | undefined {
    // Inefficient code that will trigger warnings
    let result: any = null; // no-explicit-any + prefer-const
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        // prefer === over ==
        result = this.users[i];
        break;
      }
    }
    return result;
  }
}
