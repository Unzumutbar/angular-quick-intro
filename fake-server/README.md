# Fake Server

https://github.com/typicode/json-server

Create an separate folder for your fake server.
Initialize it with a package.json file.

    > npm init -y
    > npm i -D json-server

Create a start script for your fake-server.

Delete following line:

    "main": "index.js",

Add following line:

    "private": true,

Your complete package.json:

    {
      "name": "fake-server",
      "version": "1.0.0",
      "description": "",
      "private": true,
      "scripts": {
        "start": "json-server --watch db.json -d 500"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }

You can start your server with following command:

    > npm start

## Creating data

After the first attempt to use json-server, a db.json file appears. It should look like this:

    {
      "posts": [
        {
          "id": 1,
          "title": "json-server",
          "author": "typicode"
        }
      ],
      "comments": [
        {
          "id": 1,
          "body": "some comment",
          "postId": 1
        }
      ],
      "profile": {
        "name": "typicode"
      }
    }

