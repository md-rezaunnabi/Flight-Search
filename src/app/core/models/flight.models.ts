//#region Request Models
export interface IFlightSearchRequest {
  DepartureAirportCode: string;
  ArrivalAirportCode: string;
  DepartureDate: Date;
  ArrivalDate?: Date;
}
//#endregion

//#region Response Models
export interface IFlightInfo {
  Id: string;
  AirlineLogoAddress: string;
  AirlineName: string;
  InboundFlightsDuration: string;
  ItineraryId: string;
  OutboundFlightsDuration: string;
  Stops: number;
  TotalAmount: number;
}
//#endregion
