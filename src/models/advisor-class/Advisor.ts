import { Character } from '../constructor/Character';
import { type King } from '../king-class/King';

export class Advisor extends Character {
	constructor(
		name: string,
		family: string,
		age: number,
		public advising: King
	) {
		super(name, family, age);
	}

	greetings(): string {
		return 'No sé por qué, pero creo que voy a morir pronto';
	}
}
