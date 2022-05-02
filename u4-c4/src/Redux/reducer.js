import { FILTER_DATA, GET_DATA_FAIL, GET_DATA_REQ, GET_DATA_SUCC, SORT_DATA_HL, SORT_DATA_LH } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch(type){
    case GET_DATA_REQ: {
      return {...state, data:[], isLoading: true, isError: false, filterData:[], products: []};
    }
    case GET_DATA_SUCC: {
      return {...state, data:payload, isLoading: false, isError:false, filterData: [], products: []}
    } 
    case GET_DATA_FAIL: {
      return {...state, data:[], isLoading: true, isError: true, filterData: [], products: []}
    }
    case SORT_DATA_LH: {
      return {...state, data:payload, isLoading: false, isError:false, filterData: [], products: payload}
    } 
    case SORT_DATA_HL: {
      return {...state, data:payload, isLoading: false, isError:false, filterData: [], products: payload}
    } 
    case FILTER_DATA: {
      return {...state, data:[],isLoading: false, isError: false, filterData: payload, products: []}
    }
    default: 
        return state;
  }
};
export { reducer };
