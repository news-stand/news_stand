## News Stand

> The goal of News Stand is to provide users a clean, all-in-one place to find, consume, and comment on the news. News sites are fragmented and RSS feeds don’t allow users to comment, so we want to combine the two.

> Our project is built using the MERN stack.

## Team

  - Katherine Manning
  - Patrick Miner
  - Ayush Kumar
  - Danny Welstad

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

From the command line, run the following commands:

Clone:
```sh
git clone https://github.com/news-stand/news_stand
```

Navigate Into Repo:
```sh
cd news_stand
```

Install Dependencies:
```sh
npm install
```


Start:
```sh
npm run start:dev
```
Note: This starts the Webpack bundler and Babel transpiler, which run in parallel with nodemon to run your server. You only need one open "running" terminal, rather than three. All three will watch for changes, so you don't need to re-run or re-start any of the processes.


## Requirements

- node 8.4.0
- express 
- body-parser
- mongodb
- mongoose
- react
- react-dom
- react-router


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Setting Environment Variables

This project uses the [dotenv](https://www.npmjs.com/package/dotenv) module to read and configure environment variables from a .env file. The .env is included in .gitignore and is where you should store your API keys.

The .env reads bash commands, so set environment variables like you would in the terminal.

```sh
# for example:
NEWS_KEY=yourKeyHere
```

You then can access the environment variables in your JavaScript files.

```node
// for example:
search = `https://newsapi.org/v2/everything?q=art&sources=bbc-news&sortBy=popularity&apiKey=${process.env.NEWS_KEY}`
```

### News API

This project uses information from [NewsAPI](https://newsapi.org/). For development, you'll need an API key that you set in your environment variables. 

Endpoints:
  - [/v2/everything](https://newsapi.org/docs/endpoints/everything): For articles searches
  - [/v2/sources](https://newsapi.org/docs/endpoints/sources): For an up-to-date list of possible sources to query

### Roadmap

View the project roadmap [here](https://docs.google.com/document/d/1lz--RxE-sTt_9faC1WhdDpPa4LweuFcabv9QsFsDbwo/edit?usp=sharing)


## Contributing

See [CONTRIBUTING.md](https://github.com/news-stand/news_stand/blob/master/CONTRIBUTING.md) for contribution guidelines.
