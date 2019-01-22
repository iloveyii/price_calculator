Calculate Price
=======
This a small application to calculate price developed in Node, ES6, JS. 

![Screenshot](http://price-calculator.softhem.se/img/screenshot.png)

[DEMO](http://price-calculator.softhem.se/)

## Background
This application calculates price based on different rules and values. The calculation uses:

* User type
  * there are two different user types:
    * Company user
    * Normal user
* Product Type
  * there are two product types:
    * New
    * Old
* Price
* Published date

### Formula

The formula for the price calculation is:

``Product price + product type price – rebate``

### Additional prices

The additional product type prices are:

* New: +25 SEK
* Old: +35 SEK

### Rebate rules

* If the product is _new_ and _published today_ you will receive a rebate of 10 SEK.
* If you are a _company user_ you will receive a rebate of 5 SEK.


### What has been done
  * I used node, ES 6 for this task as it is easy to develop and test
  * I segregated the project logic into three classes, Product, User, and CalculatePrice. It is easy to maintain, read and test.
  * I used config/settings.js for settings the constants to make it easy to maintain these values later.
  * I used mocha, chai tests to make it robust.
  * I developed a simple web/index interface using JS / JQuery to test / try the code with different values.


## Setup and first run

  * You need to have node, npm, git pre installed. This app has been developed and tested on Ubuntu 14.04, 17.04, 17.10. 
  * Clone the repository `git clone git@github.com:iloveyii/price_calculator.git`.
  * Run (inside root directory) npm install `npm install`.
  * To run the tests `npm run test`.
  * To build the app `npm run build`.
  * To run the app dev server `npm start`.
  * Open browser and open `localhost:8080`.
  
### Example Input
```
  User Type: Company User
  Product Type: Old
  Published Date: today
  Price: 20
  
```
### Example output
```

  Calculated Price: 50
  Rebate: 5
  
```
  
## Overall Structure

Below is the directory structure of the source code:

```

   |-public
   |---bundle.js
   |-src
   |--js
   |---config
   |---CalculatePrice.js
   |---index.js
   |---Product.js
   |---User.js
   |-test
   |--calculate.test.js
   |--product.test.js
   |--settings.test.js
   |--user.test.js
   |-web
   |-.babelrc
   |-package.json
   |-webpack.config.js
   |-README.md
   
```

## Requirements
   * The application has been tested with the following.
   * Ubuntu 18.10
   * Node v9.11.2
   * Npm 5.6.0
   
## Testing
  * To run the mocha, chai unit tests, run `npm run test`.
  
  <i>Web development has never been so fun.</i>  
[Hazrat Ali](https://github.com/iloveyii) 
