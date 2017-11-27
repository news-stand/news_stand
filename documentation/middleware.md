# News Stand Middleware #

News Stand uses the following custom middleware functions to help with requests to specific server routes.

All middleware is located in:

```sh
./app/server/middleware/
``` 

## authRoutes ##

## searchArticles ##

The primary GET request to the NewsAPI's 'Top Headlines' and 'Everything' endpoints. It is called from the server's GET endpoints '/articles' and '/preferences'. It takes parameters (user search parameters) from the request object and formats the NewsAPI search query. Default parameters are provided. 

## getSources ##

## getPreferences ##

## setPreferences ##

## addFavorite ##
