import { Character } from '../constructor/Character';
import { type Fighter } from '../fighter-class/Fighter';

export class Advisor extends Character {
	constructor(
		name: string,
		family: string,
		age: number,
		public advising: Fighter
	) {
		super(name, family, age);
	}

	greetings(): string {
		return 'No sé por qué, pero creo que voy a morir pronto';
	}
}
