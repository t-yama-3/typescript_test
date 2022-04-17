export {};

class Mahotsukai {}
class Souryo {}

// クラスは1つしか継承できない
class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

// インターフェイスは複数の実装ができる
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun!');
  }

  kougeki(): void {
    console.log('kougeki!');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
