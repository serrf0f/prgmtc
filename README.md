# prgmtc (stands for "pragmatic")

`prgmtc` is designed as a minimalist and developer-friendly stack aimed at providing an efficient and pragmatic approach to web development. Leveraging a set of modern tools and frameworks, `prgmtc` streamlines the development process to focus on productivity and performance.

## Features

- **Tailwind CSS** for utility-first styling, enabling rapid UI development.
- **Bun** as the underlying JavaScript runtime and build tool, facilitating various development tasks such as building, running, and watching files for changes with optimal performance.
- **Hono** for a minimalistic yet powerful web framework, ensuring fast routing and server-side logic execution.
- **Pines UI** shadcn/ui-like; check here: https://devdojo.com/pines/marketing/navigations

## Getting Started

To get started with `prgmtc`, clone the repository and install the necessary dependencies:

```bash
git clone git@github.com:serrf0f/prgmtc.git
cd prgmtc
bun i
```

## Dev

```bash
bun dev
```

Visit http://localhost:3000

## Build

```bash
bun run build
```

## Compile (one binary file)

```bash
bun compile
```