const addApiSignature = (data) => {
  data.author = {
    name: "Leonardo",
    lastname: "Garzón",
  };
  return data;
};

module.exports = {
  addApiSignature,
};
