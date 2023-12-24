import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { url } from "../Data/NavbarData";
import axios from "axios";

//Action    
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`);
    return res?.json(); 
});

export const PrebuildData = createAsyncThunk("PrebuildData", async()=>{
    const res = await fetch(url+'adminPanel/PreBuild_All/1')
    return res?.json()
})

  

let loading = false
const LoginDataSlice=createSlice({
    name:"LoginData",
    initialState:{
        UserData:[],
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending, (state, actions)=>{
            loading=true;
        });
        builder.addCase(fetchTodos.fulfilled, (state,actions)=>{
            loading=false;
            state.UserData=actions.payload.data
        });
        builder.addCase(fetchTodos.rejected, (state, actions)=>{
            loading=false;
            state.error = actions.payload
        })
    }
})

const GetQuoteData = createSlice({
    name:"QuoteData",
    initialState:{
        ProductType:"Gaming/Streaming",
        pcviewindex:0,
        error:""
    },
    reducers:{
         setProductType:(state, actions)=>{
            state.ProductType = actions.payload
         },
         setPcviewindex:(state, actions)=>{
            state.pcviewindex = actions.payload
         }
    }
})

const PrebuildHomeSlice = createSlice({
    name:"PrebuildHomeData",
    initialState:{
        PrebuildData:[],
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(PrebuildData.pending, (state, actions)=>{
            loading = true
        })
        builder.addCase(PrebuildData.fulfilled, (state, actions)=>{
            state.PrebuildData=actions.payload
        })
        builder.addCase(PrebuildData.rejected, (state, actions)=>{
            state.error = actions.payload
        })
    }
})

export const {
    setProductType,
    setPcviewindex
}=GetQuoteData.actions

export default{
    LoginReducer:LoginDataSlice.reducer,
    PrebuildHome:PrebuildHomeSlice.reducer,
    GetQuoteDataDetails:GetQuoteData.reducer
}