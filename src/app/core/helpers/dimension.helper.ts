export const appHeaderHeight = 55;

export function getFlightInfoListHeight(): number {
  let flightInfoListHeight = 500;
  const flightSearchForm = document.getElementById('flightSearchFormContainer');
  if (window?.innerHeight && flightSearchForm?.offsetHeight) {
    flightInfoListHeight = window.innerHeight - flightSearchForm.offsetHeight - appHeaderHeight;
  }
  return flightInfoListHeight;
}
