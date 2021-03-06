// Fetch Helper
const apiBaseURL = process.env.REACT_APP_API_BASE_URL;

const handleFetchError = (err) => {
  console.warn(err);
  // return new Response(JSON.stringify({
  //   code: 400,
  //   message: 'Bad Request',
  // }));
};

const fetchRequest = async (url, options = {}) => {
  const userToken = window.localStorage.getItem('userToken');

  const optionsToUse = options;
  optionsToUse.headers = optionsToUse.headers || {};
  optionsToUse.headers.Authorization = `Bearer ${userToken || ''}`;
  optionsToUse.headers['Content-Type'] = 'application/json';

  const fetched = await (await (fetch(`${apiBaseURL}${url}`, optionsToUse))
    .catch(handleFetchError)).json();
  return fetched;
};

export default fetchRequest;
