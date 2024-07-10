interface Employee {
    name: string,
    surname: string,
}

interface Engineer extends Employee {
    department: string,
    techStack: string[],
    myJob(): void
}

interface Manager extends Employee {
    teams: number,
    projects: string[]
    myManagingJob(): void
}

const engineer1: Engineer = {
    name: 'daniel',
    surname: 'gilabert',
    department: 'TGA',
    techStack: ['JS', 'TS', 'Java'],
    myJob: function() {console.log('do what I need')}
}

const manager1: Manager = {
    name: 'yann',
    surname: 'herve',
    teams: 3,
    projects: ['Janowitz', '23Haus'],
    myManagingJob: function() {console.log('I love my managing job')}
}

//engineer1.myJob();
//manager1.myManagingJob();

const printDetails = (employee: Engineer | Manager): void => {
    // employee => Engineer or Manager
    //console.log(employee.name);

    // works with employee: Employee
    // if ('department' in employee) {
    //     employee.department
    // }

    if ((employee as Engineer).department) {
        const eng = employee as Engineer;
        eng.department;
        console.log(`Engineer's department is: ${eng.department}`);
        console.log(`Tech Stack: ${eng.techStack.join(', ')}`)
    } else if ((employee as Manager).projects) {
        const manager = employee as Manager;
        manager.projects
        console.log(`The manager's projects are: ${manager.projects.join(', ')}`)
    }

}

printDetails(engineer1);
printDetails(manager1);


