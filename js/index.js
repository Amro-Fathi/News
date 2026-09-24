let pagination = document.querySelector("#pagination"),
  news = document.querySelector("#newsContent"),
  categoryButton = document.querySelector("#category"),
  searchButton = document.querySelector("#search"),
  mainPart = document.querySelector("#Main .container"),
  mainPartLoaded = false,
  currentArticles = [];

getData();
