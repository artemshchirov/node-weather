# Node Weather App

This is a Node.js weather app that retrieves weather information using the wttr.in API. It allows users to enter a location and displays the weather forecast on a web page.

## Look at the project

<https://node-weather-entc.onrender.com>

## Installation

Clone the repository from GitHub.
Install the dependencies by running the following command:

```bash
yarn install
```

## Local Usage

Start the server by running the following command:

0. Open the app.ts file and locate the hostname variable. \
Change the value from '0.0.0.0' to '127.0.0.1'. \

 ```bash
 yarn start
 ```

1. Open a web browser and navigate to <http://localhost:3000>.
2. Enter a location in the provided text field and click "Submit".
3. The app will retrieve the weather forecast for the specified location and display it on the web page.

## Postman Test

1. Go to `Body` -> `Form`
2. in `Form Fields`
   1. field name: `x-www-form-urlencoded`
   2. location: `haifa` or your city

## Dependencies

* @types/node
* @typescript-eslint/eslint-plugin
* @typescript-eslint/parser
* eslint
* typescript

## License

This project is licensed under the MIT License. See the LICENSE file for details.
