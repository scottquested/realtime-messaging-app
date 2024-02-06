# Realtime Messaging app

This is a Realtime Messaging App built with NexJS, Convex and Clerk.

## Getting started

- Clone the repository
- Install the dependencies

```bash
npm install
```

3. Create a `.env.local` file in the root of the project and add the following environment variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
```

4. Run the development server

```bash
npm run dev
```

5. Open a new terminal window and run the Convex server

```bash
npx conex dev
```

6. Open a browser and navigate to `http://localhost:3000`

## I wrote my first Medium post

This project was built along side my first Medium post. Please have a read of [How to Create a Realtime Messaging App with NextJS, Convex and Clerk](https://medium.com/@scottquested82/f061e8d29206)
