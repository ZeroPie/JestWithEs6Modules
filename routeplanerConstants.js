export const ROUTEPLANER = {
    GOOGLE_MAP: {
        TRAVEL_MODES: {
            TRANSIT: 'TRANSIT',
            DRIVING: 'DRIVING',
            WALKING: 'WALKING',
            BICYCLING: 'BICYCLING'    
        },
        TIME_OPTIONS: {
            DEPARTURE_TIME: 'departureTime',
            ARRIVAL_TIME: 'arrivalTime',
            NOW: 'now'
        },
    },
    DEUTSCHE_BAHN_FORM: {
        DEUTSCHE_BAHN_ARRIVE: 'arrive',
        DEUTSCHE_BAHN_DEPART: 'depart'
    },
    GOOGLE_DIRECTIONS_RESPONSE_STATUS: {
        OK: 'OK',
        ZERO_RESULTS: 'ZERO_RESULTS',
        ZERO_RESULTS_TEXT: 'Die Route mit öffentlichen Verkehrsmitteln konnte nicht berechnet werden.',
        MAX_ROUTE_LENGTH_EXCEEDED: 'MAX_WAYPOINTS_EXCEEDED',
        MAX_ROUTE_LENGTH_EXCEEDED_TEXT: 'Die Route kann nicht berechnet werden.',
        DEFAULT_TEXT: 'Die Route kann nicht berechnet werden.'
    },
    TIME_SELECT_FIELD: {
        NOW: 'Ab Sofort',
        DEPARTURE: 'Abfahrt ab',
        ARRIVAL: 'Ankunft an'
    }
};