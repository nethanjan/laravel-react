# Laravel-React

## Laravel API

go to path : services/articles

### Set up laravel api

chmod 755 sotage/ bootstrap/cache
php artisan key:generate

create .env file by .env.exmaple and add your enviroment variables for the database configarations

php artisan migrate

## React front-end

go to path : services/web

## Set up react app

npm install
npm start

or if you prefer yarn

yarn install
yarn start

### Run laravel api

php artisan serve

## API Documentation

npm i -g swagger
swagger project edit

## Run the database backup daily

add this to crontab
0 2 \* \* \* articles_mysql_backup.sh
