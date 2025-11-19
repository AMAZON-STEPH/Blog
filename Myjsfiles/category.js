import { Nav, date, exist, search } from "../Myjsfiles/nav.js";

document.addEventListener("DOMContentLoaded", () => {
  Nav();
  date();
  exist();
  search();

  const params = new URLSearchParams(window.location.search);
  const categoryName = params.get("name");

  const newsContainer = document.getElementById("newscontainer");
  const title = document.getElementById("Thecategory");
  const loading = document.getElementById("loading");

  if (!categoryName) {
    title.textContent = "Category Not Found";
    loading.remove();
    return;
  }

  title.textContent = categoryName.toUpperCase();

  fetch(`https://newsapi-w6iw.onrender.com/api/news/category/${categoryName}`)
    .then((res) => res.json())
    .then((content) => {
      loading.remove();

      if (!content || content.length === 0) {
        newsContainer.innerHTML =
          "<p class='text-center col-span-full text-[16px] text-gray-600'>No posts found.</p>";
        return;
      }

      content.forEach((news) => {
        const item = document.createElement("div");
        item.classList.add("flex", "flex-col", "gap-2", "h-full");
        item.setAttribute("data-slug", news.slug || news.id);

        item.innerHTML = `
          <img class="h-[37vh] w-full object-cover rounded-[5px]" src="${news.picUrl}" alt="${news.title}">
          <h2 class="font-[600] text-[17px]">${news.title}</h2>
          <p class="font-[500] text-[15px]">${news.shortDescription}</p>
          <p class="text-[12px] font-[400]">${news.user?.name || "Anoynmous"}</p>
          <p>${new Date(news.datePosted).toDateString()}</p>
        `;

        item.addEventListener("click", () => {
          window.location.href = `../pages/detail.html?id=${news.slug || news._id}`;

        });

        newsContainer.appendChild(item);
      });
    })
    .catch((error) => {
      console.log("Error fetching category:", error);
      loading.remove();
      newsContainer.innerHTML =
        "<p class='text-center col-span-full text-[16px] text-red-600'>Error loading category news.</p>";
    });
});
