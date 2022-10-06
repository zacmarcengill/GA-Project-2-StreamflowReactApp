# Streamflow React App

## App Description:

A React webapp that retrieves up-to-date streamflow data via API from USGS (U.S. Geological Survey) for the purpose of planning safer fishing trips and other stream related activities.

![](/images/Streamflow-React-App.png)

## Technologies Used:

- CSS
- HTML
- Javascript
- React
- USGS API (U.S. Geological Survey)
- Mapbox GL JS

## Installation Instructions:

Find the "About" section on this repo and click the link. This will take you to the deployed site for this app. No installation required.

When website loads, select desired locations, then click "Submit". Watch the streamflow data change with each location selected and submitted. View up-to-date streamflow data for the selected location.

## Contribution Guidelines:

To contribute to this application, fork, clone and create a branch called "dev/your-initials" inside your forked and cloned repo. Submit your contribution via a pull request in Github on the main branch to have your code considered. To identify bugs and propose improvements, sumbit an Issue ticket via this repo.

## User Stories:

### Project MVP

- As a user, I need to receive up-to-date and realtime streamflow data to prepare for my fishing trip and to ensure the river or stream will be save to fish on any given day.

- As a user, I would like to select different streams in my location.

- As a user, I would like to understand where the information is coming from so I know whether I can trust it in an About page.

- As a user, I would like the app to be easy to use and the data easy to understand upon first using the app.

### Post-MVP

- As a user, I would like to see an interactive map with site pins. When pin is clicked, site streamflow data is revealed.

- As a user, I would like to "star" or "favorite" my commonly fished locations for easy access.

- As a user, I would like a up-to-date fishing report for each location.

- As a user, I would like to get an alert on my phone (alert from app or alert from created calender event) when the streamflow and river generation levels change.

## Wireframe:

![](/images/streamflow-react-app-wireframe.png)

## App API:

USGS API Link: https://waterservices.usgs.gov/rest/IV-Service.html#Output

USGS API JSON Example: https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03424860&parameterCd=00060

Mapbox GL JS API: https://docs.mapbox.com/mapbox-gl-js/api/

## Component Hierarchy:

- App.js (state)
  - Map.js (state)
  - SiteSelect.js (props)
  - About.js (props)

### MVP Goals:

- React App scalable on iPhone, iPad, and Desktop.

- Utilize API to pull in streamflow data.

- Drop Down to select which stream you would like data from.

- About footer section that describes what the app is, what the capabilities are, and where the data is pulled from.

### Stretch Goals

- Map that shows streamflow site on map.

- Make map interactive to show streamflow sites pinned. When pin is selected, data will be displayed in popup container.

- Function to "star" or "favorite" locations for fast data access.

- Up-to-date fishing report added to each streamflow site.

- Alerts when the streamflow data changes.

## Upcoming Features:

- Will add site locations as interactive map markers that display updated streamflow data, via popup box, when clicked on.

- Will add additional details from webhook to gain access to dam generation schedules, fishing reports, and any other information that will be helpful for plan a successful and safe fishing trip or river activity.

## Unsolved Problems:

- None at this time.
