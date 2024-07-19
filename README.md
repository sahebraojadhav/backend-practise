-src/
    index.js
    models/
    controllers/
    middlewares/
    services/
    utils/
    config/
    respository/

-tests/[later]
-static/


# wel-come to Flights service

## Project setup 
-clone the project on your local 
-Execute `npm install` on the same parth as your root directory of the download project 
-Create a `.env` file in the root directory and add the following environment variable
-PORT=3000

Inside the src/config folder create a new file `config.json` and then add the following pieces of json 

```
{
    "development""{
        "username":<YOUR_DB_LOGIN_NAME>,
        "password""<YOUR_DB_PASSWORD>,
        "database":"flights_Search_DB_DEV",
        "host":"127.0.0.1;
        "dialect":"mysql"
    }
}
```


```
-Once you've added your db config as listed above,go to the src folder from your terminal adn execute `npx sequelize db:create`
`npx sequelize db:migrate`
```

##DB Design
    -Airplane Table
    -Flight
    -Airport
    -city

    -A flight belings to an airplane but one airplane can be used in multiple flights 
    -A city has many airports but one airport belongs to a city 
    -one airport can have many flights,but a flight beongs to one airport

