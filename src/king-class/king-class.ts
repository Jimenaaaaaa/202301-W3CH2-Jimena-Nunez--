import { Character } from '../constructor/Character';

export class King extends Character {
	constructor(name: string, family: string, age: number, public reign: number) {
		super(name, family, age);
	}

	greetings() {
		return 'Vais a morir todos';
	}
}
