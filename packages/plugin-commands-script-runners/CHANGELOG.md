# @pnpm/plugin-commands-script-runners

## 1.2.0

### Minor Changes

- ffddf34a8: Add new global option called `--stream`.
  When used, the output from child processes is streamed to the console immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved.
- 0e8daafe4: The `run` and `exec` commands may use the `--parallel` option.

  `--parallel` completely disregards concurrency and topological sorting,
  running a given script immediately in all matching packages
  with prefixed streaming output. This is the preferred flag
  for long-running processes such as watch run over many packages.

  For example: `pnpm run --parallel watch`

### Patch Changes

- 8094b2a62: A recursive run should not rerun the same package script which started the lifecycle event.

  For instance, let's say one of the workspace projects has the following script:

  ```json
  "scripts": {
    "build": "pnpm run -r build"
  }
  ```

  Running `pnpm run build` in this project should not start an infinite recursion.
  `pnpm run -r build` in this case should run `build` in all the workspace projects except the one that started the build.

  Related issue: #2528

- Updated dependencies [ffddf34a8]
- Updated dependencies [ffddf34a8]
- Updated dependencies [8094b2a62]
  - @pnpm/common-cli-options-help@0.2.0
  - @pnpm/config@9.1.0
  - @pnpm/lifecycle@9.1.0
  - @pnpm/cli-utils@0.4.6
  - @pnpm/sort-packages@1.0.11

## 1.1.0

### Minor Changes

- 7300eba86: Support if-present flag for recursive run

### Patch Changes

- Updated dependencies [242cf8737]
- Updated dependencies [da091c711]
- Updated dependencies [f35a3ec1c]
- Updated dependencies [e11019b89]
- Updated dependencies [802d145fc]
- Updated dependencies [45fdcfde2]
- Updated dependencies [e3990787a]
  - @pnpm/config@9.0.0
  - @pnpm/types@6.0.0
  - @pnpm/lifecycle@9.0.0
  - @pnpm/cli-utils@0.4.5
  - @pnpm/command@1.0.1
  - @pnpm/common-cli-options-help@0.1.6
  - @pnpm/error@1.2.1
  - @pnpm/sort-packages@1.0.10

## 1.1.0-alpha.3

### Patch Changes

- Updated dependencies [242cf8737]
- Updated dependencies [45fdcfde2]
  - @pnpm/config@9.0.0-alpha.2
  - @pnpm/cli-utils@0.4.5-alpha.2
  - @pnpm/sort-packages@1.0.10-alpha.2

## 1.1.0-alpha.2

### Patch Changes

- Updated dependencies [da091c71]
- Updated dependencies [e3990787]
  - @pnpm/types@6.0.0-alpha.0
  - @pnpm/lifecycle@9.0.0-alpha.1
  - @pnpm/cli-utils@0.4.5-alpha.1
  - @pnpm/config@8.3.1-alpha.1
  - @pnpm/sort-packages@1.0.10-alpha.1

## 1.1.0-alpha.1

### Patch Changes

- @pnpm/config@8.3.1-alpha.0
- @pnpm/cli-utils@0.4.5-alpha.0
- @pnpm/sort-packages@1.0.10-alpha.0

## 1.1.0-alpha.0

### Minor Changes

- 7300eba86: Support if-present flag for recursive run

### Patch Changes

- Updated dependencies [f35a3ec1c]
  - @pnpm/lifecycle@8.2.0-alpha.0

## 1.1.0

### Minor Changes

- c80d4ba3c: Support if-present flag for recursive run

### Patch Changes

- Updated dependencies [2ec4c4eb9]
  - @pnpm/lifecycle@8.2.0

## 1.0.8

### Patch Changes

- 907c63a48: Dependencies updated.
  - @pnpm/cli-utils@0.4.4
