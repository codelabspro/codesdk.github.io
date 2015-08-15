interface IPerson {
	firstName: string;
	lastName: string;
	age: number;
	city?: string;
}


class Person {
	firstName: string;
	lastName: string;
	age: number;
  constructor(config: IPerson) {
  }
}

var p = new Person({
	firstName: 'John',
	lastName: 'Papa',
	age: 8
});

p.age = 56;
console.log(p);
