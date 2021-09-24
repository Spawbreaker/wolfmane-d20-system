import { configureStore } from '@reduxjs/toolkit';
import character from './character';

export default configureStore({
  reducer: {
    character,
  },
});
