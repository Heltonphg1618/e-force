import { createStore } from 'redux';

import reduces from './ducks';

const store = createStore(reduces);

export default store;
