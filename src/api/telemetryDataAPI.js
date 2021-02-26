// Internal Dependencies
import fetchRequest from '../utilities/apiUtils';

export const fetchTelemetryDataForDriver = async (driverId) => {
  const urlToFetch = `/telemetryData?driverId=${driverId}`;
  const fetchedDriverTelemetryData = await fetchRequest(urlToFetch, {
    method: 'GET',
  });
  return fetchedDriverTelemetryData;
};

export const fetchTelemetryDataForCompany = () => {};
