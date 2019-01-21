Project Robot
=======
This a small application to calculate price developed in Node, ES6, JS. 



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

####Formula

The formula for the price calculation is:

``Product price + product type price – rebate``

### Additional prices

The additional product type prices are:

* New: +25 SEK
* Old: +35 SEK

### Rebate rules

* If the product is _new_ and _published today_ you will receive a rebate of 10 SEK.
* If you are a _company user_ you will receive a rebate of 5 SEK.


## Setup and first run

  * You need to have node, npm, git pre installed. This app has been developed and tested on Ubuntu 14.04, 17.04, 17.10. 
  * Clone the repository `git clone https://bitbucket.org/iloveyii/robot-node-es6`.
  * Run (inside root directory) npm install `npm install`.
  * To run the tests `npm run test`.
  * To run the Robot `npm run robot`.
  * Once transpiled with the above command, it can be run directly like `node public/bundle.js`.
  
### Example Input
```

  2
  1 1
  N 3
  W 4
  
```
### Example output
```

  => Cleaned: 8
  
```
  
## Overall Structure

Below is the directory structure of the source code:

```

   |-public
   |--src
   |---bundle.js
   |-src
   |--js
   |---Command.js
   |---Compass.js
   |---Coordinates.js
   |---Robot.js
   |---idex.js
   |-test
   |--compass.test.js
   |--robot.test.js
   |-package.json
   |-webpack.config.js
   |-index.html
   
```

## Requirements
   * The application has been tested with the following.
   * Ubuntu 14.04, 17.04, 17.10
   * Node v9.11.2
   * Npm 5.6.0
   
## Testing
  * To run the mocha, chai unit tests, run `npm run test`.
  
  <i>Web development has never been so fun.</i>  
[Hazrat Ali](https://github.com/iloveyii) 
