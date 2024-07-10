"use strict";
const engineer1 = {
    name: 'daniel',
    surname: 'gilabert',
    department: 'TGA',
    techStack: ['JS', 'TS', 'Java'],
    myJob: function () { console.log('do what I need'); }
};
const manager1 = {
    name: 'yann',
    surname: 'herve',
    teams: 3,
    projects: ['Janowitz', '23Haus'],
    myManagingJob: function () { console.log('I love my managing job'); }
};
//engineer1.myJob();
//manager1.myManagingJob();
const printDetails = (employee) => {
    // employee => Engineer or Manager
    //console.log(employee.name);
    // works with employee: Employee
    // if ('department' in employee) {
    //     employee.department
    // }
    if (employee.department) {
        const eng = employee;
        eng.department;
        console.log(`Engineer's department is: ${eng.department}`);
        console.log(`Tech Stack: ${eng.techStack.join(', ')}`);
    }
    else if (employee.projects) {
        const manager = employee;
        manager.projects;
        console.log(`The manager's projects are: ${manager.projects.join(', ')}`);
    }
};
printDetails(engineer1);
printDetails(manager1);
