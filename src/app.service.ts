import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // This will cause linting errors
    const unused_variable = 'test'; // var instead of const/let
    const another_unused = 'unused'; // unused variable
    eval('console.log("dangerous eval")'); // eval usage

    return 'Hello World!';
  }
}
