# @pnpm/get-context

## 2.1.1

### Patch Changes

- 58c02009f: When checking compatibility of the existing modules directory, start with the layout version. Otherwise, it may happen that some of the fields were renamed and other checks will fail.

## 2.1.0

### Minor Changes

- 327bfbf02: Add `currentLockfileIsUpToDate` to the context.

## 2.0.0

### Major Changes

- 3f73eaf0c: Rename `store` to `storeDir` in `node_modules/.modules.yaml`.
- 802d145fc: Remove `independent-leaves` support.
- e3990787a: Rename NodeModules to Modules in option names.

### Patch Changes

- Updated dependencies [b5f66c0f2]
- Updated dependencies [ca9f50844]
- Updated dependencies [3f73eaf0c]
- Updated dependencies [da091c711]
- Updated dependencies [802d145fc]
- Updated dependencies [4f5801b1c]
  - @pnpm/constants@4.0.0
  - @pnpm/modules-yaml@7.0.0
  - @pnpm/types@6.0.0
  - @pnpm/read-projects-context@3.0.0
  - @pnpm/core-loggers@4.0.2
  - @pnpm/error@1.2.1
  - @pnpm/lockfile-file@3.0.9

## 2.0.0-alpha.2

### Patch Changes

- Updated dependencies [ca9f50844]
  - @pnpm/constants@4.0.0-alpha.1
  - @pnpm/lockfile-file@3.0.9-alpha.2
  - @pnpm/read-projects-context@2.0.2-alpha.2

## 2.0.0-alpha.1

### Major Changes

- 3f73eaf0: Rename `store` to `storeDir` in `node_modules/.modules.yaml`.
- e3990787: Rename NodeModules to Modules in option names.

### Patch Changes

- Updated dependencies [3f73eaf0]
- Updated dependencies [da091c71]
  - @pnpm/modules-yaml@7.0.0-alpha.0
  - @pnpm/types@6.0.0-alpha.0
  - @pnpm/read-projects-context@2.0.2-alpha.1
  - @pnpm/core-loggers@4.0.2-alpha.0
  - @pnpm/lockfile-file@3.0.9-alpha.1

## 1.2.2-alpha.0

### Patch Changes

- Updated dependencies [b5f66c0f2]
  - @pnpm/constants@4.0.0-alpha.0
  - @pnpm/lockfile-file@3.0.9-alpha.0
  - @pnpm/read-projects-context@2.0.2-alpha.0

## 1.2.1

### Patch Changes

- 907c63a48: Update dependencies.
- 907c63a48: Use `fs.mkdir` instead of `make-dir`.
- Updated dependencies [907c63a48]
- Updated dependencies [907c63a48]
- Updated dependencies [907c63a48]
  - @pnpm/lockfile-file@3.0.8
  - @pnpm/modules-yaml@6.0.2
  - @pnpm/read-projects-context@2.0.1
