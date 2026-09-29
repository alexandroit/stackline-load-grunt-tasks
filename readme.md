# @stackline/load-grunt-tasks

> Load multiple grunt tasks using globbing patterns.

[![npm version](https://img.shields.io/npm/v/@stackline/load-grunt-tasks.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/load-grunt-tasks)
[![license](https://img.shields.io/npm/l/@stackline/load-grunt-tasks.svg?style=flat-square)](https://github.com/alexandroit/stackline-load-grunt-tasks)
[![GitHub repository](https://img.shields.io/badge/GitHub-repository-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-load-grunt-tasks)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/load-grunt-tasks/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/load-grunt-tasks/)** | **[npm](https://www.npmjs.com/package/@stackline/load-grunt-tasks)** | **[Issues](https://github.com/alexandroit/stackline-load-grunt-tasks/issues)** | **[Repository](https://github.com/alexandroit/stackline-load-grunt-tasks)**

**Current package version:** `1.0.2`

---

## Why this package?

`@stackline/load-grunt-tasks` is the Stackline-maintained distribution of `load-grunt-tasks@5.1.0`. It is an independent continuation of [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/load-grunt-tasks@1.0.2` |
| API target | `load-grunt-tasks@5.1.0` |
| Supported Node.js | `>=8` |
| License | `MIT` |
| Runtime dependencies | `arrify, multimatch, pkg-up, resolve-pkg` |
| Peer dependencies | `grunt >=1` |

## Installation

```bash
npm install @stackline/load-grunt-tasks
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install load-grunt-tasks@npm:@stackline/load-grunt-tasks
```

## Usage and API reference

### load-grunt-tasks [![Build Status](https://travis-ci.org/sindresorhus/load-grunt-tasks.svg?branch=master)](https://travis-ci.org/sindresorhus/load-grunt-tasks)

> Load multiple grunt tasks using globbing patterns

Usually you would have to load each task one by one, which is unnecessarily cumbersome.

This module will read the `dependencies`/`devDependencies`/`peerDependencies`/`optionalDependencies` in your package.json and load grunt tasks that match the provided patterns.

#### Before

```js
grunt.loadNpmTasks('grunt-shell');
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-recess');
grunt.loadNpmTasks('grunt-sizediff');
grunt.loadNpmTasks('grunt-svgmin');
grunt.loadNpmTasks('grunt-styl');
grunt.loadNpmTasks('grunt-php');
grunt.loadNpmTasks('grunt-eslint');
grunt.loadNpmTasks('grunt-concurrent');
grunt.loadNpmTasks('grunt-bower-requirejs');
```

#### After

```js
require('@stackline/load-grunt-tasks')(grunt);
```


## Install

```
$ npm install --save-dev @stackline/load-grunt-tasks
```


## Usage

```js
// Gruntfile.js
module.exports = grunt => {
	// Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
	require('@stackline/load-grunt-tasks')(grunt);

	grunt.initConfig({});
	grunt.registerTask('default', []);
};
```


## Examples

### Load all grunt tasks

```js
require('@stackline/load-grunt-tasks')(grunt);
```

Equivalent to:

```js
require('@stackline/load-grunt-tasks')(grunt, {pattern: ['grunt-*', '@*/grunt-*']});
```

### Load all grunt-contrib tasks

```js
require('@stackline/load-grunt-tasks')(grunt, {pattern: 'grunt-contrib-*'});
```

### Load all grunt-contrib tasks and another non-contrib task

```js
require('@stackline/load-grunt-tasks')(grunt, {pattern: ['grunt-contrib-*', 'grunt-shell']});
```

### Load all grunt-contrib tasks excluding one

You can exclude tasks using the negate `!` globbing pattern:

```js
require('@stackline/load-grunt-tasks')(grunt, {pattern: ['grunt-contrib-*', '!grunt-contrib-coffee']});
```

### Set custom path to package.json

```js
require('@stackline/load-grunt-tasks')(grunt, {config: '../package'});
```

### Only load from `devDependencies`

```js
require('@stackline/load-grunt-tasks')(grunt, {scope: 'devDependencies'});
```

### Only load from `devDependencies` and `dependencies`

```js
require('@stackline/load-grunt-tasks')(grunt, {scope: ['devDependencies', 'dependencies']});
```

### All options in use

```js
require('@stackline/load-grunt-tasks')(grunt, {
	pattern: 'grunt-contrib-*',
	config: '../package.json',
	scope: 'devDependencies',
	requireResolution: true
});
```


## Options

### pattern

Type: `string | string[]`<br>
Default: `['grunt-*', '@*/grunt-*']` ([Glob pattern](https://github.com/isaacs/minimatch))

### config

Type: `string | object`<br>
Default: Path to nearest package.json

### scope

Type: `string | string[]`<br>
Default: `['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies']`<br>
Values: `'dependencies'`, `'devDependencies'`, `'peerDependencies'`, `'optionalDependencies'`, `'bundledDependencies'`

### requireResolution

Type: `boolean`<br>
Default: `false`

Traverse up the file hierarchy looking for dependencies like `require()`, rather than the default grunt-like behavior of loading tasks only in the immediate `node_modules` directory.

## Credits and original authors

- Original project: [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks).
- Sindre Sorhus.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## License

`MIT`. See the license and notice files in the [repository](https://github.com/alexandroit/stackline-load-grunt-tasks).

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
