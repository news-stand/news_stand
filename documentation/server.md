# News Stand Server #

The News Stand application uses a Node/Express server for its back end. The main server is located at:

```sh
./app/server/index.js
``` 

## Routes ##

The controllers for all of our routes are located at:

```sh
./app/server/app.js
``` 

### /auth ###

Requests sent to '/auth' use the authRoutes middleware to authenticate the user.

### GET /articles ###

GET requests sent to '/articles' use the searchArticles middleware to query the API for articles according to the user's search parameters, then sends them back to the client.

### GET /sources ###

GET requests sent to '/sources' use the getSources middleware to query the API for all available sources, then sends them back to the client.

### POST /preferences ###

POST requests to the '/preferences' route use the getPreferences and searchArticles middleware to update the database and query the API for articles according to the user's parameters, then sends the articles back to the client.

### POST /favorites ###

POST requests to the '/favorites' route occur when a user clicks the 'favorite' button. The handler checks if a user is signed in and, if so, uses the addFavorite middleware to to add the article to the database. 

### GET * ###

This is our catch-all route and simply sends back our static HTML page.
