import { Advisor } from './Advisor';
import { Fighter } from '../fighter-class/Fighter';

describe('When you create a new <Advisor> ', () => {
	test('Then if the arguments are "pepe", "baratheon", 12, "king".', () => {
		const bar = new Fighter('a', 'b', 1, 'axe', 2);
		const foo = new Advisor('pepe', 'baratheon', 12, bar);

		expect(foo.name).toBe('pepe');
		expect(foo.family).toBe('baratheon');
		expect(foo.age).toBe(12);
		expect(foo.advising.name).toBe('a');
		expect(foo.greetings()).toBe(
			'No sé por qué, pero creo que voy a morir pronto',
		);
	});
});
