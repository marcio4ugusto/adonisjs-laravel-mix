
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

With adonis cli globally instaled, clone the repo and install:

```shell
git clone git@github.com:marcim/adonisjs-laravel-mix.git my-project
cd my-project && npm install
```

Make sure everything is ready to start:

```shell
cp .env.example .env
adonis key:generate
```

Run:

```shell
npm run start
```

### Assets

Compile assets with following commands:

```shell
npm run asset-dev

npm run asset-watch

npm run asset-watch-poll

npm run asset-hot

npm run asset-prod
```

### Migrations

Run the following command to run the initial migrations.

```shell
adonis migration:run
```

## Contributing

I'll try to keep this repo updated. So, contributions are welcome via Pull Requests. Thanks!
