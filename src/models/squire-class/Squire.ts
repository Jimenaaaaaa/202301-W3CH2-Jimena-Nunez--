import { Character } from '../constructor/Character';
import { type Fighter } from '../fighter-class/Fighter';

export class Squire extends Character {
	constructor(
		name: string,
		family: string,
		age: number,
		public grade: number,
		public boss: Fighter
	) {
		super(name, family, age);
	}

	greetings(): string {
		return 'Soy un loser';
	}
}
