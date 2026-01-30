# Zeller Customers

A React app that lists Zeller customers by role.

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- graphql-hooks (GraphQL client)
- Vitest + React Testing Library

## Environment Setup



1. Create a `.env` in the project root with:

   ```
   VITE_APPSYNC_ENDPOINT=<your AppSync GraphQL endpoint URL>
   VITE_APPSYNC_REGION=<region>
   VITE_APPSYNC_API_KEY=<API key>
   ```

2. Run the dev server:

   ```bash
   npm install
   npm run dev
   ```

3. Run test cases
   ```bash
   npm run test
   ```

## Features

- **Role filter**: Switch between Admin and Manager to see filtered users.
- **Loading**: Skeleton UI (role selector + user rows) while data loads.
- **Error**: Error message and “Try again” button with refetch on failure.



