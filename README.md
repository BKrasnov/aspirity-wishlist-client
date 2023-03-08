# Wishlist

## Stack

`ReactJS, Typescript, redux-toolkit`

## Start the app

1. Prepare server: https://github.com/BKrasnov/aspirity-wishlist-server (see README.md)
2. Git clone project.
4. Terminal: `cd .\aspirity-wishlist-client\`
3. Run command: `npm i`
4. Run command: `npm start` (http://localhost:3000/)

## Project structure
api - files containing the logic of working with the API (authService, tokenService, userService)
components - components that can be reused (button, form, text field)
core - files related to the application logic (hooks, models, utilities)
feature - root folder for features based on a specific function (authorization, users, tasks)
store - files for working with the state of the application and methods for changing and accessing it
theme - common style files (base.css, variable.ts, theme.ts)