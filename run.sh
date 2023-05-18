
#!/bin/bash
clear
Red=$'\e[1;31m'
Green=$'\e[1;32m'
Blue=$'\e[1;34m' 
printf "\n${Red}This script will automatically deploy the application to the local server. "
printf "Press any key to install all dependencies."
read START
clear

printf "\n${Blue}Installing dependencies....\n\n"

composer install
npm install
clear

printf "\n${Blue}Dependencies installed. "
printf "Now, please, create an empty database and press any key."
read START
clear

printf "\n${Green}Please, set environment."

printf "\n${Blue}Database host ${Green}(default - localhost):"
read DB_HOST

if [[ -z "$DB_HOST" ]]
then 
    DB_HOST=localhost
fi

printf "${Blue}Database name ${Green}(default - olena):" 
read DB_NAME

if [[ -z "$DB_NAME" ]]
then 
    DB_NAME=olena
fi

printf "${Blue}Database user ${Green}(default - root):" 
read DB_USER

if [[ -z "$DB_USER" ]]
then 
    DB_USER=root
fi

printf "${Blue}Database password ${Green}(default - empty): " 
read DB_PASS

if [[ -z "$DB_PASS" ]]
then 
    DB_PASS=""
fi

printf "${Blue}Database port ${Green}(default - 3306): " 
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

printf "${Green}.env file created. "
printf "${Red}Trying connect to database and fill it... "

php -f ./scripts/migration.php

printf "${Blue}Starting development server..."
cd public
sleep 3
clear

start http://localhost:8000
php -S localhost:8000


