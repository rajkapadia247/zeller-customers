# Zeller Customers

A React app that lists Zeller customers by role. WCAG 2.1 AA standards compliant and 100% unit test coverage. 

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

## Screenshots
Accessibility Check - No issues:

<img width="604" height="346" alt="image" src="https://github.com/user-attachments/assets/ab0a605d-91a3-497e-b93b-1a415055fc3a" />


Success State:

<img width="604" height="346" alt="image" src="https://github.com/user-attachments/assets/088f66b9-253b-431a-9d01-635ca48b8517" />

Loading State:

<img width="604" height="346" alt="image" src="https://github.com/user-attachments/assets/483c56df-1b5c-4a39-9d0f-8a419982e20d" />

Error State:

<img width="604" height="346" alt="image" src="https://github.com/user-attachments/assets/b74052b9-5619-4630-b561-4038bd7a6dbb" />

Mobile Success View: 

<img width="160" height="346" alt="image" src="https://github.com/user-attachments/assets/3699f243-69d0-4a1c-b929-9c14aabeebc0" />

Mobile Failure View:

<img width="160" height="346" alt="image" src="https://github.com/user-attachments/assets/f9aa1b58-90a6-4c0f-9e74-e14c7fdcaeaa" />

Mobile Loading View:

<img width="160" height="346" alt="image" src="https://github.com/user-attachments/assets/a0220422-b137-4afc-8978-7d08730cd77c" />








