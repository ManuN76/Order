window.function = function (tableau, namefind) {
  let find = namefind.value ?? "";
  let tab = tableau.value ?? "";

  let x = tab.split(", ");

  x = x.sort();

  let nb = x.indexOf(find);

  if (nb == -1) {
    return;
  }

  return nb;
};
