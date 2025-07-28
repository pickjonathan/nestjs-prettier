import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // Multiple linting errors for SARIF testing
    const unused_var = 'test'; // prefer-const + unused-vars
    const another_unused = 'unused'; // unused-vars
    let duplicate_var = 'test';
    let duplicate_var = 'test2'; // duplicate declaration

    // Dangerous practices
    eval('console.log("eval usage")'); // no-eval

    // Type issues
    const obj: any = {}; // no-explicit-any
    console.log(obj);

    // Unreachable code
    return 'Hello World!';
    console.log('unreachable'); // unreachable code
  }
}
