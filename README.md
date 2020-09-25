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

for prettier view

npm i -g swagger
swagger project edit

GET /api/article : get all articles
GET /api/article/article_id : get article by id
POST /api/article : create article
PUT /api/article/article_id : update article
DELETE /api/article/article_id : delete article

GET /api/author : get all authors
GET /api/author/author_id : get author by id
POST /api/author : create author
PUT /api/author/author_id : update author
DELETE /api/author/author_id : delete author

## Run the database backup daily

add this to crontab
0 2 \* \* \* articles_mysql_backup.sh
