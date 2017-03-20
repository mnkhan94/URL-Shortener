# URL-Shortener
For Full Sail's Deployment of Web Applications -Jan 2017

![mnkhan approved](https://img.shields.io/badge/mnkhan94-approved-brightgreen.svg)

![alt tag](/readme/logo.png)

Unlike TinyURL which gives you a totally forgettable set of characters, `short.io` returns back a two-combination series of words.

## Installing short.io

Step 1. Make Sure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com) installed.

Step 2. Download or Clone this Repo.

Step 3. Inside the repo's main directory, use your CLI to type `npm install` to install all the node packages into the node_modules directory.

Step 4. Make sure to set up a Database to save the shortened-URLS. I like to use mySQL + MAMP when I'm working local.

Step 5. Finally, run `node ./src/server.js` to run **short.io**

## Routes

### GET

get `/` => Will take you to the Welcome Screen
get `/go/:shortUrl` => Will redirect you to the Original Url
get `/api/v1/urls` => Returns back all URLs in database

### POST

Using Postman or alternative:

post to `/api/v1/url` => Saves a new url like short.io/v97fhg

post to `/api/v1/url/:id` => Finds & Updates the specified shortened Url

### DELETE

Using Postman or alternative:

delete to `/api/v1/url/:id` => Finds & Deletes the specified shortened Url

## Debugging

We use the fantastic 'utility-tool-mnkhan' npm package to debug. 
For more info, check out their repo here: [utility-tool-mnkhan](https://github.com/mnkhan94/utility-tool)

