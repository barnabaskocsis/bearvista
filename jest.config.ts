/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { JestConfigWithTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const config: JestConfigWithTsJest = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage filesF
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  "coveragePathIgnorePatterns": [
    "node_modules",
    ".store.ts"
  ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single
  // module
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),

  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value

  // A preset that is used as a base for Jest's configuration
  preset: 'jest-preset-angular',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    'node_modules/?!(.*\\.mjs$|@ngneat)'
  ],
};

export default config;
