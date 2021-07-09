# Clarity Widget with React App example
*NOTE*:  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run project

Go to the project directory, install the dependencies:

```
  yarn install
```

Start the app in development mode:

```
  yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

You will need to update the configuration properties in the clarity-widget component [ClarityWidget.js](src/components/ClariyWidget.js) with the right domain and token (to get a valid token go to the user administration menu in ClarityAI webapp):

## What and where to look
`ClarityWidget.js` is an example component that can be used more or less as is. It contains a clear example on how
the library at package `@clarity-ai/widget` can be used.

## Clarity widget library
It provides a simple API to load and add widgets to a given container.

### Load: `widget.load(domain)`

Injects the Clarity Widget javascript from the provided domain (with protocol):

```javascript
  widget.load('https://go.clarity.ai');
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
      data-lang="en"
      data-module="some-module"
      data-entities="funds"
      data-fund="SomeFundIsin"
      data-sections="KEY_SCORES"
      data-style-attributes-json="{}"
      data-custom-css="//example.com/test.css"
      data-token="your-token"
      data-end-user-id="some-user-id"
></div>
```
 * `data-clarity-widget` (Mandatory): This is a mandatory attribute 
 * `data-token` (Mandatory): The token for the Clarity API
 * `data-module` (Mandatory): The module this widget should show (ie: "esg-impact")
 * `data-entities` (Mandatory): The entities the widget will be working with (either "funds" or "portfolios")
 * `data-{entity}` (Mandatory): The identifier for the entity being used (attribute key should be either
 "data-fund" or "data-portfolio")
 * `data-style-attributes-json`: A JSON String with properties to override some styles in the application. There are
 several options to customize:
    ```json
       {
           "fontColor": "rgb(16, 21, 46)",
            // Google fonts can also be used like this `gFontFamily: 'Times+New+Roman',`
           "fontFamily": "Times New Roman",
           "baseFontSize": "12px",
           "tables": {
               "headerBgColor": "#ddd",
               "bodyBgColor": "#fff",
               "borderColor": "#ddd"
           }
       }
    ``` 
 * `data-custom-css`: Alternatively a CSS can be provided by url to customize the widget styles.
 * `data-end-user-id`: A unique user id.
 * `data-sections`: The optional sections that you want to add to the widget (ie: 'KEY_SCORES').
