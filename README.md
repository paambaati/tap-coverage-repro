# `tap-coverage-repro`

This repo is a minimally-reproducible example for a bug in [`node-tap`](https://github.com/tapjs/node-tap)/[`nyc`](https://github.com/istanbuljs/nyc) where the test coverage does not include all source files, even when explicitly forced with the [`--all`](https://github.com/istanbuljs/nyc#selecting-files-for-coverage) `nyc` flag.

See https://github.com/tapjs/node-tap/issues/796

## Current coverage report

```
 $ npm run test

> tap-coverage-repro@1.0.0 test
> tap

./test/math.test.ts ................................... 2/2
total ................................................. 2/2

  2 passing (332.159ms)

  ok
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 math.ts  |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
```

## Expected coverage report

```
 $ npm run test

> tap-coverage-repro@1.0.0 test
> tap

./test/math.test.ts ................................... 2/2
total ................................................. 2/2

  2 passing (332.159ms)

  ok
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |      50 |       50 |      50 |      50 |
 math.ts  |     100 |      100 |     100 |     100 |
 lang.ts  |       0 |        0 |       0 |       0 | 1
----------|---------|----------|---------|---------|-------------------
```
