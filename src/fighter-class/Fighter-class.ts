import {Character} from '../constructor/Character';

export class Fighter extends Character {
	constructor(
		name: string,
		family: string,
		age: number,
		public weapon: string,
		public skill: number,
	) {
		super(name, family, age);
	}

	greetings(): string {
		return 'Primero pego y luego pregunto';
	}
}
