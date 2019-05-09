// CODE here for your Lambda Classes

class Person {
  constructor(personAttrs) {
    this.name = personAttrs.name;
    this.age = personAttrs.age;
    this.location = personAttrs.location;
  }

  speak() {
    return `Hello my name is ${this.name}, 
        I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(insAttrs) {
    super(insAttrs);
    this.specialty = insAttrs.specialty;
    this.favLanguage = insAttrs.favLanguage;
    this.catchPhrase = insAttrs.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(Student, subject) {
    return `${Student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(studAttrs) {
    super(studAttrs);
    this.previousBackground = studAttrs.previousBackground;
    this.className = studAttrs.className;
    this.favSubjects = studAttrs.favSubjects;
  }

  listSubjects() {
    return `${[...this.favSubjects]}`;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has began a sprint challenge for ${subject}`;
  }
}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }

    standUp(slack) {
        return `${this.name} announces to ${slack} the stand up times!`;
    }

    debugsCode(Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
    }
}

const alexis = new Student({
    name: 'Alexis',
    location: 'College Station',
    age: 25,
    previousBackground: 'Biomedical Engineering/Informatics',
    className: 'WEB20',
    favSubjects: ['Javascript', ' Java', ' React'],
  });
  
  console.log(alexis.previousBackground)
  console.log(alexis.className)
  console.log(alexis.favSubjects)
  console.log(alexis.listSubjects())
  console.log(alexis.PRAssignment('JavaScript'))
  console.log(alexis.sprintChallenge('JavaScript'))

  const mario = new Student({
    name: 'Mario',
    location: 'San Francisco',
    age: 195,
    previousBackground: 'Death',
    className: 'CS1',
    favSubjects: ['.NET', ' Perl', ' C'],
  });
  
  console.log(mario.previousBackground)
  console.log(mario.className)
  console.log(mario.favSubjects)
  console.log(mario.listSubjects())
  console.log(mario.PRAssignment('JavaScript'))
  console.log(mario.sprintChallenge('JavaScript'))

const dan = new Instructor({
    name: 'Dan',
    location: 'Denver',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Cats and sli.do`
  });

  console.log(dan.specialty)
  console.log(dan.favLanguage)
  console.log(dan.catchPhrase)
  console.log(dan.demo('JavaScript'))
  console.log(dan.grade(alexis, 'JavaScript'))

  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 45,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  console.log(fred.specialty)
  console.log(fred.favLanguage)
  console.log(fred.catchPhrase)
  console.log(fred.demo('JavaScript'))
  console.log(fred.grade(alexis, 'JavaScript'))

  const ryan = new ProjectManager({
    name: 'Ryan',
    location: 'Unknown',
    age: 28,
    favLanguage: 'C++',
    specialty: 'Everything',
    catchPhrase: `Puppies are lit`,
    gradClassName: 'WEB17',
    favInstructor: 'Josh Knell'
  });

  console.log(ryan.gradClassName)
  console.log(ryan.favInstructor)
  console.log(ryan.standUp('web20_ryan'))
  console.log(ryan.debugsCode(alexis, 'React'))

  const elan = new ProjectManager({
    name: 'Elan',
    location: 'Unknown',
    age: 26,
    favLanguage: 'React',
    specialty: 'Fullstack',
    catchPhrase: `In my feelings`,
    gradClassName: 'WEB17',
    favInstructor: 'Josh Knell'
  });

  console.log(elan.gradClassName)
  console.log(elan.favInstructor)
  console.log(elan.standUp('web20_elan'))
  console.log(elan.debugsCode(alexis, 'React'))
