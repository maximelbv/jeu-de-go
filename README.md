# Jeu de go

## Requirements

## Installation

### Server

At the root of the project:

```sh
cd server
sh setup.sh
```

The setup will:

- install the dependencies
- create and make migrations
- make the scraping

Launch the api server:
```sh
cd server
sh launch.sh
```

### Client

At the root of the project:

```sh
cd client
npm i
npm start
```

### Api urls

#### Register user :

http://127.0.0.1:8000/register/

Datas to add to the post method example :
    {
        "email": "user@go.com",
        "password": "tsumego2024",
        "password2": "tsumego2024",
    }

#### Authentificate user :

http://127.0.0.1:8000/login/

Datas to add to the post method example :
    {
        "email": "user@go.com",
        "password": "tsumego2024",
    }

#### Get all tournaments datas :

http://127.0.0.1:8000/tournaments/

#### Get all positions datas :

http://127.0.0.1:8000/positions/

#### Get one tournaments datas and positions by tournament ID : 

http://127.0.0.1:8000/tournament/{id}/

#### Get all problems :

http://127.0.0.1:8000/problems/

#### Get one problem by ID :

http://127.0.0.1:8000/problem/{id}/

#### Add a problem :

http://127.0.0.1:8000/problems/

#### Get all problems to validate :

http://127.0.0.1:8000/problems/to/validate/

#### Get one problem to validate by ID :

http://127.0.0.1:8000/problem/to/validate/{id}/

#### Add a problem to validate :

http://127.0.0.1:8000/problems/to/validate/

#### Delete a problem to validate : 

http://127.0.0.1:8000/problem/to/validate/{id}/