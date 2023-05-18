
#!/bin/bash
echo "Now we are prepare base environment."
echo "DB_HOST (default "localhost")": 
read DB_HOST

if [[ $DB_HOST -eq "" ]]
then 
    DB_HOST=localhost
fi

echo "DB_NAME (default "olena")": 
read DB_NAME

if [[ $DB_NAME -eq "" ]]
then 
    DB_NAME=olena
fi

echo "DB_USER (default "root")": 
read DB_USER

if [[ $DB_USER -eq "" ]]
then 
    DB_USER=root
fi

echo "DB_PASS (default empty)": 
read DB_PASS

if [[ $DB_PASS -eq "" ]]
then 
    DB_PASS=""
fi

echo "DB_PORT (default 3306)": 
read DB_PORT

if [[ $DB_PORT -eq "" ]]
then 
    DB_PORT=3306
fi

cat > .env << EOF
DB_HOST=$DB_HOST
DB_NAME=$DB_NAME
DB_USER=$DB_USER
DB_PASS=$DB_PASS
DB_PORT=$DB_PORT
EOF

php -r "\$conn = new mysqli('$DB_HOST', '$DB_USER', '$DB_PASS', '$DB_NAME', '$DB_PORT'); 
    if (\$conn->connect_error) { 
        die('Connection failed: ' . \$conn->connect_error); 
    } 
    echo 'Connected successfully';
    \$sql = file_get_contents('mysql.sql');
    \$res = \$conn->query(\$sql);
    if (\$res) {

        \$row = \$res->fetch_row();
        echo \$row[0];
    }

    \$res->close();
    \$conn->close();
    "

echo "\n"
echo It\'s nice to meet you $DB_HOST

# new PDO("$type:host=$host;$port" . "dbname=$database;charset=$charset", $username, $password);
# cp .env.example .env
# # Установка зависимостей с помощью Composer
# composer install

# npm install


# #npx webpack

# cd public

# php -S localhost:8000