
#!/bin/bash
clear

echo "This script will automatically deploy the application to the local server."
echo "Press any key to install all dependencies."
read START
clear

composer install
npm install
clear

echo "Dependencies installed."
echo "Now, please, create an empty database and press any key."
read START
clear

echo "Please, set database connection environment."

echo "Database host (default "localhost"): "
read DB_HOST

if [[ -z "$DB_HOST" ]]
then 
    DB_HOST=localhost
fi

echo "Database name (default "olena"): " 
read DB_NAME

if [[ -z "$DB_NAME" ]]
then 
    DB_NAME=olena
fi

echo "Database user (default "root") :" 
read DB_USER

if [[ -z "$DB_USER" ]]
then 
    DB_USER=root
fi

echo "Database password (default empty): " 
read DB_PASS

if [[ -z "$DB_PASS" ]]
then 
    DB_PASS=""
fi

echo "Database port (default "3306"): " 
read DB_PORT

if [[ -z "$DB_PORT" ]]
then 
    DB_PORT=3306
fi

cat <<EOF > .env
DB_HOST=$DB_HOST
DB_NAME=$DB_NAME
DB_USER=$DB_USER
DB_PASS=$DB_PASS
DB_PORT=$DB_PORT
EOF

echo ".env file created."
echo "Trying connect to database and fill it..."

php -f ./scripts/migration.php

echo ". Starting development server..."
cd public
sleep 3
clear

start http://localhost:8000
php -S localhost:8000


