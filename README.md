# olena-kholod
Open some folder and:  

Run `git clone https://github.com/bachinsky1/olena-kholod.git .`

You can start aplication in three modes: 

- 1 - Run `docker-compose up`

    - Application - `http://localhost`
    
    - PHPMyAdmin - `http://localhost:8081/` 
    
    
- 2 - Run `bash run.sh` for authomaticaly deploying or make next steps


- 3 - Copy `.env.example` to `.env` and change DB connection data if it needs

    - Run `composer install`
    
    - Run `npm install` 
    
    - Run `cd public`
    
    - Run `php -S localhost:8000`
    
    - Open `http://localhost:8000`
    
    - Run `npx webpack` if you want recompile typescript
