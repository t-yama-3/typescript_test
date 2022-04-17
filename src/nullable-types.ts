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
