# News Stand Middleware #

News Stand uses the following custom middleware functions to help with requests to specific server routes.

All middleware is located in:

```sh
./app/server/middleware/
``` 

## authRoutes ##
for information on authentication routes please see the [oauth](https://github.com/news-stand/news_stand/blob/master/documentation/oath.md) section

## searchArticles ##

The primary GET request to the NewsAPI's 'Top Headlines' and 'Everything' endpoints. It is called from the server's GET endpoints '/articles' and '/preferences'. It takes parameters (user search parameters) from the request object and formats the NewsAPI search query. Default parameters are provided. 

## getSources ##

This middleware is used by the AddSource component. It is called when AddSource loads and retrieves a list of sources from the NewsAPI 'sources' endpoint. It formats an id & label property to each source. 

## getPreferences ##

This function is used in a GET request to the '/preferences' endpoint to generate query and user preference properties. The middleware takes request object, response object, and 'next' as arguments. During the function a 'query' property and a 'preferences' property are added to the request object. Please see below for more details:

## setPreferences ##

This function is used in a POST reqeust to the '/preferences' endpoint.  The middleware takes a request object, response object, and 'next' as arguments. It is used to set the currently selected preferences of a logged in user.  By looking up the user in the database via their goodleID the currently selected 'topics' and 'selectedSources' are saved to their account.

## addFavorite ##

This function is called from the '/favorites' POST route. If a user is signed in when clicking the 'favorite' button, this middleware will format the article and update the database as a favorited article based on the users googleId. 