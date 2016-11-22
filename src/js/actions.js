//Nav
export const NAV_ACTIVATE = 'NAV_ACTIVATE';

//User
export const AUTH_PROGRESS = 'AUTH_PROGRESS';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

export function navActivate (active) {
  return { type: NAV_ACTIVATE, active: active};
}
