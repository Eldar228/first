import axios from 'axios';
import { REQUEST_ALIVE_PLAYERS, RECEIVE_ALIVE_PLAYERS } from '../actions/types';

const initialState = {};

export function requestAlivePlayers(players) {
  return { type: REQUEST_ALIVE_PLAYERS, players };
}

export function receiveAlivePlayers(players) {
  return { type: RECEIVE_ALIVE_PLAYERS, players };
}

export function getPlayers(players) {
  return function(dispatch) {
    dispatch(requestAlivePlayers(players));
    return axios
      .get(`${process.env.REACT_APP_SERVER}/api/users`)
      .then(res => dispatch(receiveAlivePlayers(res.data)));
  };
}
