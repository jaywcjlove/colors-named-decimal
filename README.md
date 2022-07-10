colors-named-decimal
===

[![Build & Deploy](https://github.com/jaywcjlove/colors-named-decimal/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/colors-named-decimal/actions/workflows/ci.yml)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/colors-named-decimal/file/README.md)
[![npm version](https://img.shields.io/npm/v/colors-named-decimal.svg)](https://www.npmjs.com/package/colors-named-decimal)
[![Coverage Status](https://jaywcjlove.github.io/colors-named-decimal/badges.svg)](https://jaywcjlove.github.io/colors-named-decimal/lcov-report/)

A array with color name -> decimal rgbs. Based on https://www.w3.org/TR/css-color-4/#colors-named

## Installation

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c): Node 12+ is needed to use it and it must be import instead of require.

```bash
npm install colors-named-decimal
```

If you still want to use in CommonJS, you can use dynamic `import()` to load.

```js
const named = await import('colors-named-decimal');

// Fix compiling in typescript.
// https://github.com/microsoft/TypeScript/issues/43329#issuecomment-922544562
const named = await (Function('return import("colors-named-decimal")')()) as Promise<typeof import("colors-named-decimal")>;
```

## Usage

```js
import decimal from "colors-named-decimal";

console.log(decimal)
// =====>
// [
//   [240, 248, 255],
//   [250, 235, 215],
//   [0, 255, 255],
//   [127, 255, 212],
//   [240, 255, 255],
//   [245, 245, 220],
//   [255, 228, 196],
//   ...
// ]
console.log(decimal.length)   // => 148
```

```js
'colors-named'                'colors-named-hex'          'colors-named-decimal'
===============              ===================         =====================
const named = [                const hexs = [             const hexs = [
  'aliceblue',         ->        '#F0F8FF',       ->        [240, 248, 255],
  'antiquewhite',      ->        '#FAEBD7',       ->        [250, 235, 215],
  'aqua',              ->        '#00FFFF',       ->        [0, 255, 255],
  'aquamarine',        ->        '#7FFFD4',       ->        [127, 255, 212],
  'azure',             ->        '#F0FFFF',       ->        [240, 255, 255],
  'beige',             ->        '#F5F5DC',       ->        [245, 245, 220],
  'bisque',            ->        '#FFE4C4',       ->        [255, 228, 196],
  'black',             ->        '#000000',       ->        [0, 0, 0],
  'blanchedalmond',    ->        '#FFEBCD',       ->        [255, 235, 205],
  'blue',              ->        '#0000FF',       ->        [0, 0, 255],
  'blueviolet',        ->        '#8A2BE2',       ->        [138, 43, 226],
  'brown',             ->        '#A52A2A',       ->        [165, 42, 42],
  ...                  ->        ...              ->        ...
];                             ];                         ];
```

```js
import hexs from "colors-named-hex";
import named from "colors-named";
import decimal from "colors-named-decimal";

decimal[named.indexOf('aliceblue')] // => [240, 248, 255]
decimal[named.indexOf('red')]       // => [255, 0, 0]
decimal[named.indexOf('black')]     // => [0, 0, 0]

hexs[named.indexOf('aliceblue')] // => #F0F8FF
hexs[named.indexOf('red')]       // => #FF0000
hexs[named.indexOf('black')]     // => #000000
```

## API

```ts
/**
 * A array with color name -> decimal rgbs. Based on https://www.w3.org/TR/css-color-4/#colors-named
 */
declare const decimal: number[][];
export default decimal;
```

## Related

- [`colors-named`](https://github.com/jaywcjlove/colors-named) A array with color names..
- [`colors-named-hex`](https://github.com/jaywcjlove/colors-named-hex) A array with color name -> Hex rgb.

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/jaywcjlove/colors-named-decimal/graphs/contributors">
  <img src="https://jaywcjlove.github.io/colors-named-decimal/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
