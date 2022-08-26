type Words = {
    [key: string]: string
}

class Dict {
    private words: Words 
    constructor() {
        this.words = {}
    }
    add(word: Word) {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term: string) {
        return this.words[term];
    }
    del(term: string) {
        if(this.words[term]) {
            delete(this.words[term]);
        }
    }
    update(word: Word) {
        if(this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    }
    printWord() {
        return this.words;
    }
}

class Word {
    constructor(
        public readonly term: string,
        public readonly def: string
    ) {}
}

const kimchi = new Word("kimchi", "한국전통음식");
const bulgogi = new Word("bulgogi", "한국고기음식");
const gimbab = new Word("gimbab", "한국간편음식");
const gimbab2 = new Word("gimbab", "한국간편음식2");

const dict = new Dict()

dict.add(kimchi);
dict.add(bulgogi);
dict.add(gimbab);
dict.def("kimchi");
dict.def("bulgogi");
dict.def("gimbab");
dict.update(gimbab2);
dict.del("kimchi");
dict.printWord();