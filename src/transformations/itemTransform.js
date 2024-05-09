const itemsByWordTransformation = (itemsByWord) => {
  return {
    categories: itemsByWord.filters[0]?.values[0].path_from_root.map(
      (path) => path.name
    ),
    total: itemsByWord.paging.total,
    items: itemsByWord.results.slice(0, 4).map((item) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    })),
  };
};

const itemsByIdTransformation = (item, itemDescription) => {
  return {
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0,
      },
      picture: item.pictures[0].url,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      description: itemDescription.plain_text,
    },
  };
};

module.exports = {
  itemsByWordTransformation,
  itemsByIdTransformation,
};
