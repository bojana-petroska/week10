"use strict";
let person1 = {
    name: 'bo',
    lastName: 'petroska',
    sayHi: (name) => `Hi from ${name}.`
};
console.log(person1.lastName);
console.log(person1.sayHi('anja'));
const musician1 = {
    name: 'dua',
    lastName: 'lipa',
    sayHi: (name) => name,
    instrument: 'drums',
    firstAlbum: 'moon'
};
const musician2 = {};
musician2.name = 'billy';
musician2.lastName = 'idol';
//musician2.sayHi('billy');
musician2.instrument = 'guitar';
musician2.firstAlbum = 'coming home';
const newChild = {
    name: 'baby',
    lastName: 'small'
};
