import { ROUTEPLANER } from './routeplanerConstants'
const { ARRIVAL_TIME, DEPARTURE_TIME, TRANSIT, DRIVING } = ROUTEPLANER

export const createRequestObject  = mapParams => {
    console.log(mapParams);
    const { originPlaceId, destinationPlaceId, travelMode, time, date, timeOptions } = mapParams
    const dateWithTime = `${date} ${time}`
    const fdate = new Date(date);
    
    let request = {};
    if (!originPlaceId || !destinationPlaceId) {
        return request;
    }
    request.origin = { placeId: originPlaceId };
    request.destination = { placeId: destinationPlaceId };
    request.provideRouteAlternatives = true;
    request.travelMode = travelMode;

    if (isTransitWithArrival(timeOptions, travelMode)) {
        request.transitOptions = { arrivalTime: fdate };
    }

    if (isDrivingWithArrival(timeOptions, travelMode)) {
        request.drivingOptions = { departureTime: fdate };
    }

    if (isTransitWithDeparture(timeOptions, travelMode)) {
        request.transitOptions = { departureTime: fdate };
    }
    // Walking and Bicycling do not offer arrival nor departure Times
    return request;
}

const isTransitWithArrival = (timeOptions, travelMode) =>
    timeOptions === ARRIVAL_TIME && travelMode === TRANSIT

const isDrivingWithArrival = (timeOptions, travelMode) =>
    timeOptions === ARRIVAL_TIME && travelMode === DRIVING

const isTransitWithDeparture = (timeOptions, travelMode) =>
    timeOptions === DEPARTURE_TIME && travelMode === TRANSIT

