//Nav
export const NAV_ACTIVATE = 'NAV_ACTIVATE';

//User
export const AUTH_PROGRESS = 'AUTH_PROGRESS';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

export const FIT_FETCH = 'FIT_FETCH';
export const FIT_PROGRESS = 'FIT_PROGRESS';
export const FIT_SUCCESS = 'FIT_SUCCESS';
export const FIT_FAIL = 'FIT_FAIL';

export function navActivate (active) {
  return { type: NAV_ACTIVATE, active: active};
}
