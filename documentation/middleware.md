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

This middleware is used by the AddSource component. It is called when AddSource loads and retrieves a list of sources from the NewsAPI 'sources' endpoint. It formats an id & label property to each source. 

## getPreferences ##

## setPreferences ##

## addFavorite ##

This function is called from the '/favorites' POST route. If a user is signed in when clicking the 'favorite' button, this middleware will format the article and update the database as a favorited article based on the users googleId. 
