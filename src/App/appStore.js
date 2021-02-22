// External Dependencies
import { configureStore } from '@reduxjs/toolkit';

// Internal Dependencies
import appReducer from './appReducer';

const appStore = configureStore({ reducer: appReducer });
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./appReducer', () => appStore.replaceReducer(appReducer));
}

export default appStore;
