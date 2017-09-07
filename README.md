Ticket Master key information:
Consumer Key -   AzyGvxmzSHkVQzP80eYbcPgvtlufG7gw
Consumer Secret -   In4qz0O5zX3MrKDI


Google Maps API key:

AIzaSyBdNRsY4zEYnRfcQ0_ZVVd370D7yuApzhI

https://www.google.com/maps/embed/v1/MODE?key=YOUR_API_KEY&parameters
https://www.google.com/maps/embed/v1/MODE?key=AIzaSyBdNRsY4zEYnRfcQ0_ZVVd370D7yuApzhI&parameters

https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Space+Needle,Seattle+WA
https://www.google.com/maps/embed/v1/place?key=AIzaSyBdNRsY4zEYnRfcQ0_ZVVd370D7yuApzhI&q=Space+Needle,Seattle+WA




# Upbeat Atlas
Thinkful (https://www.thinkful.com/) API portfolio project - a responsive app to easily find upcoming shows and directions to your favorite bands.

![Screenshots](artist-finder-songkick-api-capstone/images/upbeat-atlas-screenshot.png)

## Introduction
Upbeat Atlas

## Use Case
Why is this app useful? A typical internet user will need to remember a huge number of, supposedly, unique usernames and passwords to access the sites they visit day-to-day. Any site that requires registration will typically have a username and password associated to it. Whilst browsers have implemented password and username storage protocols, these methods provide risk in the situation where a user's computer is accessed without permission (through theft, hacking etc). Password Vault is designed to provide an easy-to-use, secure method of storing usernames and passwords without relying on the browser or other insecure storage methods (files, offline records etc).

## UX

Initial wireframes for the home page can be seen below. Wireframes of all key processes were designed along with data flow / decision trees for key data processing tasks.

![Initial Wireframes](https://github.com/LeahBorns/artist-finder-songkick-api-capstone/blob/master/images/ContourBackground.png)

The app was designed to work on mobile as well as tablet and desktop from the outset. Error prompts using Angular's form validation features provides a helpful experience for users as they move through the application. A prominent 'help' message in the main manager screen leads through to instructions for using the site and a FAQ page, with the answer to commonly asked questions. Reminders are provided at key points of the process (for instance, when entering the encryption key into the input field) to ensure the user does not miss critical aspects of the site.

## Live Site
You can access Password Vault at http://pw-vault.com

## Technical
* The app is built using the MEAN stack. The front-end is built using HTML5, CSS3 and AngularJS, the back-end using NodeJS with ExpressJS as the web server and MongoDB as the database.
* The app is fully responsive, adapting for mobile, table and desktop viewports.
* All routing is handled in the front-end by Angular.
* Extensive form validation and error handling is demonstrated throughout the app. On the front-end, field type, value, length etc is validated using HTML5 and Angular ng-model and ng-pattern. Angular directives are used to ensure usernames and email addresses are checked in real-time and not duplicated in the database. On the back-end a Mongoose schema provides further error checking for field values and uniqueness.
* A fully-featured user registration system is integral to the application, with user registration and username / password recovery functionality provided.
* Server-side email functionality is provided by a Nodemailer implementation (https://github.com/nodemailer/nodemailer), using RackSpace's Mailgun as the SMTP Provider (https://www.mailgun.com/).
* An extensive API has been built to provide database access to the Angular app using ExpressJS, with 12 separate endpoints constructed.
* The app is fully unit tested on the front and back-end. For Angular testing a combination of Karma and Jasmine has been used. For the back-end, Mocha and Chai, with extensive use of the Mockery (https://github.com/padraic/mockery) library which provides excellent abilities to truly mock-out node 'require' dependencies.
* E2E testing has been accomplished through the use of Protractor and the Selenium webdriver.
* Security and encryption is handled via the CryptoJS (https://github.com/brix/crypto-js) library. Two algorithms are utilised, SHA256 to hash email addresses and passwords of the registered users of Password Vault. AES is used to encrypt all other data stored in the database.
* All encryption of usernames and passwords saved by users is performed in the browser, ensuring that the encryption key is never stored in the database nor sent over the internet. The key is only held in memory as long as its value appears in the input field. No cookies or browser-side data stores are used in the app.
* The Mongo database is further secured with SCRAM-SHA1 access authentication. Despite this, safeguards have been built in to ensure that even if the db was penetrated, all sensitive data is secure. All sensitive data is stored in either encrypted or hashed form in the database. Even if the encryption key used by the server to encrypt the username of registered users is compromised, email addresses and password are hashed and irrecoverable, and the actual username and password records stored by the users are encrypted using their own encryption key which is not stored anywhere in the application. Thus, even in the event of a server hack, no sensitive data can be obtained.
* The app is deployed into an Ubuntu 14.04 environment, kept running using Forever.


margin-left: 15%;
margin-top: 20%;
