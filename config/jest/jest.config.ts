export default {
    clearMocks: true,
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules'],
    modulePaths: ['<rootDir>src'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    rootDir: '../../',
};
