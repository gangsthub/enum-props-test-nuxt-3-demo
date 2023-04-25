# Nuxt 3 Enums as Props test

This is a Nuxt 3 app showcasing Typescript enums as props types.

You can see in the components `components/Hello.vue` and `components/Hello2.vue` how the enum is used as a prop type without the need to import it in the consuming component (see `/app.vue`).

The enum is defined in `components/Hello.types.ts`.

- `components/Hello.vue` uses `script setup` syntax and `defineProps` to define the prop type.
- `components/Hello2.vue` uses Options API syntax and Vue's `PropType` to define the prop type.

To be able to get some types in the IDE, the project needs to be run (install + dev).

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
