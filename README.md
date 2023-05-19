# olena-kholod
Open some folder and:  

Run `git clone https://github.com/bachinsky1/olena-kholod.git .`

Run `bash run.sh` for authomaticaly deploying or do next steps

- Copy `.env.example` to `.env` and change DB connection data if it needs

- Run `composer install`

- Run `npm install`

- Run `cd public`

- Run `php -S localhost:8000`

- Open `http://localhost:8000`

- Run `npx webpack` if you want recompile typescript
