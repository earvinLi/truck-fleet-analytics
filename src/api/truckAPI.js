// Internal Dependencies
import fetchRequest from '../utilities/apiUtils';

export const fetchTruckDataForCompany = async (companyId) => {
  const urlToFetch = `/truck?companyId=${companyId}`;
  const fetchedDriverTelemetryData = await fetchRequest(urlToFetch, {
    method: 'GET',
  });
  return fetchedDriverTelemetryData;
};

export const fetchTruckDataForDriver = () => {};
