# BARB-Team-Project


## Target Audience
 * Any one who wants to start tackling the front range fourteeners from beginners to avid climbers.

## What is the problem that the product will address?
 * Provide a list of the 14'ers in the front range - X number of mountians, locations, potentially difficulty ratings.
 * Display and potentially alert when weather conditions are best to attempt a climb. 
 * Getting driving directions to the base.
 
 

## What is the primary goal of the product?
 * Consolidate and Simplify all info (Weather, Difficulty Rating, Directions) needed to plan climb for mountain

## User Stories MVP
* As a climber, I want to be able to be Quickly check if the mountains I want to climb have favorable climbing weather.
    * Wind Speed below X (i.e. 50mph)
    * Precipitation i.e. Chance of rain or snow < 30% per span of time

* How do I get to the mountain to climb - directions via Google Maps API

## Bells and Whistles

    * Extra - As a climber, I want to create a checklist of peaks I want to climb.
        * using localstorage
        * challenge - firebase authentication login and save list to db
     
    * Extra- Add hardcoded, or dynamic Difficulty Ratings per peak

    * Extra - Traffic Conditions to get to the mountain

    * Extra - Automated mobile or email alert when conditions are ideal

	* Extra - As a climber, I want to search for other users so that I can find their list of peaks to climb 
		and connect with them?

    * Display a date/time to climb and allow other users to connect (requires login)

    * iframe of Facebook, Meetup  from climbers


## APIs to use

* Weather API - geolocation - https://www.weather.gov/documentation/services-web-api

* Google Maps API - within certain distance - driving directions - https://developers.google.com/maps/documentation/

* Text API- Added challenge do a text alert



