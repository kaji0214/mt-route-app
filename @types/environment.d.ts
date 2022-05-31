declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_URL: string
      NEXT_PUBLIC_GOOGLE_MAP_API_KEY: string
      GOOGLE_ID: string
      GOOGLE_SECRET: string
      NEXTAUTH_URL: string
      NEXTAUTH_SECRET: string
      NEXT_PUBLIC_GRAPHQL_ENDPOINT: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
