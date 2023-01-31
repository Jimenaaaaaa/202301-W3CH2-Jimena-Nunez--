export class Character {
	alive: boolean;
	constructor(public name: string, public family: string, public age: number) {
		this.alive = true;
	}

	die() {
		this.alive = false;
	}
}
