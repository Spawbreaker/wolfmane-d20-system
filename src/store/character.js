import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  race: null,
  rank: null,
  armor: null,
  shield: null,
  str: 0,
  dex: 0,
  con: 0,
  int: 0,
  wis: 0,
  cha: 0,
  bonus: 0,
  skillPoints: 0,
};

/* eslint-disable no-param-reassign */
const character = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setRace: (state, { payload }) => {
      state.race = payload;
    },
    setRank: (state, { payload }) => {
      state.rank = payload;
    },
    setArmor: (state, { payload }) => {
      state.armor = payload;
    },
    setShield: (state, { payload }) => {
      state.shield = payload;
    },
  },
});
/* eslint-enable no-param-reassign */

export const { setRace, setRank, setArmor, setShield } = character.actions;

export default character.reducer;
