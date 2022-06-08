This is a mt route project can create any routes.
## Getting Started

First, config env file:
1. Get google oauth key and secret and set the value to `GOOGLE_ID` and `GOOGLE_SECRET` in env
2. Get google map key and set the value to `NEXT_PUBLIC_GOOGLE_MAP_API_KEY` in env

Reference
* https://developers.google.com/maps/documentation/javascript/get-api-key
* https://developers.google.com/identity/protocols/oauth2

Then, run the development server:

```bash
docker-compose up -d
yarn install
npx prisma migrate dev
npx prisma generate
npm run dev
```
