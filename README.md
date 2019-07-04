# run

`docker-compose up`

# run while making sure build is the latest

`docker-compose up --build`

# install an npm package on react

`cd app`
`npm install axios` -> make sure to use npm here
`cd ..`
`docker-compose build`
`docker-compose down`
`docker-compose up`

# just in case

- https://github.com/docker/compose/issues/1487
