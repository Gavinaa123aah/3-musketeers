

![currency_pic](img/currency.jpg) 
**Table of Contents**  

- [Introduction](#Introduction)
- [Dependencies](#Dependencies)
- [Modules](#Modules)
- [How to do](#How-to-do)
  - [Step 1](#Step-1)
  - [Step 2](#Step-2)
  - [Step 3](#Step-3)
- [thank you](#Thank-you)

## Introduction
this is a currency conversion tool which can be used to calculate exchange rate between differant currencies according to Real-time currency

## Dependencies
there are some dependencies to be installed:
```json
	"dependencies": {
		"chalk": "^2.4.2",
		"conf": "^2.2.0",
		"got": "^9.6.0",
		"meow": "^5.0.0",
		"money": "^0.2.0",
		"ora": "^3.2.0"
	}
```
## Modules
constants.js . 
this module include some configuration parameter . 
  
index.js . 
this module is used to read parameter from user inputing,you can think it's a entrence . 
  
constants.js . 
this module is used to calculate currencies . 
   
## How to do . 

### Step 1 . 
Getting help about parameter
```sh
cash --help
```
![help_img](img/screenshots3.jpg)
### Step 2
you can get defaul currencies from USD to (eur, gbp, jpy)
```sh
cash
```
![default](img/screenshots1.jpg)
### Step 3
you can calculates the exchange rate for the specified currency
```sh
cash 10 usd cny
```
![specify](img/screenshots2.jpg)

## Thank you
