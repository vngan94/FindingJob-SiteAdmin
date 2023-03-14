import { createSlice, current } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    locationWorking: [
      { id: 1, label: "Hồ Chí Minh", ariaLabel: "hcm", value: "Hồ Chí Minh", checked: false },
      { id: 2, label: "Hà Nội", ariaLabel: "hn", value: "Hà Nội", checked: false },
      { id: 3, label: "Đà Nẵng", ariaLabel: "dn", value: "Đà Nẵng", checked: false }
    ]
  },
  reducers: {
    searchFilter(state, action) {
      state.search = action.payload;
    },
    locationWorkingFilterChange(state, action) {
      for (let index = 0; index < state.locationWorking.length; index++) {
        const element = state.locationWorking[index];
        if (action.payload.id === element.id) {
          element.checked = action.payload.checked;
          return ;
        }
      }
    }
  }
})

export const {
  searchFilter,
  locationWorkingFilterChange } = filterSlice.actions;

export default filterSlice.reducer;
