import { Fighter } from './Fighter';

describe('When you create a new <Fighter> ', () => {
	test('Then if the arguments are "pepe", "baratheon", 12, "king".', () => {
		const foo = new Fighter('pepe', 'baratheon', 12, 'knife', 10);

		expect(foo.name).toBe('pepe');
		expect(foo.family).toBe('baratheon');
		expect(foo.age).toBe(12);
		expect(foo.skill).toBe(10);
		expect(foo.weapon).toBe('knife');
		expect(foo.greetings()).toBe('Primero pego y luego pregunto');
	});
});
