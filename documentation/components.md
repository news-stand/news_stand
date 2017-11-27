# News Stand Components #

News Stand is a React and React-Router based application with discrete components for each piece of functionality.

All components are located in the components directory:

```sh
./app/components/
``` 


## App ##

App is the main component and the root of the News Stand application. It is located at:

```sh
./app/components/App.js
``` 

It gets rendered to the DOM inside the root application file:

```sh
./app/index.js
``` 

App uses React Router to determine which page component to show: Home (path '/'), Login (path '/login'), Profile (path '/profile'), and NotFound (all other paths). 

On rendering, App uses the componentDidMount lifecycle method to check with the server and see whether the user is logged on. It then sets the App's loggedIn and user states.


## NotFound ##

NotFound is a simple stateless component that displays a 404 Not Found message. It is located at:

```sh
./app/components/NotFound.js
``` 

It contains no methods or other components.


## Login ##

Login is a simple stateless component that connects with Google's OAth service on the server. It is located at:

```sh
./app/components/Login.js
``` 

It contains a button that sends a login request to the server using the '/auth/google' route. It contains no other components.


## Home ##

Home is the most complex component in the News Stand application. It is stateful and contains a number of methods. It is the main page of the application and one anyone can see, even if they're not logged in. It is located at:

```sh
./app/components/Home.js
``` 

#### Default State ####

```node
this.state = {
  sortBy: 'publishedAt',
  articles: [],
  selectedSources: [{
    label: 'TechCrunch',
    id: 'techcrunch',
  }],
  topics: ['net neutrality'],
};
``` 

1. topics and selectedSources:

