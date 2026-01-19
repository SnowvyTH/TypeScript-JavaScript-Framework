"use strict";
// การเขียนคำอธิบายในโปรแกรมภาษา JavaScript ใช้เครื่องหมาย // หรือ /**/
console.log('Hello World');
// ปัญหาของ JavaScript ที่เกิดจากการเปลี่ยนประเภทของตัวแปร
let x = 10;
x = "JavaScript";
y = Math.pow(x, 2); // NaN
console.log(x);
console.log(y); // NaN
// อีกตัวอย่าง
let a = "10";
let z = a + 10; // 1010
console.log(z);
