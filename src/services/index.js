import { globalAPI, localAPI } from "config/api";

// GLOBAL COVID19 DATA

export const getAllStats = new Promise((resolve, reject) => {
  return globalAPI
    .get("/all")
    .then((res) => resolve(res.data))
    .catch((err) => reject(err.message || "Something went wrong!"));
});

export const getAllCountriesStats = new Promise((resolve, reject) => {
  return globalAPI
    .get("/countries")
    .then((res) => resolve(res.data))
    .catch((err) => reject(err.message || "Something went wrong!"));
});

export const getCountryStats = (country) => {
  return new Promise((resolve, reject) => {
    return globalAPI
      .get(`/countries/${country}`)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err.message || "Something went wrong!"));
  });
};

// LOCAL COVID19 DATA

export const getLocalHospitalStats = new Promise((resolve, reject) => {
  return localAPI
    .get()
    .then((res) => resolve(res.data))
    .catch((err) => reject(err.message || "Something went wrong!"));
});