Home comes preloaded with one default source and one default topic, to show the user how to search for more and to make rendering articles easier. Topics is an array of string topics. SelectedSources is an array of sources objects and each object is made up of a label and id (some labels and ids don't cleanly translate so you need to keep track of both).

2. articles

Articles starts out as an empty array that populates with article objects on a search performed during the componentDidMount lifecycle method. These objects are then rendered on home page as the articles you see.

3. sortBy

Default sorting is by most recent, though the user can toggle by popularity with a button in the Header.

#### Methods ####

1. componentDidMount
    - gets the preferences of a logged in user
    - displays the articles for either the default topics and sources ('net neutrality' and 'TechCrunch') or the user's preferred topics and sources (if logged in)
1. onRefreshClick
    - when the refresh button is clicked, onRefreshClick fires off a request to the server to get new articles
1. onToggleClick
    - updates the sortBy state to be either publishedAt or popularity, depending on which is currently selected
1. onAddSource
    - takes a source parameter
    - updates the selectedSources in state to include the new source
    - sends a request to the server for articles
1. onRemoval
    - takes an index and type parameter
    - if type is 'topics', updates the topics state to remove the topic at the index where the function is being clicked on
    - if the type is not topics, updates the selectedSources state to do the same thing
    - sends a request to the server for articles
1. onTopicSearch
    - takes a topic parameter
    - updates the topics in state to include the new topic
    - sends a request to the server for articles
1. setPreferences
    - sends a POST request to the server to update the user's preferences with what's currently in state on the Home component
1. getArticles
    - uses the search helper function to get articles from the server

#### Helper Functions ####

Home uses injected helper functions, rather than class methods, for most AJAX requests. These make the components easier to test in isolation, since you can create dummy functions that don't actually perform the AJAX requests and inject those in instead. This is most important for any functions on the componentDidMount method.

Component helper functions are located at:

```sh
./app/components/helpers/
``` 

Example of injecting into a component:

```jsx
<Home search={search} getPreferences={getPreferences} />
``` 

1. getPreferences
    - sends a GET request to the server's '/preferences' route
2. search
    - sends a GET request to the server's '/articles' route

## Home - Nested Components ##

### Header ###

Header is a simple stateless component that contains buttons and links, but no other nested components. It is located at:

```sh
./app/components/Header.js
``` 

### Topics ###

Topics is a stateless component that serves as the umbrella for all topics-related components. It is located at:

```sh
./app/components/Topics.js
``` 

Topics contains nested components. A tree of these nested components can be found below:
    - Topics.js
        - TopicsSearch.js
        - TopicsList.js
            - TopicsListItem.js

### TopicsSearch ###

TopicsSearch is a stateful component nested within Topics. It is located at:

```sh
./app/components/TopicsSearch.js
``` 

TopicsSearch uses a MaterialUI [TextField](http://www.material-ui.com/#/components/text-field) component for its input field.

#### Default State ####

TopicsSearch holds the search bar's value in state as 'searchTerm'. It initializes with an empty string.

```node
this.state = {
  searchTerm: '',
};
``` 

#### Methods ####

1. onSearch
    - takes an event parameter
    - prevents the page from refreshing on submission of the form
    - uses the onTopicsSearch method from the Home component to look up new articles and update the state there
    - updates the searchTerm state to an empty string
1. handleBarChange
    - updates the search bar to render whatever values are typed into it

### AddSource ###

AddSource is a stateful component created with MaterialUI [TextField](http://www.material-ui.com/#/components/text-field) and [AutoComplete](http://www.material-ui.com/#/components/auto-complete). It renders a list of suggestions based on available sources from the server. It is located at:

```sh
./app/components/AddSource.js
``` 

#### Default State ####

AddSource keeps track of the value of the search bar, the current suggestions based on user input, and the selected source. It is initialized with all of those empty:

```node
this.state = {
  value: '',
  suggestions: [],
  selected: {},
};
``` 

#### Methods ####

1. componentDidMount
    - uses the `getSources` helper function to retreive all the possible sources from the [newsAPI.org](https://newsapi.org/) API
    - updates a variable labeled "suggestions" defined at the top of the file outside the scope of any functions or components.
1. handleSuggestionsFetchRequested
    - gets suggestions based of off user input and updates the state
1. handleSuggestionsClearRequested
    - clears suggestions after a user submits a source 
1. handleChange
    - updates the `value` property of state as the user types in the input field
1. handleClick
    - resets the state of `value` to be empty
    - triggers the `onAddSource` function passed down through props to add the submitted source to the `home.js` state

#### Helper Functions ####

1. getSources
    - makes a request to the newsAPI's `/sources` endpoint to retreive all possible sources
1. renderInput
    - returns the Material UI TextField component
1. renderSuggestion
    - returns a component that renders the autocomplete suggestions as a dropdown menu
1. renderSuggestionsContainer
    - a function passed into the `AutoComplete` component that returns a container
1. getSuggestionValue
    - returs the `label` property from a suggestion object
1. getSuggestions
    - filters the the array of suggestions and returs those that match what the user is typing

### SelectedSources ###

SelectedSources is a stateless component that dynamically renders a list of SourceItem components. It is located at:

```sh
./app/components/SelectedSources.js
``` 

### SourceItem ###

SourceItem is a stateless component that has a removal button and lists a single source. It is nested within SelectedSources and is located at:

```sh
./app/components/SourceItem.js
``` 

### NewsList ###

NewsList is a stateless component that dynamically renders a list of NewsItem components. It is located at:

```sh
./app/components/NewsList.js
``` 

### NewsItem ###

NewsItem is a stateless component that shows all an article's information. It is nested within NewsList and is located at:

```sh
./app/components/NewsItem.js
``` 

NewsItem components contain a nested FavoriteButton component.

### FavoriteButton ###

The FavoriteButton is a stateful component nested inside NewsItem components. It is located at:

```sh
./app/components/FavoriteButton.js
``` 

The FavoriteButton component uses a MaterialUI [IconButton](http://www.material-ui.com/#/components/icon-button) and [Heart](https://www.npmjs.com/package/mui-icons) icon. It is grey until hovered over, when it turns red. It'll turn red permanently (or at least until page refresh) if the user is logged in and clicks on it.

#### Default State ####

The FavoriteButton component keeps track of whether the article that it's attached to has been favorited. It is initialized with a default value of false, which is changed to true onAddFavorite for logged in users.

```node
this.state = {
  favorited: false,
};
``` 

Note that favorited status (and thus the styling) is kept on the client side and doesn't persist past page reload.

#### Methods ####

1. onAddFavorite
    - sends a POST request to the '/favorites' route on the server to add the article to the user's database entry
    

## Profile ##

Profile is the component that is rendered when a user clicks on Home's 'Profile' button. It is a stateful component. It can only be viewed after a user has logged in. 

It shows the users name and associated Google-profile image.  It also shows the current preferred topics and sources, as well as rendering a list of all articles that the user has liked.

It is located at:

```sh
./app/components/Profile.js
```

#### Default State ####

Profile is a component that needs to update with every topic or source that's added/removed, as well as with any article that's liked.  The values of it's state (which are detailed below) are all pulled from the database and passed in as props.

```node
this.state = {
  username: this.props.user.username,
  topics: this.props.user.topics,
  selectedSources: this.props.user.selectedSources,
  articles: uniqArticles, // uniqueArticles is generated from this.props.user.articles prior to setting state
  img: this.props.user.profileImg,
};
``` 

#### Methods ####

1. capitalizeFirstLetter
    - capitalizes the first letter of a string for use in the list of topics and selectedSources

## Profile - Nested Components ##

### NewsList ###

See above for NewsList and its nested NewsItem components.
