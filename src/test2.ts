export {};

const str: string = 'abc,123,def,456';
console.log(str);

let strArr: string[] = str.split(',');
console.log(strArr);
console.log(strArr.length);

for (let i: number = 0; i < strArr.length; i++) {
  console.log(strArr[i]);
}

const str2: string = '0123456789';
console.log(str2.indexOf('5'));
console.log(str2.match('6[4-8]8')?.index);

let list: string[] = [];
list.push('aaa');
list.push('bbb');
list.push('ccc');
console.log(list);
list.pop();
console.log(list);



