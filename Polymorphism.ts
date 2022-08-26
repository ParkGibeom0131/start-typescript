// Polymorphism(다형성) 다른 모양의 코드를 가질 수 있게 해주는 것
// Polymorphism을 이룰 수 있는 방법은, Generics를 사용하는 것
// Generics는 concrete 타입이 아닌 placeholder 타입을 쓸 수 있도록 해줌
// 때가 되면, 타입스크립트가 placeholder 타입을 concrete 타입으로 바꿔줌

// Storage는 타입스크립트에 의해 이미 선언된 자바스크립트의 웹 스토리지 API를 위한 인터페이스이지만,
// 다음과 같이 interface를 사용하면 Storage에 새 property를 추가하게 됨
// interface Storage { }

interface SStorage<T> {
    [key: string]: T
}

// Generic을 class로 보내고 class는 generic을 interface로 보낸 뒤,
// interface는 generic을 사용한다.
class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key: string, value: T) { 
        if(this.storage[key]) {
            throw console.error();
        }
        this.storage[key] = value;
    }
    remove(key: string) { 
        delete this.storage[key]
    }
    get(key: string):T { 
        return this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}

const stringsStorage = new LocalStorage<string>();
stringsStorage.get("key");
stringsStorage.set("hello", "how are you");

const booleansStorage = new LocalStorage<boolean>();
booleansStorage.get("x");
booleansStorage.set("hello", true);