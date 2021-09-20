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
