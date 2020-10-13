import { buyer } from '../actions/index.js';

const initialState = {
  organizationName: '',
  organizationWebsite: '',
  contactName: '',
  soapBarNum: '',
  contactPhone: '',
  contactEmail: '',
  address: '',
  country: '',
  beneficiariesNum: '',
  hygieneSituation: '',
  hygieneInitiative: '',
  comments: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case buyer.POST_BUYER_ORDERS:
      return {
        ...state,
        organizationName: action.payload.organizationName,
        organizationWebsite: action.payload.organizationWebsite,
        contactName: action.payload.contactName,
        soapBarNum: action.payload.soapBarNum,
        contactPhone: action.payload.contactPhone,
        contactEmail: action.payload.contactEmail,
        address: action.payload.address,
        country: action.payload.country,
        beneficiariesNum: action.payload.beneficiariesNum,
        hygieneSituation: action.payload.hygieneSituation,
        hygieneInitiative: action.payload.hygieneInitiative,
        comments: action.payload.comments,
      };
    default:
      return state;
  }
};
