# News Stand Database #

News Stand uses a MongoDB database with Mongoose ORM. We utilized [mlab](https://mlab.com/) as a hosted DB solution, but it could easily be setup to run on a local database if preferred.

Our database is configured in:
```sh
./app/server/database/db.js
``` 
Mlab makes it easy to setup and use a Mongo database from multiple machines. Opening a connection in the terminal is as easy as running your own specific version of:

```sh
mongo mongodb://<username>:<password>@ds163705.mlab.com:63705/news-stand
``` 
Our database uses two different schemas:

## User ##
### Schema ###
```node
const userSchema = new Schema({
  username: String,
  googleId: String,
  profileImg: String,
  topics: [String],
  selectedSources: [{}],
  articles: [], 
});
```

## Article ##
Article docs are pushed into the articles property of the `userSchema`
### Schema ###
```node
const articleSchema = new Schema({
  urlToImage: String,
  title: String,
  description: String,
  source: {
    name: String,
  },
  author: String,
  url: String,
});
```