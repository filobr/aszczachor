const importAll = require =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const images = importAll(
  require.context("assets/mainPage", false, /\.(png|jpe?g|svg)$/)
);

console.log(images);