import { test, expect } from '@velmalabs/testsuite';
import { colorMix } from '../src';

test('Default color is working correctly', async () => {
	const color = colorMix();
	expect(color).toBe(
		`--color: #4734f8;--color-mix-percentage:1;--color-mix-alpha:1;--color-contrast:#FFFFFF`
	);
});
test('Predefined color is working correctly', async () => {
	const color = colorMix('primary');
	expect(color).toBe(
		`--color: #4734f8;--color-mix-percentage:1;--color-mix-alpha:1;--color-contrast:#FFFFFF`
	);
});
test('color is calculating correctly', async () => {
	const color = colorMix('#fff');
	expect(color).toBe(
		`--color: #fff;--color-mix-percentage:1;--color-mix-alpha:1;--color-contrast:#000000`
	);
});
test('color is calculating correctly with percentage', async () => {
	const color = colorMix('#faa-.5');
	expect(color).toBe(
		`--color: #faa;--color-mix-percentage:.5;--color-mix-alpha:1;--color-contrast:#FFFFFF`
	);
});
test('color is calculating correctly with percentage and alpha', async () => {
	const color = colorMix('#faa-.5/.5');
	expect(color).toBe(
		`--color: #faa;--color-mix-percentage:.5;--color-mix-alpha:.5;--color-contrast:#FFFFFF`
	);
});
test('color is calculating correctly with alpha', async () => {
	const color = colorMix('#faa/.5');
	expect(color).toBe(
		`--color: #faa;--color-mix-percentage:1;--color-mix-alpha:.5;--color-contrast:#FFFFFF`
	);
});
