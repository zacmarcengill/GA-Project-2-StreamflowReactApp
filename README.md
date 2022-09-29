# Streamflow React App

## App Description:

A React webapp that retrieves up-to-date streamflow data via API from USGS (U.S. Geological Survey) for the purpose of planning fishing trips and other stream related activities. App will also feature an interactive map of the streamflow site location.

---Future Embedded App Screenshot---

## Technologies Used:

- CSS
- HTML
- Javascript
- React
- REST/JSON API

## Installation Instructions:

Find the "About" section on this repo and click the link. This will take you to the deployed site for this app. No installation required.

## User Stories:

### Project MVP

- As a user, I need to recieve up-to-date and realtime streamflow data to prepare for my fishing trip and to ensure the river or stream will be save to fish on any given day.

- As a user, I would like to select different streams in my location.

- As a user, I would like to understand where the information is coming from so I know whether I can trust it in an About page.

- As a user, I would like the app to be easy to use and the data easy to understand upon first using the app.

### Post-MVP

- As a user, I would like to see an interactive map with site pins. When pin is clicked, site streamflow data is revealed.

- As a user, I would like to "star" or "favorite" my commonly fished locations for easy access.

- As a user, I would like a up-to-date fishing report for each location.

## Wireframe:

![](/images/streamflow-react-app-wireframe.png)

## App API:

API Link: https://waterservices.usgs.gov/rest/IV-Service.html#Output

API JSON Example: https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03424860&parameterCd=00060

## Component Hierarchy:

- App.js (state)
  - Input.js (props)
  - Results.js (props)
- About.js

## Unsolved Problems:

- None at this time.
