import { createSlice } from "@reduxjs/toolkit";

export const itemDataSlice = createSlice({
  name: "itemdata",
  initialState: {
    data: [],
    details: []
  },
  reducers: {
    addItem: (state, action) => {
      state.data.push(action.payload)
    },
    deleteItem: (state, action) => {
      const deleteId = action.payload;
      state.data = state.data.filter((item)=>{
        return item.id !== deleteId
      })
      state.details = state.data;
    },
    itemSelect: (state, action) => {
      const filterData = state.data?.filter((item) => item.id === action.payload);
      if (filterData) {
        state.details = filterData;
        filterData.map((item)=>{
          state.details.id = item.id;
          state.details.title = item.title;
          state.details.description = item.description;
        })
      } else {
        state.details = [];
      }
    }
  }
})

export const { addItem, deleteItem, itemSelect } = itemDataSlice.actions;
export default itemDataSlice.reducer;