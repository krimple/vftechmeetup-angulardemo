# Sample application from the Valley Forge Tech Meetup

## Date - June 4, 2014
---

This code is a sample that was updated and enhanced to share with the
Valley Forge Tech Meetup from an Angular Talk we did.

The app is a simple AngularJS application, written using the Angular
Seed project (see
[https://github.com/angular/angular-seed](https://github.com/angular/angular-seed).
I modified it to use jshint and to serve some specfic tests in Karma.

## Instructions to use

Download a zip of this repo and unpack it.  Make sure you've installed
NodeJS (at least version 0.10.20 or higher).

Once you've verified you can execute `node` and `npm`, cd to this
directory and issue the following commands:

```bash
npm install -g karma-cli
npm install
bower install
```

Once you've done that, the npm command line can do a number of things:

* `npm start` - starts up the project (and if you forgot to run npm or
  bower install, it'll do that for you.
* `npm test` - run the Karma tests against your application. Our tests
  are located in `test/spec`.
* `npm run-script jshint` - If you're mucking around and think you have
  a syntax error, run the jshint tool. Without a compiler you MUST use a
  linter in Javascript - JSHint is the best one in my opinion.

Enjoy, and don't forget to remember Chariot for your AngularJS, Spring,
Maven, Scala and other training needs. We do both on-site and hosted
training for small teams upward of 6 students.

Ken Rimple
Chariot Solutions
[http://chariotsolutions.com/training](http://chariotsolutions.com/training)



