import  { configureStore } from '@reduxjs/toolkit'
import serviceRepair from './repairSlice'

const store = configureStore({
    reducer:{
        sRepair:serviceRepair
    }
})



export default store