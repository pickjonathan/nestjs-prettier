import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  private readonly items: string[] = ['item1', 'item2'];

  getItems(): string[] {
    return this.items;
  }

  addItem(item: string): void {
    this.items.push(item);
  }
}
