# CDAW Course

## Project

#### Demonstration
- [French version]()

<br>

#### Requirements
1) [Docker](https://docs.docker.com/get-docker/)
2) [docker compose](https://docs.docker.com/compose/install/)
3) [Composer (PHP)](https://getcomposer.org/download/)

<br>

#### Get updated version
In order to get access to the updated version of the project, you must run the following commands on the terminal after cloning this repository.

1) `git submodule init project`

2) `git submodule update --remote`

3) `cd project`

<br>

#### Start the app and database
In order to properly start the app and initialize the database with already some data, you must run the following commands on the terminal.

1) `cd pokemon`

2) `composer require laravel/sail --dev`

3) `./vendor/bin/sail up`

4) `docker compose exec app sh ./database/migrate_and_seed.sh`

<br>

#### How to use
Go to [http://localhost](http://localhost) and enjoy! 

#### Stop the app
Go to the `pokemon`, open the terminal and run `./vendor/bin/sail down`.
