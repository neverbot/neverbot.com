---
title: Firebase Mocker
date: 2026-01-20
layout: project
summary: An emulator of Google's Firestore and Firebase Auth that is just a dependency in your project. No install, no separate process to remember, and tests that run against it as if it were the real service.
stack: TypeScript · gRPC · Firebase
status: Idle
years: Since 2026
role: Author
repo: https://github.com/neverbot/firebase-mocker
install: https://www.npmjs.com/package/firebase-mocker
---

Writing tests against Firestore leaves two bad options. Point them at the real
thing and they are slow, shared and destructive. Or use Google's own emulator,
which works, but is a separate program every developer on the team has to
install, keep current and remember to start before running anything.

Firebase Mocker is the same idea with the installing removed. It is a
devDependency, it starts from inside the project's own test setup, and anyone
who clones the repository and runs the tests gets it without knowing it exists.

## Two servers, no client changes

Nothing in the code under test changes, which is the point. The Firebase Admin
SDK already looks for two environment variables and, if they are set, talks to a
local emulator instead of Google. So the mocker raises servers that answer those
protocols, Firestore over gRPC and Auth over HTTP, and sets the variables
itself. Start one, or both, or neither.

```typescript
await firebaseMocker.startFirestoreServer({ port: 3333, projectId: 'my-project' });

admin.initializeApp({ projectId: 'my-project' });
const db = admin.firestore();

await db.collection('users').doc('user1').set({ name: 'Jane' });
```

That is the whole integration. The three lines underneath are the ones the
application already had: it asks the Admin SDK for Firestore and writes a
document, exactly as it does in production, and never learns that the answer
came from the same process.

## How much of it is there

Enough to run a test suite honestly: documents and collections, queries and
aggregations, batched writes, listeners, and on the auth side the calls an
application actually makes, such as looking a user up by email or creating and
deleting one.

Its own suite is 228 tests over about 83% of the code, which is the number worth
quoting here. An emulator nobody trusts is worse than no emulator, and the only
argument for trusting this one is that it is tested against the contract it
claims to implement.
