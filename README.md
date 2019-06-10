# Simple text editor
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Author
Original project clone by Mario Romero (https://www.linkedin.com/in/mario-romero-arg/)

## Initial setup
Run `npm install` in order to setup application

## Development server
Run `npm start` for a dev server.

## Notes
+ Text sample is given in `text.service.js`
+ Given files structure is not obligatory and could be changed

## Solution Notes
+ The FileZone component is extended as the rich text editor the challenge asked for.
+ The strategy used for the "tree-like" style component problems is a recursive function.
+ Classic state/props option is used instead of Redux for data management.
+ To add more style features, just create a new button in the ControlPanel component (At this moment, only html tags buttons should apply. Ex: h3/p/div).
