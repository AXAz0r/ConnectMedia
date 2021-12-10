import * as types from "../types/ChartTypes";
// import Auth from '../../utils/Auth';

const INITIAL_STATE = {
  total: {
    error: false,
    errorData: null,
    data: null,
    loading: false,
  },
  specSiteChart: {
    error: false,
    errorData: null,
    data: null,
    loading: false,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_TOTAL_CHART_REQUEST:
      return {
        ...state,
        total: {
          error: false,
          errorData: null,
          data: null,
          loading: true,
        },
      };
    case types.GET_TOTAL_CHART_ERROR:
      return {
        ...state,
        total: {
          error: true,
          errorData: action.payload,
          data: null,
          loading: false,
        },
      };
    case types.GET_TOTAL_CHART_RECEIVE:
      return {
        ...state,
        total: {
          error: false,
          errorData: null,
          data: action.payload,
          loading: false,
        },
      };

    //specSiteChart

    case types.GET_SPEC_SITE_CHART_REQUEST:
      return {
        ...state,
        specSiteChart: {
          error: false,
          errorData: null,
          data: null,
          loading: true,
        },
      };
    case types.GET_SPEC_SITE_CHART_ERROR:
      return {
        ...state,
        specSiteChart: {
          error: true,
          errorData: action.payload,
          data: null,
          loading: false,
        },
      };
    case types.GET_SPEC_SITE_CHART_RECEIVE:
      return {
        ...state,
        specSiteChart: {
          error: false,
          errorData: null,
          data: action.payload,
          loading: false,
        },
      };

    default:
      return state;
  }
};
