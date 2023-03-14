import { createSelector } from "@reduxjs/toolkit";

export const selectUser = state => state.auth.currentUser;

export const selectJobList = state => state.jobList;

export const selectLocationWorking = state => state.filter.locationWorking;

export const selectSearch = state => state.filter.search;

export const selectJobListByFilter = createSelector(
  selectJobList,
  selectSearch,
  (jobList, search) => {
    return jobList.filter((job) => {
      return job.name.includes(search);
    })
  }
)
