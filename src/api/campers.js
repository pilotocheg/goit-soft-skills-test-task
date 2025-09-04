import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const makeFetch = async (url, { errorTitle, ...options }) => {
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(`${errorTitle}:`, error);
    throw error;
  }
};

export const fetchCampers = (params = {}) =>
  makeFetch("/campers", {
    errorTitle: "Error fetching campers",
    params,
  });

export const fetchCamperDetails = (camperId) =>
  makeFetch(`/campers/${camperId}`, {
    errorTitle: "Error fetching camper details",
  });
