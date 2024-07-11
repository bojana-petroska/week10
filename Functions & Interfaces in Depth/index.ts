interface Iperson {
    name: string, 
    lastName: string,
    age?: number,
    sayHi: (name: string) => string
}

let person1: Iperson = {
    name: 'bo',
    lastName: 'petroska',
    sayHi: (name) => `Hi from ${name}.`
}

console.log(person1.lastName);
console.log(person1.sayHi('anja'));


interface IMusician extends Iperson {
    instrument: string;
    firstAlbum: string;
    numberOFVideos?: number;
}

const musician1: IMusician = {
    name: 'dua',
    lastName: 'lipa',
    sayHi: (name) => name,
    instrument: 'drums',
    firstAlbum: 'moon'
}

const musician2 = <IMusician> {}
musician2.name = 'billy';
musician2.lastName = 'idol';
//musician2.sayHi('billy');
musician2.instrument = 'guitar';
musician2.firstAlbum = 'coming home';


interface IParent1 {
    name: string
}

interface IParent2 {
    lastName: string
}

interface Child extends IParent1, IParent2 {
    age?: number
}

const newChild: Child = {
    name: 'baby',
    lastName: 'small'
}



