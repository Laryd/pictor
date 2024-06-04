# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.11.0](https://github.com/Laryd/pictor/compare/v1.10.1...v1.11.0) (2024-06-04)


### Features

* **assets:** add album images ([02183b8](https://github.com/Laryd/pictor/commit/02183b894b95c9b1ad084b17365bb8d321c5e58e))
* **types:** add user data interfaces/types based on API response ([a57c159](https://github.com/Laryd/pictor/commit/a57c15986ab223859f6c3fa57c0a81ed0a1a3849))
* **ui:** add UserProfile with user details and albums from Redux state and implement dynamic routing ([0f6cfe3](https://github.com/Laryd/pictor/commit/0f6cfe347bdc51379585df891d6d7281fdbbf97e))
* **ui:** create user homepage/dashboard ([872e7ce](https://github.com/Laryd/pictor/commit/872e7cefdb12e249445f488653a8ff6f3183eb12))
* **ui:** install and add react-loading-skeleton library to handle loading state ([fb71521](https://github.com/Laryd/pictor/commit/fb7152191404ee0e5e08bbbfc9c2e9f2045b1f72))

### [1.10.1](https://github.com/Laryd/pictor/compare/v1.10.0...v1.10.1) (2024-06-03)


### Bug Fixes

* **error:** resolve React Server Components issue with StoreProvider ([e79bfdb](https://github.com/Laryd/pictor/commit/e79bfdbba3ade8c2c4bd23eefbca0ccd696e7246))

## [1.10.0](https://github.com/Laryd/pictor/compare/v1.9.0...v1.10.0) (2024-06-03)


### Features

* **state:** add photoReducer to store ([db55db4](https://github.com/Laryd/pictor/commit/db55db4e036e9c58d8525fd436b3bda67dba1950))
* **state:** implement albumReducer for fetching albums ([9668e5e](https://github.com/Laryd/pictor/commit/9668e5e8bacbbcbfbe45fb8ac68d27b7441d1e44))
* **state:** implement photoSlice for managing photos ([35c00f6](https://github.com/Laryd/pictor/commit/35c00f60ae47557d48be83ab5f74485e0c6c0a19))
* **state:** implement userReducer for fetching users ([8ec6e24](https://github.com/Laryd/pictor/commit/8ec6e24dda3c4289ac7f6543d029a3e5cb480baf))
* **state:** integrate Redux with TypeScript for state management ([2b959c3](https://github.com/Laryd/pictor/commit/2b959c337ad903f65d3d0917344d463be920bfc5))

## [1.9.0](https://github.com/Laryd/pictor/compare/v1.8.0...v1.9.0) (2024-06-03)


### Features

* **auth:** simplify signin/signup to use only GitHub and Google ([7d66583](https://github.com/Laryd/pictor/commit/7d6658373f5a1c48db0410ee031409447ee876f5))


### Bug Fixes

* **auth:** correct variable name from _ID to _SECRET in authOptions ([b580bb5](https://github.com/Laryd/pictor/commit/b580bb505fec2209f58263de06b9c1d815dfe989))

## [1.8.0](https://github.com/Laryd/pictor/compare/v1.7.1...v1.8.0) (2024-06-02)


### Features

* **auth:** add signup and signin UI ([83c2700](https://github.com/Laryd/pictor/commit/83c2700a1951d26144509e92884019f81da13cac))

### [1.7.1](https://github.com/Laryd/pictor/compare/v1.7.0...v1.7.1) (2024-06-02)

## [1.7.0](https://github.com/Laryd/pictor/compare/v1.6.0...v1.7.0) (2024-06-02)


### Features

* **config:** allow images from Google and GitHub ([913648b](https://github.com/Laryd/pictor/commit/913648bbd52a63579f4f37518c79b8392202328d))
* **navbar:** add useSession for session management ([5cf8c95](https://github.com/Laryd/pictor/commit/5cf8c9559330ee6807bbf851dc7883b7a4cac9ef))


### Bug Fixes

* **auth:** authOptions import spelling fix ([dba3366](https://github.com/Laryd/pictor/commit/dba3366399d38481e1b6c89f9d517c6081eddb9c))

## [1.6.0](https://github.com/Laryd/pictor/compare/v1.5.0...v1.6.0) (2024-05-31)


### Features

* **auth:** add SessionProvider to wrap entire app ([7430eb3](https://github.com/Laryd/pictor/commit/7430eb3fd030d4cd2d1a6865e79f2a2c85a703e6))
* **auth:** configure next-auth with Google and GitHub providers ([7b73859](https://github.com/Laryd/pictor/commit/7b73859f4cc710d62cd6e6c1c74e84788f9e603a))
* **auth:** install next-auth for authentication ([40757c8](https://github.com/Laryd/pictor/commit/40757c89f57b5a9117836fec6b0816a74e4083fd))

## [1.5.0](https://github.com/Laryd/pictor/compare/v1.4.0...v1.5.0) (2024-05-30)


### Features

* **features:** add features section listing what Pictoria does ([77c82c9](https://github.com/Laryd/pictor/commit/77c82c9c2f505dacab30fd1f6d40a19ebbf72dc6))

## [1.4.0](https://github.com/Laryd/pictor/compare/v1.3.0...v1.4.0) (2024-05-30)


### Features

* **assets:** update favicon icon ([bd42b7e](https://github.com/Laryd/pictor/commit/bd42b7e2d92240460c040cd4f2c119d5deda4898))
* **homepage:** add hero section ([4b296f7](https://github.com/Laryd/pictor/commit/4b296f7f43441be8d55fbcd5f7465f5dcbc5cd41))

## [1.3.0](https://github.com/Laryd/pictor/compare/v1.2.0...v1.3.0) (2024-05-30)


### Features

* **assets:** add new logo ([6065e7c](https://github.com/Laryd/pictor/commit/6065e7cce7a0900192d1045efeed8db331340db0))
* **icons:** install lucide-react icons library ([24ca6e6](https://github.com/Laryd/pictor/commit/24ca6e66e604c78a022ce30e76de1c0881e7484b))
* **navbar:** implement responsive navbar with shadcn-ui and state management ([d89f391](https://github.com/Laryd/pictor/commit/d89f3919d198b16e12b61f7e56d75d6e2857f35f))
* **theme:** apply blue theme to global styles ([2eed0de](https://github.com/Laryd/pictor/commit/2eed0de8f9ff8d5db5807e1501a335a17d83ca3a))
* **ui:** install ShadCN UI components ([4b1e708](https://github.com/Laryd/pictor/commit/4b1e708ee42c94ac8c59202b0fc0609fe1290249))

## 1.2.0 (2024-05-29)


### Features

* add shadcn-ui initialization ([fcfcd72](https://github.com/Laryd/pictor/commit/fcfcd721585071b6cb95c5877da87c86ffa486e0))
* add standard release support! ([f96a504](https://github.com/Laryd/pictor/commit/f96a50487f3e2a16b7c62c65301ddd68fb1bddb3))
* **project:** initialize Next.js project with create-next-app ([5fbea4f](https://github.com/Laryd/pictor/commit/5fbea4f9b10afb8e845c2ab5c18f521e3b6db9a8))


### Bug Fixes

* standard release script fix ([8ef0d50](https://github.com/Laryd/pictor/commit/8ef0d5047efe790e2e1e323929508a5db431d871))
