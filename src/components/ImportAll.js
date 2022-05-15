const importAll = reqItems => {
  let images = [];
  for (let ind in reqItems.keys()) {
    let tempImg = reqItems(reqItems.keys()[ind]);
    if (!images.includes(tempImg)) images.push(tempImg);
  }
  return images;
};
export default importAll;
