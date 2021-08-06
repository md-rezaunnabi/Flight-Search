// #region Request Models
export interface IFlightSearchRequest {
  DepartureAirportCode: string;
  ArrivalAirportCode: string;
  DepartureDate: Date;
  ArrivalDate?: Date;
}
// #endregion
