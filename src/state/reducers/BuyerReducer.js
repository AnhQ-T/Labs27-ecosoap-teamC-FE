import { buyer } from '../actions/index.js';

const initialState = {
  orders_list: [],
  current_order: {
    address: '',
    beneficiariesNum: '',
    buyerId: '',
    comments: '',
    contactEmail: '',
    contactName: '',
    contactPhone: '',
    country: '',
    created_at: '',
    hygieneInitiative: '',
    hygieneSituation: '',
    id: '',
    organizationName: '',
    organizationWebsite: '',
    soapBarNum: '',
    updated_at: '',
  },
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case buyer.GET_BUYER_ORDERS:
      return {
        orders_list: action.payload,
        isFetching: true,
      };
    case buyer.GET_BUYER_ORDER_DETAILS:
      return {
        current_order: action.payload,
        isFetching: true,
      };
    default:
      return state;
  }
};
