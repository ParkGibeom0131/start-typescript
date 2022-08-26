// 클래스는 인터페이스를 상속하기도 하고, 타입을 상속할 수도 있다.
// 타입스크립트에게 오브젝트의 모양을 알려주기 위해서는 인터페이스를 쓰고
// 나머지 상황에서는 타입을 사용

// type PlayerA = {
//     name: string
// }
// type PlayerAA = PlayerA & {
//     lastName: string
// }
// const playerA : PlayerAA = {
//     name: "yeon",
//     lastName: "li"
// }
// /////
// interface PlayerB {
//     name: string
// }
// interface PlayerBB extends PlayerB {
//     lastName: string
// }
// interface PlayerBB {
//     health: number
// }
// const playerB : PlayerBB = {
//     name: "yeon",
//     lastName: "li",
//     health: 10
// }
// /////
// type PlayerC = {
//     firstName: string
// }
// interface PlayerD {
//     firstName: string
// }

// class User implements PlayerC {
//     constructor(
//         public firstName: string
//     ) {}
// } 
// // 
// class User implements PlayerD {
//     constructor(
//         public firstName: string
//     ) {}
// }

// abstract class User {
//     constructor(
//         protected firstName: string,
//         protected lastName: string
//     ) {}
//     abstract sayHi(name: string): string
//     abstract fullName(): string
// }

// class Player extends User{
//     fullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     sayHi(name: string): string {
//         return `Hello ${name}. My name is ${this.fullName()}`
//     }
// }

interface User {
    firstName: string,
    lastName: string,
    sayHi(name: string): string
    fullName(): string
}
interface Human {
    health: number
}

class Player implements User, Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) {}
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string): string {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

function makeUser(user: User): User{
    return {
        firstName: "yeon",
        lastName: "li",
        fullName: () => "xx",
        sayHi: (name) => "string"
    }
}

makeUser({
    firstName: "yeon",
    lastName: "li",
    fullName: () => "xx",
    sayHi: (name) => "string"
})
