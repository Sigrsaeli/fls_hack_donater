const ENDPOINT = "http://9ba27bbd.eu.ngrok.io";

export const API = {
  PROJECTS: `${ENDPOINT}/project/list/`,
  EXACT: `${ENDPOINT}/project/exact/`,
  TRANSACTION: `${ENDPOINT}/project/transaction/`,
  LOG_IN: `${ENDPOINT}/rest-auth/login/`,
  LOG_OUT: `${ENDPOINT}/rest-auth/logout/`
};
