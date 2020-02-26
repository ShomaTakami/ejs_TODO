//es6

exports.getDate = function() {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "numeric"
  };

  return today.toLocaleDateString("en-US", options);
};
