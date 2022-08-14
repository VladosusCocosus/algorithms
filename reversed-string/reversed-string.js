const reverse = string =>
  string
      .split("")
      .reverse()
      .join("");


const _reverse = string => {
    let result = "";
    for (let character of string) result = character + result;
    return result;
};

const __reverse = string =>
    string.split("").reduce((result, character) => character + result);

