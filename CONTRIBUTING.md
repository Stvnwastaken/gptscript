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

Build and minify:

```bash
bun run build
```

Obfuscate for production:

```bash
bun run obfuscate
```

Compile for production (prod js -> bookmarklet):

```bash
bun run compile
```

Building in order:

build, prod, compile

This project was created using `bun init` in bun v1.0.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
