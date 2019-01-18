# BARB-Team-Project

## Live Site
- https://fourteener-friend.herokuapp.com

![14er Friend About](14erAbout.png)

## Target Audience
 * Any one who wants to start tackling the front range fourteeners from beginners to avid climbers.

## What is the problem that the product will address?
 * Provide a list of the 14'ers in the front range - X number of mountians, locations, potentially difficulty ratings.

 ![14er Friend All Mountains View](14erFriendMtns.png)

 * Display and potentially alert when weather conditions are best to attempt a climb. 
 * Getting driving directions to the base.
 
 ![14er Friend Mountain Routes View](14erFriendTrailRoute.png)

## What is the primary goal of the product?
 * Consolidate and Simplify all info (Weather, Difficulty Rating, Directions) needed to plan climb for mountain

## User Stories MVP
* As a climber, I want to be able to be Quickly check if the mountains I want to climb have favorable climbing weather.
    * Wind Speed below X (i.e. 50mph)
    * Precipitation i.e. Chance of rain or snow < 30% per span of time

* How do I get to the mountain to climb - directions via Google Maps API
  ![14er Friend](14erFriendPref.png)

* Challenge - Login with 3rd party - google+ and passport 
![14er Friend Google Login](GoogleLogin.png)


## Questions
* What causes package-lock.json
   - What bugs do you see when that happens?
   - How is that corrected?
* How do you decide if something should be executed on the front end or the back end?
* How do you decide something should be stored in the database or in an object?
* How to store an image in the database (blob) and how to get and display it
* What exactly is the session?  Meaning where is it checked?

## TODO
* Sort and Filter Mountains according to Sliders or with buttons
* Get the image thumbnail from google to display
* Save an image in the database (DONE) and display it (TODO)
* Save the user interests
* Favorite Mountains
* Populate an individual page per mountain
* Local User Login

## Enhancements

* Extra - As a climber, I want to create a checklist of peaks I want to climb.
        * Saved as User Favorites in the Database

* Extra- Add hardcoded, or dynamic Difficulty Ratings per peak

* Extra - Traffic Conditions to get to the mountain
    - Save the users address / current geolocation for directions
    - Show distance from address/ current location (to mountains)

* Extra - Automated mobile or email alert when conditions are ideal

* Extra - As a climber, I want to search for other users so that I can find their list of peaks to climb and connect with them?

![14er Friend](14erFriendInterests.png)

- Show the user best matches for their interests

* Extra - Display a date/time to climb and allow other users to connect (requires login)

* Extra - iframe of Facebook, Meetup  from climbers


## APIs to use

* Weather API - geolocation - https://www.weather.gov/documentation/services-web-api
* Google Maps API - within certain distance - driving directions - https://developers.google.com/maps/documentation/
* Google+ API- For 3d Party User Login
* Texting API - Twilio

## SLIDER
* https://github.com/seiyria/bootstrap-slider

## NPM Dependencies
* axios
* cookie-session
* dotenv
* ejs
* express
* mysql2
* node-fetch
* passport
* passport-google-oauth
* passport-google-oauth20
* sequelize
* twilio
