export {};

abstract class Animal {
  abstract cry(): string; // 抽象メソッドはオーバーライドが必要
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return `grrrr`;
  }
}
