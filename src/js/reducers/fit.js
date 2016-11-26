/**
 * Created by razamd on 10/22/2016.
 */
import { FIT_FETCH_PROGRESS, FIT_FETCH_SUCCESS, FIT_FETCH_FAIL, TOGGLE_FIT_ADD_FORM, FIT_ADD_SUCCESS, FIT_ADD_FAIL, FIT_REMOVE_SUCCESS, TOGGLE_FIT_EDIT_FORM, FIT_EDIT_SUCCESS, FIT_EDIT_FAIL } from "../actions";

const initialState = {
  fetching: false,
  adding: false,
  editing: false,
  fits:[]
};

const handlers = {
  [FIT_FETCH_PROGRESS]: (_, action) => ({fetching: true}),
  [FIT_FETCH_SUCCESS]: (_, action) => ({fetching: false, fits: action.payload.fits}),
  [FIT_FETCH_FAIL]: (_, action) => ({fetching: false}),
  [TOGGLE_FIT_ADD_FORM]: (_, action) => ({adding: action.payload.adding}),
  [FIT_ADD_SUCCESS]: (state, action) => {
    let fits = state.fits;
    console.log(fits);
    fits.push(action.payload.fit);
    console.log(fits);
    return ({adding: false, fits: fits});
  },
  [FIT_ADD_FAIL]: (_, action) => ({adding: false}),
  [TOGGLE_FIT_EDIT_FORM]: (_, action) => ({editing: action.payload.editing}),
  [FIT_EDIT_SUCCESS]: (_, action) => {
    let fits = _.fits;
    let i = fits.findIndex(e=> e.href == action.payload.fit.href);
    fits[i] = action.payload.fit;
    return ({editing: false, fits: fits});
  },
  [FIT_EDIT_FAIL]: (_, action) => ({editing: false}),
  [FIT_REMOVE_SUCCESS]: (_, action) => {
    let fits = _.fits.filter((fit)=>{
      return fit.href != action.payload.href;
    });
    return ({fits: fits});
  }
};

export default function fit (state = initialState, action) {
  let handler = handlers[action.type];
  if( !handler ) return state;
  return { ...state, ...handlers[action.type](state, action) };
}
//
// export default function nav ( state = initialState, action) {
//   switch ( action.type) {
//     case FIT_FETCH_PROGRESS : {
//       state = {...state, fetching: true};
//       break;
//     }
//     case FIT_FETCH_SUCCESS : {
//       state = {...state, fetching: false, fits: action.payload.fits};
//       break;
//     }
//     case FIT_FETCH_FAIL : {
//       state = {...state, fetching: false};
//       break;
//     }
//     case TOGGLE_FIT_ADD_FORM : {
//       state = {...state, adding: action.payload.adding};
//       break;
//     }
//     case FIT_ADD_SUCCESS : {
//       let fits = state.fits;
//       fits.push(action.payload.fit);
//       state = {...state, adding: false, fits: fits};
//       break;
//     }
//     case FIT_ADD_FAIL : {
//       state = {...state, adding: false};
//       break;
//     }
//     case TOGGLE_FIT_EDIT_FORM : {
//       state = {...state, editing: action.payload.editing};
//       break;
//     }
//     case FIT_EDIT_SUCCESS : {
//       let fits = state.fits;
//       let i = fits.findIndex(e=> e.href == action.payload.fit.href);
//       console.log('index = ' + i);
//       fits[i] = action.payload.fit;
//       state = {...state, editing: false, fits: fits};
//       break;
//     }
//     case FIT_EDIT_FAIL : {
//       state = {...state, editing: false};
//       break;
//     }
//     case FIT_REMOVE_SUCCESS : {
//       let fits = state.fits.filter((fit)=>{
//         return fit.href != action.payload.href;
//       });
//       state = {...state, adding: false, fits: fits};
//       break;
//     }
//   }
//   return state;
// }
