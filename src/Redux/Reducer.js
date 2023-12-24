import { combineReducers } from '@reduxjs/toolkit'
import LoginSlice from './Slice';

const rootReducer = combineReducers({
      Login:LoginSlice.LoginReducer,
      PrebuildHome:LoginSlice.PrebuildHome,
      QuoteData:LoginSlice.GetQuoteDataDetails
})

export default rootReducer;