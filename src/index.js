import Color from 'color';
import colors from './colors.js';

export function colorMix(color) {
	color = color ?? 'primary';
	const [_meta, _alpha = 1] = color.split('/');
	const extra = _meta.split('-');
	let _color = extra[0];
	const _percentage = extra[1] ?? 1;

	if (colors[_color]) {
		_color = colors[_color];
	}

	const contrast = getContrastColor(_color).hex();

	return `--color: ${_color};--color-mix-percentage:${_percentage};--color-mix-alpha:${_alpha};--color-contrast:${contrast}`;
}

function getContrastColor(colorInput) {
	const color = Color(colorInput);
	const lightness = color.hsl().lightness();
	let newLightness = 100 - (lightness - 0.0001);
	newLightness = Math.min(Math.max(newLightness, 0), 10);
	return Color({
		h: color.hue(),
		s: color.saturationv(),
		l: newLightness * 10
	});
}
