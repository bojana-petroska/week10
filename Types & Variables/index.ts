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

const ahmad: Student | Developer = {
    name: 'Ahmad',
    class: 'software development',
    //codingStack: 'MERN'
}

const john: Student | Developer = {
    name: 'Ahmad',
    codingStack: 'JavaScript'
}

if (isStudent(ahmad)) {
    console.log(ahmad.class)
}

type Person = {
    name: string;
    age: number;
}

type ReadOnlyType = {
    readonly [K in keyof Person] : Person[K]
}

type PartialPerson = Partial<Person>

const newPerson: ReadOnlyType = {
    name: 'ahmad',
    age: 10
}
