# Laravel-React

## Laravel API

Path : services/articles

### Set up laravel api

chmod 755 sotage/ bootstrap/cache
php artisan key:generate

Create .env file by .env.exmaple and add your enviroment variables for the database configarations

php artisan migrate

### Run laravel api

php artisan serve

## API Documentation

npm i -g swagger
swagger project edit

## Run the database backup daily

Add this to crontab
0 2 \* \* \* articles_mysql_backup.sh
