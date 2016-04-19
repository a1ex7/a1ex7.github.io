// Создать класс Human, у которого будут свойства обычного человека: имя, возраст, пол, рост, вес. Используя прототипное наследование создать дочерние классы Worker (дописать в них поля места работы, зарплатой, методом "работать") и Student (дописать поля места учебы, стипендией, методом "смотреть сериалы")

// Создать несколько экземпляров классов Worker и Student, вывести их в консоль. Убедиться что они имеют поля родительского класса Human

function Human() {
    this.name = 'Vasya';
    this.age = '25';
    this.sex = 'male';
    this.height = 172;
    this.weight = 69;
}

function Worker() {
    this.work = 'GoIT';
    this.salary = 7500;
    this.working = function() {
        console.log('Working...');
    }
}

function Student() {
    this.study = 'DonNTU';
    this.stipend = 3200;
    this.watchSerials = function() {
        console.log('Watching Serials...');
    }
}

Worker.prototype = new Human();
Student.prototype = new Human();

var worker1 = new Worker();
var worker2 = new Worker();
var worker3 = new Worker();

var student1 = new Student();
var student2 = new Student();

console.log('worker1', worker1);
console.log('worker2', worker2);
console.log('worker3', worker3);

console.log('student1', student1);
console.log('student2', student2);
