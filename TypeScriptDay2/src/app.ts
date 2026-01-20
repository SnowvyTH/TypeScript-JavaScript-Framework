// การ import แบบปกติผ่านชื่อ module ที่ต้องการ
import { message as msg, messageTH, hello, welcome as wel, welcome } from './topics/hello'

// import logMessage from "./topics/logger";
// การ import สามารถเป็นชื่ออะไรก็ได้
import logs from './topics/logger'
// import { default as logs } from './topics/logger'
// import ทุกอย่างเป็น object
import * as hey from './topics/hello'

// // // เรียกใช้งานตัวแปรและฟังก์ชั่นที่ import มา
console.log(msg)
console.log(messageTH)
hello()
welcome()
wel()

logs("222")
console.log(hey.message)
console.log(hey.hello)
hey.hello()
hey.welcome()

import { variabletype } from './topics/variable_type'
variabletype()

import { interfaceandtype } from "./topics/interface_and_type";
interfaceandtype()

import { functiontype } from './topics/function'
functiontype()

import { classObject } from './topics/class_object'
classObject()

import { generic } from './topics/generic'
generic()

import { asyncpromise } from './topics/async_promise'
asyncpromise()

import { asyncawait } from './topics/async_await'
asyncawait()