'use strict';
import {createRequestObject} from './directionsRequest';

it('Returns a Request', () => {
  const request = createRequestObject(mapValues);
  console.log(request);
});



const mapValues = {
  originPlaceId: 'oid',
  destinationPlaceId: 'did',
  provideRouteAlternatives: '',
  travelMode: 'TRANSIT',
  time: '100',
  date: '10-12-2018',
  timeOptions: 'departureTime'
}