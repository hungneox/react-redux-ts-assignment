# React Redux Typescript Workshop Assignment

## What the assignment about
Working on a simple Images service, where users come and add their own image to the service (use URL to simplify the assignment). Only a logged in user can add new image, and only image's creator can delete it.

Given `services` are implemented to handle the authentication and authorization, workshop attendees only need to implement the `redux state` and `components`.

## Requirements
* Use given `services` (in `src/services`) to do authentication and fetching, adding and deleting images
* Use `redux` to store current state and do the cache
* Use either `redux-thunk` or `redux-saga` (or any popular async action for redux) to handle async action
* State should have:
    - Current authenticated user
    - Current image records
* Should have components to display:
    - Current authenticated user
    - Each image and its user's username

## Homework
* Add comments to each image
* Trying with `react-router` or any other popular router