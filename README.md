
# Adonis fullstack application with laravel-mix

This is a modified fullstack boilerplate for AdonisJs, it comes pre-configured with:

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds
9. Laravel Mix

## Setup

Clone the repo and install:

```shell
git clone git@github.com:marcim/adonisjs-laravel-mix.git my-project

npm install

npm run start
```

### Assets

Compile assets with commands:

```shell
npm run asset-dev

npm run asset-watch

npm run asset-hot

npm run asset-prod
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
