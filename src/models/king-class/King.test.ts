import { King } from './King';

describe('When you create a new <King> ', () => {
	test('Then if the arguments are "pepe", "baratheon", 12, "king".', () => {
		const foo = new King('pepe', 'baratheon', 12, 10);

		expect(foo.name).toBe('pepe');
		expect(foo.family).toBe('baratheon');
		expect(foo.age).toBe(12);
		expect(foo.reign).toBe(10);
		expect(foo.greetings()).toBe('Vais a morir todos');
	});
});
