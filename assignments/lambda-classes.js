// CODE here for your Lambda Classes

//----------------------Classes------------------------------------

class Person {
    constructor(attributes){
        this.newName = attributes.name,
        this.newAge = attributes.age,
        this.newLocation = attributes.location
    }

    speak(){
        return `Hello my name is ${this.newName}, I am from ${this.newLocation}`;
    }
}

class Instructor extends Person {
    constructor(insAttributes){
        super(insAttributes);
        this.newName = insAttributes.name,
        this.newSpecialty = insAttributes.specialty,
        this.newFavLanguage = insAttributes.favLanguage,
        this.newCatchPhrase = insAttributes.catchPhrase
    }

    demo(subject){
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject){
        return `${student.newName} recieves a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor (stuAttributes){
        super(stuAttributes);
        this.newName = stuAttributes.name,
        this.newPreviousBackground = stuAttributes.previousBackground,
        this.newClassName = stuAttributes.className,
        this.newFavSubjects = stuAttributes.favSubjects
    }

    listsSubjects(){
        return `${this.newFavSubjects}`;
    }

    PRAssignment(subject){
        return `${this.newName} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.newName} has begun Sprint Challenge for ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor (PMAttributes){
        super(PMAttributes);
        this.newName = PMAttributes.name,
        this.newGradClassName = PMAttributes.gradClassName,
        this.newFavInstructor = PMAttributes.favInstructor
    }

    standUp(channel){
        return `${this.newName} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject){
        return `${this.newName} debugs ${student.newName}'s code on ${subject}`;
    }
}

//---------------------- Objects --------------------------------

//----------------------Person Obects -----------------------------

const addison = new Person({
    name: 'Addison',
    age: 26,
    location: 'Evansville'
});

const stella = new Person({
    name: 'Stella',
    age: 25,
    location: 'New York'
});

//------------------------Instructor Objects ----------------------

const brit = new Instructor({
    name: 'Brit',
    location: 'Canada',
    age: 'none ya bidness',
    favLanguage: 'French',
    specialty: 'Web Dev',
    catchPhrase: `Pray for the internet guy` 
});

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

//----------------------------Student Objects ---------------------

const austin = new Student ({
    name: 'Austin',
    location: 'Texas',
    age: 20,
    previousBackground: 'Pizza Hut',
    className: 'WEB 24',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const lee = new Student ({
    name: 'Lee',
    location: 'Newburgh',
    age: 28,
    previousBackground: 'Computers Plus',
    className: 'iOS 132',
    favSubjects: ['Auto Layout', 'Swift', 'Protocols']
});

//---------------------------PM Objects ---------------------------

const dwight = new ProjectManagers ({
    name: 'Dwight Shrute',
    location: 'Shrute Farms',
    age: 38,
    gradClassName: 'Jui Jitsu 101',
    favInstructor: 'Michael Scott'
});

const michael = new ProjectManagers ({
    name: 'Michael Scott',
    location: 'Dunder Mifflin',
    age: 40,
    gradClassName: 'PaRkOuR',
    favInstructor: 'Jan'
});

//---------------------Console logs-------------------------------

console.log(addison.speak());
console.log(stella.speak());
console.log(brit.newCatchPhrase);
console.log(fred.grade(lee, 'iOS'));
console.log(brit.demo('Classes'));
console.log(austin.newPreviousBackground);
console.log(lee.listsSubjects([]));
console.log(austin.sprintChallenge('JavaScript'));
console.log(dwight.newFavInstructor);
console.log(michael.standUp('WEB 24'));
console.log(dwight.debugsCode(austin, 'HTML'));
console.log(lee.PRAssignment('Flexbox'));
