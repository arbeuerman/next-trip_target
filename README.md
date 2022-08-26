# Next Trip Case Study

## Description

> This case study attempts to emulate some portions of the NexTrip API, used in Minneapolis for their bus and train routes. The documentation and examples for using the API can be found [here](https://svc.metrotransit.org/swagger/index.html).

The following routes were used from the API:

- **to load routes:** `GET '/nextripv2/routes'`
- **to load directions:** `GET '/nextripv2/directions/{route_id}`
- **to load stops:** `GET '/nextripv2/stops/{route_id}/{direction_id}`

## Building and running app

### To run the app

1. Navigate to folder _next-trip_target_
2. Run `npm ci` in terminal to ensure packages up-to-date
3. Enter command `npm start` in terminal to spin up localhost

## To execute tests

1. Open a new terminal window
2. Run `npm test` to run tests
3. Might have to enter `a` to run all tests

## Assumptions

- User would want stops displayed when route is changed (they are not cleared right now when route changes, but they are updated).
- API calls might be made in more than one file, so put all calls into one api file for ease of use.
- Each file responsible for own needed inputs i.e. route_id, direction_id, instead of having a parent file that managed those parameters, passed route_id down as props twice. Might want to consider having a parent component hold that as state if there were multiple children that needed it.
- Axios not needed for now, instead just using the built-in fetch for calling the API. If calls got more complex or if we wanted to not mock the global fetch function for testing, we might want to switch to using axios.
- Nesting of components is: App --> RouteSelector --> DirectionSelector --> Stops but if we wanted to display stops via another path (for example, on the [nexTrip site](https://www.metrotransit.org/nextrip/) you can also search by stop number) we might want to nest in a different way.
