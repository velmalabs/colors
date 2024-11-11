import colors from '../src/colors.js';

declare module '@velmalabs/colors' {
	export function colorMix(color: string | keyof colors): string;
}
