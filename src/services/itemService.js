const axios = require("axios");

const BASE_SERVICE_URL = "https://api.mercadolibre.com";

const getItemsByWord = async (query) => {
  const { data } = await axios.get(
    `${BASE_SERVICE_URL}/sites/MLA/search?q=${query}`
  );
  return data;
};

const getItemById = async (id) => {
  const { data } = await axios.get(`${BASE_SERVICE_URL}/items/${id}`);
  return data;
};

const getItemDescriptionById = async (id) => {
  const { data } = await axios.get(
    `${BASE_SERVICE_URL}/items/${id}/description`
  );
  return data;
};

module.exports = {
  getItemsByWord,
  getItemById,
  getItemDescriptionById,
};
