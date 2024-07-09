interface Cat {
    meow(): void;
}

interface Dog {
    bark(): void;
}

const isCat = (animal: Cat | Dog): animal is Cat => {
    return 'meow' in animal;
}

const pet: Cat | Dog = {
    meow: () => {
        console.log('Meow');
    },
    bark: () => {
        console.log('Bark')
    }
}

if (isCat(pet)) {
    pet.meow();
} else {
    pet.bark();
};

interface Student {
    name: string;
    class: string;
}

interface Developer {
    name: string;
    codingStack: string;
}

const isStudent = (person: Student | Developer): person is Student => {
    return 'class' in person;
}

// const person: Student | Developer = {

// }

// if (isStudent(person)) {

// } else {

// }
