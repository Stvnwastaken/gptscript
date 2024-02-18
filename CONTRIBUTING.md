# Contributing

## Fork the project

### After forking, open a pr and it will be held under review

## To install dependencies:

```bash
bun install
```

## Scripts:

Formatting:

```bash
bun run format
```

Linting (check):

```bash
bun run lint
```

Linting (safe fixes):

```bash
bun run lint:apply
```

Linting (unsafe fixes);

```bash
bun run lint:applyUnsafe
```

Compile to bookmarklet:

```bash
bun run compile
```

Build bookmarklet (ts->js):

```bash
bun run build
```

Build for production (obfuscate):

```bash
bun run prod
```

Building in order:

compile, build, prod

This project was created using `bun init` in bun v1.0.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
