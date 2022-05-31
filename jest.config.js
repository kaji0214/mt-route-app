const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // next.config.jsとテスト環境用の.envファイルが配置されたディレクトリをセット。基本は"./"で良い。
  dir: './',
})

// Jestのカスタム設定を設置する場所。従来のプロパティはここで定義。
const customJestConfig = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    '!**/*.fragment.{js,jsx,ts,tsx}',
    '!**/*.graphql.{js,jsx,ts,tsx}',
    '!**/*.mutation.{js,jsx,ts,tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
    '!src/core/**/*.{js,jsx,ts,tsx}',
    '!src/utils/**/*.{js,jsx,ts,tsx}',
    '!src/mocks/**/*.{js,jsx,ts,tsx}',
    '!pages/_app.tsx',
    '!pages/api/**/*.{js,jsx,ts,tsx}',
  ],
  // jest.setup.jsを作成する場合のみ定義。
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '<rootDir>/jest.setup.jsx'],
  moduleNameMapper: {
    // aliasを定義 （tsconfig.jsonのcompilerOptions>pathsの定義に合わせる）
    '^@/src/(.*)$': '<rootDir>/src/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/graphql/(.*)$': '<rootDir>/graphql/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/**/*.spec.{js,jsx,ts,tsx}'],
}

// createJestConfigを定義することによって、本ファイルで定義された設定がNext.jsの設定に反映されます
module.exports = createJestConfig(customJestConfig)
