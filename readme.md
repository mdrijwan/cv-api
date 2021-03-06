# CV-Api
A sample app that demonstrates a restful API with CRUD operations to response with `JSON` format

**Tasks**
- 1 )
Create a CV in Json
- 2 )
Create an API that output
- 3 )
Create REST API with CRUD Operation for JSON CV
- 4 )
Convert the REST API into TypeScript

## Getting Started

Clone the project repository by running the command below if you use SSH

```
git clone git@github.com:mdrijwan/cv-api.git
```

If you use https, use this instead

```
git clone https://github.com/mdrijwan/cv-api.git
```

Run the command below to install NPM dependencies

```
npm install
```

Then compile the `TypeScript` files to `JavaScript`

```
npm run complie
```

To test the projct

```
npm run test
```

Then start the server and visit [http://127.0.0.1:3000/](http://127.0.0.1:3000/) to see the app in action.

```
npm run start
```

To start a web server that serves the cv.json. Visit [http://127.0.0.1:4000/](http://127.0.0.1:4000/) to see the CV in `html` format

```
npm run show
```

>For the CRUD operation, the database needs to be started first.

Start the database

```
sudo service mongod start
```
>Notes on MongoDB:
- To verify that MongoDB has started successfully
Verify that the mongod process has started successfully by checking the contents of the log file at `/var/log/mongodb/mongod.log` for a line reading
```
[initandlisten] waiting for connections on port <port>
where <port> is the port configured in /etc/mongod.conf, 27017 by default.
```
- If mongodb breaks here’s the fix
```
sudo systemctl enable mongod
```
- To see collections of data
  + Type `mongo`

- To show all the databases
  + `show dbs`

- To go inside a db
  + `use <db name>`

- To see the tables inside the db
  + `show collections`

- Choose your collection and type the following to see all contents of that collection:
  + `db.<collectionName>.find()`

#### The CRUD operations

***Methods***
- GET/
  + GET/ `(to see my CV)`
  + GET/cv `(to see the whole list of CVs)`
  + GET/cv/cvId `(to see a specific CV)`
 
- POST/
  + POST/cv `(to create a CV)`
   
- PUT/
  + PUT/cv/cvId `(to update a CV)`
  
- DELETE/
  + DELETE/cv `(to delete the whole list of CVs)`
  + DELETE/cv/cvId `(to delete a specific CV)`

##### For Load Testing
Install `seige` in your system

- For `GET/` method (Example)
```
siege http://localhost:3000/cv -t10s
```
- For `POST/` method (Example)
```
siege --concurrent=100 --content-type="application/json" 'http://localhost:3000/cv POST {"name":"value1", "email":"value2"}' -t10s
```
>Note:
A `proxy-api` for this `cv-api` is [here](https://github.com/mdrijwan/cv-api-proxy).

[![Buildkite Build status](https://badge.buildkite.com/48efec850cb5265ac7259acd4146ef64855a7d77cd7fef2ce0.svg)](https://buildkite.com/rr/cv-api)
[![Travis CI Build Status](https://travis-ci.org/mdrijwan/cv-api.svg?branch=master)](https://travis-ci.org/mdrijwan/cv-api)
