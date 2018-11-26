# Project Title

Schedule Maker

## Getting Started

First your need to clone this repo to your local machine.

```
git clone https://github.com/daliDeli/scheduling-system.git
```


### Installing

To install dependencies you need to:

```
npm install
```

after that you are ready to start the project 

1. First step is to start the fake REST API

```
npm run json:server
```

2. Then you can start the project with

```
npm start
```

### Project

After thats all done you will have a project running on http://localhost:8080.

Few things.
You can filter shifts by employees by simple selecting the name of the employee in the EMPLOYEE field.
Also you can see the current, last and next working week but this is not dynamicaly generated(which is something I should have probably done).

### Assumption

Position property in employee object is just a string saying the name of the position in the firm.
Position in shift is an object with two properties, name if the company and color which is changing depending on shift name.
Shift Name is the name of that shift and instead of writing Morning Shift, Day Shift ... I wrote the correct time period.

### Coding style: Airbnb


