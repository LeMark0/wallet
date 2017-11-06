import {createAction} from 'redux-actions';
import api from 'api/api.js';
import actionTypes from '../constants/ActionTypes';

export const getLatestRatesRequest = createAction(actionTypes.Currency.async.getLatestRatesRequest);
export const getLatestRatesSuccess = createAction(actionTypes.Currency.async.getLatestRatesSuccess);
export const getLatestRatesFail = createAction(actionTypes.Currency.async.getLatestRatesFail);


export const getLatestRates = (params) => (dispatch) => {
  dispatch(getLatestRatesRequest());

  api('currency.latest', params)
    .then(response => {
      dispatch(getLatestRatesSuccess(JSON.parse(response.responseData)));

    })
    .catch(error => {
      dispatch(getLatestRatesFail(error));

    });
};
