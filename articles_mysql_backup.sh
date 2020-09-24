MYSQL_HOST='localhost'
MYSQL_PORT='3306'
MYSQL_USER='root'
MYSQL_PASSWORD='Neth@123$'
DATABASE_NAME='laravel'
DATE=$(date +"%Y%m%d")
DB_BACKUP_PATH='opt/backups/database'

mkdir -p ${DB_BACKUP_PATH}/${DATE}

mysqldump -h ${MYSQL_HOST} -P ${MYSQL_PORT} -u ${MYSQL_USER} -p${MYSQL_PASSWORD} ${DATABASE_NAME} | gzip -c > ${DB_BACKUP_PATH}/${DATE}/${DATABASE_NAME}-${DATE}.sql.gz