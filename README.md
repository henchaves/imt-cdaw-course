# CDAW Course
## Project
### 1. Context
This web app was created following the [requirements](https://ceri-num.gitbook.io/uv-cdaw/infos/projet-pokemon) of the course _Conception et Développement d'Applications WEB_ at [IMT Nord Europe](https://imt-nord-europe.fr/en/). The objective is to develop an end-to-end web app to perform as a Pokémon game.

<br>

### 2. Description
Pokémon Battles is a web app developed using the [Laravel](https://laravel.com/) framework.

<br>

### 3. Requirements
You must have installed (and running) on your machine:
- [docker](https://docs.docker.com/get-docker/)
- [docker compose](https://docs.docker.com/compose/install/)
- [Composer (PHP)](https://getcomposer.org/download/)

<br>

### 4. Demonstration
- [French version]()

<br>

### 5. How to run
#### 5.1. Get updated version
In order to get access to the updated version of the project, you must run the following commands on the terminal after cloning this repository.

1) `git submodule init project`

2) `git submodule update --remote`

3) `cd project`

<br>

#### 5.2. Start the app and database
In order to properly start the app and initialize the database with already some data, you must run the following commands on the terminal.

1) `cd pokemon`

2) `composer require laravel/sail --dev`

3) `./vendor/bin/sail up -d`

4) `docker compose exec app sh ./database/migrate_and_seed.sh`

<br>

#### 5.3. How to use
Go to [http://localhost](http://localhost) and enjoy! 

<br>

#### 5.4. Stop the app
Go to the `pokemon` folder, open the terminal and run `./vendor/bin/sail down`
