# npm initコマンドで新規プロジェクトフォルダ作成

```
>node -v  # バージョン確認
>npm -v
>where node  #場所の確認

>type .gitignore  #ファイルの表示
>git branch  #現在のブランチを表示

#新しいブランチを作成するとともにブランチを切り替える
>git checkout -b create-package-json

#npm initコマンドで新規プロジェクトフォルダ作成（package.jsonも新規作成）
>npm init -y  #-yフラグを使ってデフォルト設定を行う

>git status
>git add .
>git status
>git commit -m "create package.json"
>git push -u origin HEAD
>git checkout -  #ブランチの切り替え '-' は一つ前のブランチを指す
>git merge -
>git push origin HEAD

>sudu npm install -g npm  #npmの新しいバージョンをインストール
```

# typescriptのインストール

```
>tsc -v  # バージョン確認
>npm typescript -v
#--save-dev でインストールした場合は npx tsc -v 、npx typescript -v

>npm info typescript  #typescriptの情報を確認

#typescriptのインストール
>git checkout -b install-typescript  # ブランチ作成
>npm install -g typescript  #-gでグローバルにインストール
>npm uninstall -g typescript  #アンインストール

>npm install --save-dev typescript@3.7.5
>npx tsc -v

>git status
>git diff
>mkdir src

>touch src/install-typescript.ts  #空ファイルの作成（macのみ）
>copy nul foo.txt  #windows例文
>copy nul install-typescript.ts  #空ファイルの作成（windows）
>del install-typescript.ts  #ファイルの削除
```
[TypeScript入門 & 環境構築](https://typescript-jp.gitbook.io/deep-dive/getting-started)
[全部知ってる？ npmを使いこなすために絶対知っておきたい10のこと](https://www.webprofessional.jp/10-npm-tips-and-tricks/)
[アンインストールの方法！npm uninstallの使い方【初心者向け】](https://techacademy.jp/magazine/16158)
[古いTypeScriptバージョンがアンインストールしても消えないけど新しいバージョンで再インストールしたい](https://teratail.com/questions/257914)
[github microsoft/TypeScript](https://github.com/microsoft/TypeScript)
[ディレクトリを作成する](https://www.k-tanaka.net/cmd/md.php)
[ファイルを削除する](https://www.k-tanaka.net/cmd/del.php)

# Windows で vim を使用する

```
>bash  #Ubuntuモードに変更
>exit  #コマンドプロンプトに戻す
```

[えっ! Windows10から Vim が簡単に使えるぞ Windows Subsystem for Linux](http://memories.zal.jp/WP/blog/20170723_2845.html)
[WSLをインストールする](https://qiita.com/matarillo/items/61a9ead4bfe2868a0b86)

# TypeScript のコンパイルと実行

```
$ cd /mnt/
$ cd c/tsc/lesson/typescript_test/

$ vim src/install-typescript.ts  # vimの実行（ファイルを編集）

$ tsc src/install-typescript.ts  # コンパイル（これはエラー）
Command 'tsc' not found, but can be installed with:
sudo apt install node-typescript

$ ls ./node_modules/.bin
$ ls ./node_modules/.bin/tsc
./node_modules/.bin/tsc

>type install-typescript.js  # ファイル内容の確認

>npx tsc src/install-typescript.ts  # コンパイル

>node src/install-typescript.js  # 実行
{ message: 'Hello, TypeScript' }

>git add .
>git status
>git reset src/install-typescript.js
>git clean -f
>git commit -m "install typescript"
>git push -u origin HEAD
>git checkout -
>git merge -
>git push origin HEAD
```

# ts-nodeのインストールからコンパイルと実行まで

```
#ts-nodeインストール
>git checkout -b install-ts-node
>npm info ts-node
>npm install --save-dev ts-node@8.6.2  #インストール
>git diff package.json
>npx ts-node src/install-typescript.ts  #コンパイルと実行

$ vim src/install-typescript.ts
$ git status
$ git diff  #:qで終了

>git diff
>npx ts-node src/install-typescript.ts

>git add .
>git status
>git commit -m "install ts-node"  #コンパイルと実行
>git push -u origin HEAD
>git checkout -
>git merge -
>git push origin HEAD
```

# ts-node-dev

```:公式
#Install
npm i ts-node-dev --save-dev

#Usage
ts-node-dev --respawn --transpile-only server.ts
tsnd --respawn server.ts
```

```
>git checkout -b install-ts-node-dev
>npm info ts-node-dev
>npm install --save-dev ts-node-dev@1.0.0-pre.44
>git diff package.json
>git add .
>npx ts-node-dev --respawn src/install-typescript.ts  #実行
^C  #ctrl + C で終了

$ vim package.json
  "scripts": {
    "dev": "ts-node-dev --respawn",  #これを追加（省略したコマンド）
    "test": "echo \"Error: no test specified\" && exit 1"
  },
$ exit

>npm run dev src/install-typescript.ts  #登録したコマンドで実行
>git status
>git add .
>git diff --cached
>git commit -m "install ts-node-dev"
>git push -u origin HEAD
>git checkout -
>git merge -
>git push origin HEAD
```

# VSCode

Prettier - Code formatter をインストール（自動でコードが正規化される）

setting.jsonに次の3行を追加

```setting.json
    "editor.formatOnSave": true,
    "prettier.semi": true,
    "prettier.singleQuote": true
```

```
>npx tsc --init  #tsconfig.jsonをデフォルト設定で作成
message TS6071: Successfully created a tsconfig.json file.

>git status
>git add .
>type tsconfig.json

>code .  #プロジェクトとしてVSCodeを開く

>git status
>git add .
>git commit -m "create tsconfig.json and setting.json"
>git push origin HEAD
```

# データ型

## boolean

```
> echo 'export {};' > src/boolean.ts
> npm run dev src/boolean.ts
```

```src/boolean.ts
export {};

let isFinished: boolean = true;
isFinished = false;
console.log({ isFinished });
```

## バグの確認

```
> npx ts-node -v
v8.6.2
> npx ts-node-dev src/boolean.ts
Using ts-node version 8.6.2, typescript version 3.7.5
{ isFinished: 1 }
> npx ts-node src/boolean.ts    

C:\tsc\lesson\typescript_test\node_modules\ts-node\src\index.ts:421
    return new TSError(diagnosticText, diagnosticCodes)
           ^
TSError: ⨯ Unable to compile TypeScript:
src/boolean.ts:7:1 - error TS2322: Type '1' is not assignable to type 'boolean'.
7 isFinished = 1;

# ts-nodeの再インストール
> npm info ts-node versions  #バージョン確認
> npm uninstall --save-dev ts-node  #アンインストール
> npm install --save-dev ts-node@8.5.4  #インストール

> type package.json
> npx ts-node-dev src/boolean.ts
> npm run dev src/boolean.ts

> git add .
> git diff --cached
> git commit -m "fix ts-node-dev issue by rollbacking ts-node version"
> git push origin HEAD
```

## number-string型

```src/number-string.ts
export {};

let year: number = 1976;
// year = false;
console.log(year);

let age: number = 0x2B;
console.log(age);

let name: string = 'Ham';
// name = 10;
console.log(name);
```

```
> echo 'export {};' > src/number-string.ts      
PS C:\tsc\lesson\typescript_test> npm run dev src/number-string.ts
```

## array型

```
> echo 'export {};' > src/array.ts              
> npm run dev src/array.ts
```

```src/array.ts
export {};

let numbers: number[] = [1, 2, 3];
console.log(numbers);

let numbers2: Array<number> = [1, 2, 3];
console.log(numbers2);

let strings1 = ['Tokyo', 'Osaka', 'Kyoto'];
console.log(strings1);
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];
console.log(strings2);

let strings: string[] = ['Typescript', 'JavaScript', 'CoffeeScript'];
console.log(strings);

let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300]
];
console.log(nijigenHairetsu);

let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
console.log(hairetsu);

let hairetsu2: Array<string | number | boolean> = [1, false, 'Japan'];
console.log(hairetsu2);
```

## tuple型

```
> echo 'export {};' > src/tuple.ts
> npx ts-node-dev --respawn src/tuple.ts 
```

```src/tuple.ts 
export {};

let profile: [string, number] = ['Ham', 43];
// profile = [43, 'ham'];
console.log(profile);

> git add .
> git commit -m "number, string, array, tuole"      
> git push origin HEAD
```

## any型

```
> npm info axios
> npx ts-node-dev --respawn src/any.ts  #axiosのインストール
> echo 'export {};' > src/any.ts
> npx ts-node-dev --respawn src/any.ts

> git add .
> git commit -m "create any.ts"
> git push origin HEAD
```

```src/any.ts
import axios from 'axios';

export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';
console.log(url);

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[];
  data = response.data;
  console.log(data);
});
```

## void型

```
> echo 'export {};' > src/void.ts
> npx ts-node-dev --respawn src/void.ts
```

```src/void.ts
export {};

function returnNothing1(): undefined {
  console.log('I don\'t return anything');
  return undefined;
}

console.log(returnNothing1());

function returnNothing(): void {
  console.log('I don\'t return anything');
}

console.log(returnNothing());
```

## null型、undefined型

```
> echo 'export {};' > src/null-and-undefined.ts
> npx ts-node-dev --respawn src/null-and-undefined.ts
```

```src/null-and-undefined.ts
export {};

let absence: null = null;
// absence = 'Hello';
console.log(absence);

let data: undefined = undefined;
// data = 123;
console.log(data);
```

## never型

```src/never.ts
export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
// let bar: never = undefined;
let bar2: never = error('only me!');

console.log(foo);
console.log(bar2);
```

## object型

```
> echo 'export {};' > src/object.ts
> npx ts-node-dev --respawn src/object.ts 
```

```src/object.ts
export {};

let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1976 };
console.log(profile1);

let profile2: {
  name: string;
} = { name: 'Ham' };
// profile2 = { birthYear: 1976 };
profile2 = { name: 'Nimo' };
console.log(profile2);
```

## 型エイリアス（Type Alias）

```
> src/type-aliases.ts       
> npx ts-node-dev --respawn src/type-aliases.ts
```

```src/type-aliases.ts
export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
console.log(fooString);

const fooMojiretsu: Mojiretsu = 'Hello';
console.log(fooMojiretsu);

const exsample1 = {
  name: 'Ham',
  age: 43
};
console.log(exsample1);

type Profile = {
  name: string;
  age: number;
};

const exsample2: Profile = {
  name: 'Ham',
  age: 43
}
console.log(exsample2);

type Profile2 = typeof exsample1;
```

## interface

```
> echo 'export {};' > src/interfaces.ts
> npx ts-node-dev --respawn src\interfaces.ts
```

```src\interfaces.ts
export {};

type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'Ham-san',
  age: 43
};
console.log(object);
```

## 型安全

```
> echo 'export {};' > src/type-safety.ts
> npx ts-node-dev --respawn src/type-safety.ts
```

```src/type-safety.ts
export {};

let isFinished: boolean = true;
// isFinished = 1;
```

## unknown型

```
> echo 'export {};' > src/unknown.ts            
> npx ts-node-dev --respawn src/unknown.ts
```

```src/unknown.ts
export {};

const kansu = () => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log(sumAny);

// console.log(typeof numberUnknown);
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}
```

## intersection型

```
> echo 'export {};' > src/intersection.ts
> npx ts-node-dev --respawn src/intersection.ts
```

```src/intersection.ts
export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   batttingAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};

console.log(DaimajinSasaki);
console.log(OchiaiHiromitsu);
console.log(OtaniShouhei);
```

## union型（共用体型）

```
> echo 'export {};' > src/union.ts              
> npx ts-node-dev --respawn src/union.ts
```

```src/union.ts
export {};

let value: number | string = 1;
value = 'foo';
value = 100;
```

## Literal型

```
> echo 'export {};' > src/literal.ts
> npx ts-node-dev --respawn src/literal.ts
```

```src/literal.ts
export {};

let dayOfTheWeek: '日' | `月` | `火` | `水` | `木` | `金` | `土` = '日';
dayOfTheWeek = '月';
// dayOfTheWeek = '31';
console.log(dayOfTheWeek);

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13;
console.log(month);

let TRUE: true = true;
// TRUE = false;
console.log(TRUE);
```

## enum型（列挙型）

```
> echo 'export {};' > src/enum.ts               
> npx ts-node-dev --respawn src/enum.ts
```

```src/enum.ts
export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// console.log(Months[0]);
console.log(Months[1]);
console.log(Months[11]);
console.log(Months[12]);

// const MonthsJs = {
//   January: 0,
//   February: 1
// };

// console.log(MonthsJs.January);
// console.log(MonthsJs.February);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00',
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({ green });

// COLORS.YELLOW;

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}

console.log(COLORS.YELLOW);
```

# 関数

## 基本的な関数

```src/function.ts
export {};

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.78, 86));
```

## 無名関数

```src/anonymous-function.ts
export {};

// let bmi = function(height: number, weight: number): number {
//   return weight / (height * height);
// };

let bmi: (height: number, weight: number) => number = function(
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(1.78, 78));
```

## アロー関数（ラムダ式）

```src/arrow-function.ts
export {};

let bmi1 = (height: number, weight: number): number => {
  return weight / (height * height);
};
console.log(bmi1(1.78, 78));

let bmi2: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / height ** 2;
};
console.log(bmi2(1.78, 78));

let bmi3 = (height: number, weight: number): number => weight / height ** 2;
console.log(bmi3(1.78, 65));

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bmi(1.78, 78));
```

Shift+Alt+F　コードをフォーマット

## オプショナルパラメータ

```src\optional-arguments.ts
export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / height ** 2;
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

// bmi(身長, 体重, console.logで出力するかどうか)
bmi(1.78, 86, true);
// bmi(1.78, 86, false);
// bmi(1.78, 86);
```

## デフォルトパラメータ

```src\default-parameters.ts
export {};

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));
console.log(nextYearSalary(1000));
```

## Restパラメーター

```src/rest-parameters.ts
export {};

const reducer = (previousValue: number, currentValue: number) => {
  // console.log({ previousValue, currentValue });
  return previousValue + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));

// console.log([1, 2, 3, 4].reduce(reducer));
```

## オーバーロード

```src/overload.ts
export {};

// シグネチャを作成
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));
```

# クラス

## 基本的なクラス

```src/my-first-class.ts
export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30);
console.log(taro.profile());
// let hanako = new Person();
```

## アクセス修飾子

```
> cp src/my-first-class.ts src/access-modifiers.ts
```

```src/access-modifiers.ts
export {};

class Person {
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
console.log(taro);
// console.log(taro.age);
// let hanako = new Person();
```

## constructor

```src/more-constructor.ts
export {};

// class Person {
//   public name: string;
//   protected age: number;
//
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// コンストラクタで初期化を行う
class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('太郎', 20);
console.log(me);
```

## getter, setter

```src/getter-and-setter.ts
export {};

// * owner
//  * 所有者
//  * 初期化時に設定できる。
//  * 途中で変更できない。
//  * 参照できる。
// * secretNumber
//  * 個人番号
//  * 初期化時に設定できる。
//  * 途中で変更できる。
//  * 参照できない。

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  public debugPrint(): string {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('太郎', 1234567890);
// card.owner = '二郎';
console.log(card.owner);

// console.log(card._secretNumber);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
console.log(card.secretNumber);

console.log(card);
```

## readonly修飾子

```src/readonly.ts
export {};

/*
class VisaCard {
  readonly owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }
}

class VisaCard {
  constructor(readonly owner: string) {}
}
*/

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('太郎');
console.log(myVisaCard.owner);
// myVisaCard.owner = '二郎';
```

## 静的メンバの定義

```src/static-members.ts
export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    // return "Hey, guys! Are you interested in TypeScript? Let's dive into TypeScript!";
    // return `Hey, guys! This is ${Me.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
```

## namespace（名前空間）

```src/namaspace.ts
export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('太郎');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('二郎');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
```

## 継承（inheritance）

```src/inheritance.ts
export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    super(name); // 親クラスのコンストラクタメソッドそのもの
    this.speed = speed;
  }

  run(): string {
    return `${super.run()} ${this.speed}Km/h.`;
  }
}

// class Lion extends Animal {
//   constructor(public name: string, public speed: number) {
//     super(name); // 親クラスのコンストラクタメソッドそのもの
//   }

//   run(): string {
//     return `I can run ${this.speed}Km`;
//   }
// }

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());
```

## 抽象クラスと抽象メソッド

```src/abstract-classes.ts
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
```

## インターフェイス・リターンズ

```src/return-of-interfaces.ts
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
```

# 高度な型

## 型の互換性

```src/type-compatibility.ts
export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: `fooStringLiteral` = `fooStringLiteral`;
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'HamSan');
console.log(typeof me);
```

## ジェネリクス

```src/generics.ts
export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(123456));
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello, generics!').echo());
console.log(new Mirror<boolean>(false).echo());
```

## 型アサーション

```src/type-assertions.ts
export {};

let name: any = 'Ham';

let length = name.length as number;
// let length = (name as string).length;
// let length = (<string>name).length;

// length = 'foo';

console.log(typeof name);
console.log(length);
```

## constアサーション

```src/as-const.ts
export {};

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const;
// nickname = 'Hantaro';

let profile = {
  name: 'Atsushi',
  height: 178,
} as const;

// profile.name = 'Ham';
// profile.height = 180;
```

## Nullable-Type

```src/nullable-types.ts
export {};

// tsconfig.jsonの設定を変更してnullを許容することができる
// "strictNullChecks": false,              /* Enable strict null checks. */

// let profile: { name: string; age: number } = {
//   name: 'Ham',
//   age: null,
// };

// profile = null;

let profile: { name: string; age: number | null } = {
  name: 'Ham',
  age: null,
};

console.log(profile);
```

## インデックスシグネチャ

```src/index-signatures.ts
export {};

// let profile: { name?: string } = {};
// let profile: { [index: string]: string | number } = {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Ham', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

// profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';

console.log(profile);
```

# Utility TypesとConditional Types

## Pertial と Required

```src/pertial-and-required.ts
export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// type Profile2 = {
//   name?: string;
//   age?: number;
// };

type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;
```

## Mapped Types

```src/mapped-types.ts
export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

type Optional<T> = { [P in keyof T]?: T[P] | null };
type OptionalProfile = Optional<Profile>;
```

## Readonly

```src/utility-types-readonly.ts
export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 40,
};

// friend.age++;

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
```

## Record

```src/record.ts
export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
  Shiga: { kanji_name: '滋賀', confirmed_cases: 13 },
};
```

## Exclude, Extract, NunNullable

```src/exclude-extract-nonnullable.ts
export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// Extract
type FunctionTypeExtract = Extract<SomeTypes, DebugType>;
type NonFunctionByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// NunNullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
```

## Conditional Types と Distributive Conditional Types

```src/exclude-extract-nonnullable-definition.ts
export {};

// type MyExclude =
//   | (string extends string | number ? never : string)  // extends: 互換性がある
//   | (number extends string | number ? never : number)
//   | (DebugType extends string | number ? never : DebugType);

type MyExclude = DebugType;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
```

## Pick と Omit

```src/pick-and-omit.ts
export {};

type DetailsProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailsProfile, 'name' | 'weight'>;
type SmallProfile = Omit<DetailsProfile, 'height'>;

// type MyOmit = Pick<
//   DetailsProfile,
//   Exclude<'name' | 'height' | 'weight', 'height'>
// >;
type MyOmit = Pick<DetailsProfile, 'name' | 'weight'>;
type mySmallProfile = MyOmit;
```

## Return Type

```src/return-type.ts
export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;
```

## Conditional Typesで使用されるinferキーワードについて

```src\infer-keyword.ts
export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
```

## Parameters

```src/parameters.ts
export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Ham', 43);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 76];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
```

## CostructorParameters

```src/constructor-parameters.ts
export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 30);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['Ham', 43];
const ham = new Person(...profile);
console.log(ham);

type MyConstructorParameters<T extends new (...args: any) => any> =
  T extends new (...args: infer P) => any ? P : never;
```

# React

[Mac - wgetコマンドをインストール（使えるようにする）](https://webkaru.net/dev/mac-wget-command-install/)

```
$ brew install wget
$ wget -h
$ cd react
$ wget https://github.com/DiveIntoHacking/react-starter-kit-in-typescript-with-node-v12.14.1/archive/v1.5.tar.gz
$ tar zxvf v1.5.tar.gz
$ ls
$ mv react-starter-kit-in-typescript-with-node-v12.14.1-1.5 my-first-react-app-in-typescript
$ ls
$ cd my-first-react-app-in-typescript
$ less package.json 
$ less tsconfig.json 

$ brew install yarn --ignore-dependencies
$ yarn install
$ yarn start
^C

$ git init
$ git add .
$ git commit -m "init"
$ git status

# githubにリポジトリを作成

```

[GitHubがパスワード認証を廃止するらしいので](https://qiita.com/shiro01/items/e886aa1e4beb404f9038)

Select scopes　の権限設定
→ repoにチェックを入れる


[HTTP/HTTPSでまとめてデータを取得するwgetコマンドとは？](https://atmarkit.itmedia.co.jp/ait/articles/1506/09/news006.html)
[Yarn](https://e-words.jp/w/Yarn.html)
[homebrewでyarnインストール](https://qiita.com/niwa1903/items/fb1d37c180d6cbc696c8)

```
$ wget https://github.com/DiveIntoHacking/react-starter-kit-in-typescript-with-node-v12.14.1/archive/v1.5.tar.gz
$ tar zxvf v1.5.tar.gz
$ cd react-starter-kit-in-typescript-with-node-v12.14.1-1.2
$ yarn install
$ yarn start
```
