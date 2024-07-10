"use strict";
const isCat = (animal) => {
    return 'meow' in animal;
};
const pet = {
    meow: () => {
        console.log('Meow');
    },
    bark: () => {
        console.log('Bark');
    }
};
if (isCat(pet)) {
    pet.meow();
}
else {
    pet.bark();
}
;
const isStudent = (person) => {
    return 'class' in person;
};
// const person: Student | Developer = {
// }
// if (isStudent(person)) {
// } else {
// }
