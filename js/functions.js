async function getData() {
  let category = categoryButton.value,
    q = searchButton.value,
    page = pagination.dataset.pageNumber,
    navbarAnchor = document.querySelector(`nav.navbar a[data-category-type="${category}"] `) ?? document.querySelector(`nav.navbar a[data-category-type="general"] `);

  let params = new URLSearchParams({
    country: "us",
    category: category,
    pageSize: "12",
    page: page,
    q: q,
    apiKey: "966f00710fb14ca6a4518e825e6b1fae",
  });

  let response = await fetch(`https://newsapi.org/v2/top-headlines?${params}`),
    data = await response.json();
  currentArticles = data.articles;
  localStorage.setItem("lastCategory", categoryButton.value);
  changeNavBarActive(navbarAnchor, false);
  preparePaginations(data.totalResults);
  showNews(data.articles);
  if (!mainPartLoaded) {
    makeMainPart(data);
    mainPartLoaded = true;
  }
  return data;
}

function showNews(data) {
  news.innerHTML = "";
  let view = document.querySelector("#News").dataset.view;
  data.forEach(function (item, index) {
    news.innerHTML += `
        <div style="animation-delay: ${index * 0.2}s;"  class="${view == "grid" ? "col-lg-4 col-xl-3 col-md-6" : "col-12"} animationCard">

            <div  class="card  h-100 ${view == "rows" ? "list" : ""}">

                ${
                  view == "rows"
                    ? `
                        <div class="row g-0 h-100">

                            <div class="col-md-4">
                                <div class="card-img  h-100">
                                    <img
                                        src="${item.urlToImage ?? ""}"
                                        alt="News"
                                        class="img-fluid"
                                        onerror="this.style.display='none';"
                                    >
                                </div>
                            </div>

                            <div class="col-md-8">
                                <div class="card-body  d-flex flex-column h-100">
                                    <h5  >${item.title}</h5>

                                    <p>${item.description ?? ""}</p>

                                    <a
                                        href="${item.url}"
                                        class="btn more mt-auto"
                                        target="_blank"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>

                        </div>
                    `
                    : `
                        <div class="card-img">
                            <img
                                src="${item.urlToImage ?? ""}"
                                alt="News"
                                class="img-fluid"
                                onerror="this.style.display='none';"
                            >
                        </div>

                        <div class="card-body  d-flex flex-column">
                            <h5  >${item.title}</h5>

                            <p>${item.description ?? ""}</p>

                            <a
                                href="${item.url}"
                                class="btn more mt-auto"
                                target="_blank"
                            >
                                Read More
                            </a>
                        </div>
                    `
                }

            </div>

        </div>
    `;
  });
}

function preparePaginations(totalPages) {
  let page = pagination.dataset.pageNumber;
  pagination.innerHTML = `
<li ${page != 1 ? 'onclick="pageDecrement();preventReload(event)"' : ""} class="page-item ${page == 1 ? "disabled" : ""}">
   <a class="page-link" href="#">Previous</a>
</li>`;

  let numberOfPages = Math.ceil(totalPages / 12);

  for (let i = 1; i <= numberOfPages; i++) {
    pagination.innerHTML += `

    <li data-number="${i}" onclick="changePagination(this);preventReload(event)" class="page-item ${page == i ? "active" : ""}">
            <a class="page-link" href="#">${i}</a>
          </li>
`;
  }
  pagination.innerHTML += `
<li ${page != numberOfPages ? 'onclick="pageIncrement();preventReload(event)"' : ""} class="page-item ${page == numberOfPages ? "disabled" : ""}">
<a class="page-link" href="#">Next</a>
</li>`;
}

function changePagination(that) {
  let currentNumber = that.dataset.number;
  ((pagination.dataset.pageNumber = currentNumber), (active = that.parentElement.querySelector(".active")));
  active.classList.remove("active");
  that.classList.add("active");
  getData();
}

function pageDecrement() {
  pagination.dataset.pageNumber--;
  getData();
}
function pageIncrement() {
  pagination.dataset.pageNumber++;
  getData();
}

