const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/ghana-temple.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/london-temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/mesa-temple.jpg"
  },
  {
    templeName: "Samoa",
    location: "Apia, Samoa",
    dedicated: "1983, June, 5",
    area: 8574,
    imageUrl: "images/samoa-temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/thailand-temple.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/hamilton-temple.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/san-diego-temple.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "images/salt-lake-temple.jpg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "images/hawaii-temple.jpg"
  },
  {
    templeName: "Gilbert Arizona",
    location: "Gilbert, Arizona",
    dedicated: "2014, March, 2",
    area: 85126,
    imageUrl: "images/mesa-temple.jpg"
  }
];

const gallery = document.querySelector(".gallery");
const pageTitle = document.querySelector("#page-title");

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

function displayTemples(filteredTemples) {
  gallery.innerHTML = "";

  filteredTemples.forEach((temple) => {
    const card = document.createElement("article");
    card.classList.add("temple-card");

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading="lazy">
      <div class="temple-info">
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </div>
    `;

    gallery.appendChild(card);
  });
}

const filters = {
  home: {
    label: "Home",
    getItems: () => temples,
  },
  old: {
    label: "Old",
    getItems: () => temples.filter((temple) => Number(temple.dedicated.split(",")[0]) < 1900),
  },
  new: {
    label: "New",
    getItems: () => temples.filter((temple) => Number(temple.dedicated.split(",")[0]) > 2000),
  },
  large: {
    label: "Large",
    getItems: () => temples.filter((temple) => temple.area > 90000),
  },
  small: {
    label: "Small",
    getItems: () => temples.filter((temple) => temple.area < 10000),
  }
};

function updateFilter(filterName) {
  const selectedFilter = filters[filterName];
  if (!selectedFilter) return;

  pageTitle.textContent = selectedFilter.label;
  displayTemples(selectedFilter.getItems());
}

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    const filterName = link.getAttribute("href").replace("#", "");
    updateFilter(filterName);
  });
});

navLinks[0].classList.add("active");
updateFilter("home");
