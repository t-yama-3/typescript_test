export {};

let nums: number[] = [];
nums.push(12);
nums.push(24);
nums.push(36);
console.log(nums);

let arr1: Array<number> = [];
arr1.push(2);
arr1.push(4);
// arr1.push(6);
console.log(arr1);

let nums2d: number[][] = [];
nums2d.push(nums);
nums2d.push(arr1);
console.log(nums2d);

let nums1: number[] = new Array<number>(3);
nums1[0] = 1;
nums1[1] = 2;
nums1[2] = 3;
console.log(nums1);


let nums3: number[] = new Array<number>(3, 4);
nums3[0] = 1;
nums3[1] = 2;
nums3[2] = 3;
console.log(nums3);


