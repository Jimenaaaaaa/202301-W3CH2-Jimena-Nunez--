import { Character } from '../constructor/Character';

export class Advisor extends Character {
	constructor(
		name: string,
		family: string,
		age: number,
		public advising: string
	) {
		super(name, family, age);
		this.advising = advising;
	}

	greetings(): string {
		return 'No sé por qué, pero creo que voy a morir pronto';
	}
}
