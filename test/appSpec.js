import { Add, Subtract, Multiply } from '../app/test-app';

describe('[App]', () => {

	it('[Add] should add two numbers together and return the result', () => {

		expect(Add(1,2)).toBe(3);
	});

	it('[Subtract] should subtract second param from first and return the result', () => {

		expect(Subtract(1,2)).toBe(5);
	});

	it('[Multiply] should multiply two numbers and return the result', () => {

		expect(Multiply(1,2)).toBe(2);
	});

}); // describe('[Org]', () => {...});