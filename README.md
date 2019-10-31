# Clarity Widget with React App example
*NOTE*:  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run project

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## What and where to look
`ClarityWidget.js` is an example component that can be used more or less as is. It contains a clear example on how
the library at package `@clarity-ai/widget` can be used.

## Clarity widget library
It provides a simple API to load and add widgets to a given container.

### Load: `widget.load(domain)`

Injects the Clarity Widget javascript from the provided domain (with protocol):
    ```javascript
      widget.load('https://some.example.com');
    ```
You can call it more than once, if the js is already loaded it won't inject it again.

### Refresh: `widget.refresh(DomElement)`

Adds the widget to the DOM Element Node provided as first argument:
```javascript
   widget.refresh(someElement);
```

The element should look like this: 
```html
    <div
      data-clarity-widget
      data-fund="SomeFundIsin"
      data-token="SomeValidToken"
      data-lang="en"
      data-custom-css="//example.com/test.css"
    ></div>
```
