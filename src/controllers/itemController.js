const itemService = require("../services/itemService");
const itemTransformation = require("../transformations/itemTransform");
const apiTransformation = require("../transformations/apiSignatureTransform");

const getItemsByWord = async (req, res) => {
  try {
    const itemsByWord = await itemService.getItemsByWord(req.query.q);
    const data = itemTransformation.itemsByWordTransformation(itemsByWord);

    res.send({
      status: "OK",
      data: apiTransformation.addApiSignature(data),
    });
  } catch (error) {
    res.status(500).send({
      status: "ERROR",
      message: "Internal server error",
    });
  }
};

const getItemById = async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await itemService.getItemById(itemId);
    const itemDescription = await itemService.getItemDescriptionById(itemId);
    const data = itemTransformation.itemsByIdTransformation(
      item,
      itemDescription
    );
    res.send({ status: "OK", data: apiTransformation.addApiSignature(data) });
  } catch (error) {
    res.status(500).send({
      status: "ERROR",
      message: "Internal server error",
    });
  }
};

module.exports = {
  getItemsByWord,
  getItemById,
};
