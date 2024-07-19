interface AirportData {
  iata: string;
  icao: string;
  time: string;
  city_code: string;
  country_code: string;
  airport: string;
  latitude: string;
  longitude: string;
  elevation_ft: string;
  region_name: string;
  city: string;
  county: string;
  state: string;
  type: string;
  continent: string;
  iso_region: string;
  scheduled_service: string;
  wikipedia_link: string;
  home: string;
  woeid: string;
  phone: string;
  email: string;
  runway_length: string;
  flightradar24_url: string;
  radarbox_url: string;
  flightaware_url: string;
}

export function getAirportByIata(iataCode: string): AirportData;
export function getAirportByIcao(icaoCode: string): AirportData;
export function getAirportByCityCode(cityCode: string): AirportData[];
export function getAirportByCountryCode(countryCode: string): AirportData[];
export function getAirportByContinent(continentCode: string): AirportData[];
