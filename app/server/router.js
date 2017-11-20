import React from 'react';
import routes from './routes';
import { matchPath, StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';


// create a router function that takes in an end point
export default function router(req, res) {
  const match = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);

  if (!match) {
    // if we do not find a match (aka do not have an endpoint)
    res.status(404).send('page not found');
  } else {
    const html = 
  }
}
  // see if the endpoint matches any of the endpoints that we have in routes.js
  // if there is a match return/send the component in HTML
  // if not, return/send the 404 Not found componenet
