import axios from "axios";

function baseApi(page: number) {
  return axios.get(
    `https://digi-api.com/api/v1/digimon?pageSize=100&page=${page}`
  );
}

function createDigiInfosInstance(id: string) {
  return axios.get(`https://digi-api.com/api/v1/digimon/${id}`);
}

function getDigiByName(name: string) {
  return axios.get(`https://digi-api.com/api/v1/digimon/${name}`);
}

export default { baseApi, createDigiInfosInstance, getDigiByName };