function makeMainPart(data) {
  let random1 = Math.floor(Math.random() * data.articles.length);

  let category = ["general", "business", "entertainment", "health", "science", "sports", "technology"];
  let randomIndex = Math.floor(Math.random() * category.length);
  let randomIndex2 = Math.floor(Math.random() * category.length);
  let random2;
  do {
    random2 = Math.floor(Math.random() * data.articles.length);
  } while (random2 === random1);

  let random3;
  do {
    random3 = Math.floor(Math.random() * data.articles.length);
  } while (random3 === random1 || random3 === random2);

  let article1 = data.articles[random1];
  let article2 = data.articles[random2];
  let article3 = data.articles[random3];

  mainPart.innerHTML = `

 <div class="row g-3">

      <div class="col-md-8 col-12 part1">
        <div class="item  overflow-hidden">
          <div class="img">
          <img src="${article1.urlToImage ?? "./images/placeholder.png"}"
     onerror="this.src='./images/placeholder.png'"   class="img-fluid">
        </div>
        <div class="content">
            <span class="mainDesigne active text-white"><span class="text">Top News</span></span>
            <h2>${article1?.title}</h2>
            <p class="mb-0">${article1.description?.slice(0, 70)}...</p>
            <div class="icons">
              <div class="icon">
                <i class="fa-regular fa-clock me-2 mainColor"></i>
                <span>${getTimeAgo(article2.publishedAt) ?? "Sep 21,2026"}</span>
              </div>
              <div class="icon">
                <i class="fa-solid fa-users-line me-2 mainColor"></i>
                <span>${category[randomIndex]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-12 part2">

        <div class="item">
          <div class="box" style="background-image: url('${article2.urlToImage ?? ""}');" >
              <div class="content">
                <span class="mainDesigne active text-white"><span class="text">${capitalizeFirstLetter(category[randomIndex])}</span></span>
              <h2 class="mb-0 fw-bold">${article2.title?.slice(0.3)}...</h2>
              <div class="icon">
                <i class="fa-regular fa-clock me-2 mainColor"></i>
                <span>${getTimeAgo(article2.publishedAt) ?? "Sep 21,2026"}</span>
              </div>
              </div>
          </div>
          <div class="box the-one-to-hide" style="background-image: url('${article3.urlToImage ?? ""}');">
              <div class="content">
                <span class="mainDesigne active text-white"><span class="text">${capitalizeFirstLetter(category[randomIndex2])}</span></span>
              <h2 class="mb-0 fw-bold">${article3.title?.slice(0.3)}...</h2>
              <div class="icon">
                <i class="fa-regular fa-clock me-2 mainColor"></i>
                <span>${getTimeAgo(article2.publishedAt) ?? "Sep 21,2026"}</span>
              </div>
              </div>
          </div>
         

        </div>
      </div>

    </div>

`;
}

function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function changeNavBarActive(that, doTheEvent = true) {
  that.parentElement.parentElement.querySelector(".active").classList.remove("active");
  that.classList.add("active");
  let type = that.dataset.categoryType;
  categoryButton.value = type;
  localStorage.setItem("lastCategory", type);
  if (doTheEvent) {
    categoryButton.dispatchEvent(new Event("change"));
  }
}

function changeView(that, type) {
  that.parentElement.querySelector(".active").classList.remove("active");
  that.classList.add("active");
  document.querySelector("#News").dataset.view = type;
  showNews(currentArticles);
}

function preventReload(event) {
  event.preventDefault();

  let navbarHeight = document.querySelector("nav.navbar").offsetHeight + 20;
  let newsSection = document.querySelector("#SearchButtons");

  window.scrollTo({
    top: newsSection.offsetTop - navbarHeight,
    behavior: "smooth",
  });
}

function getTimeAgo(publishedAt) {
  let publishedTime = new Date(publishedAt);
  let now = new Date();

  let difference = Math.floor((now - publishedTime) / 1000);

  if (difference < 60) {
    return `${difference} seconds ago`;
  }

  let minutes = Math.floor(difference / 60);

  if (minutes < 60) {
    return `${minutes} minute${minutes == 1 ? "" : "s"} ago`;
  }

  let hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} hour${hours == 1 ? "" : "s"} ago`;
  }

  let days = Math.floor(hours / 24);

  return `${days} day${days == 1 ? "" : "s"} ago`;
}

function saveCategory() {
  localStorage.setItem("lastCategory", categoryButton.value);
}
