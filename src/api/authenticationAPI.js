// Internal Dependencies
import fetchRequest from '../utilities/apiUtils';

export const fetchUserToken = async (userToSignIn) => {
  const fetchedUserToken = await fetchRequest('/login', {
    method: 'POST',
    body: JSON.stringify(userToSignIn),
  });
  return fetchedUserToken;
};

export const fetchUser = async () => {
  const fetchedUser = await fetchRequest('/profile', {
    method: 'POST',
  });
  return fetchedUser;
};
