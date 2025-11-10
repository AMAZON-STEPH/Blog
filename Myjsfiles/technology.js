import { Nav, date } from "../Myjsfiles/nav.js";

document.addEventListener("DOMContentLoaded", () => {
  Nav();
  date();

  fetch("https://newsapi-w6iw.onrender.com/api/news/category/technology")
    .then((fullfilled) => fullfilled.json())
    .then((content) => {
      const technologyContainer = document.getElementById("technologycontainer");
      const load = document.getElementById("loading");
      load.remove();

      let display = 0;
      const batch = 5;

      const fade = (element, type, duration = 500) => {
        element.style.transition = `opacity ${duration}ms ease`;
        element.style.opacity = type === "in" ? 1 : 0;
      };

      const rendernews = (start) => {
        technologyContainer.innerHTML = "";
        const stop = content.slice(start, start + batch);

        stop.forEach((news) => {
          const items = document.createElement("div");
          items.classList.add("flex", "flex-col", "gap-2", "h-full");
          items.setAttribute("data-slug", news.slug);

          items.innerHTML = `
     <img class="h-[37vh] w-full object-cover rounded-[5px]" src="${
       news.picUrl
     }" alt="${news.title}">
     <p class="font-[500] text-[15px]">${news.shortDescription}</p>
     <p class="text-[12px] font-[400]">${news.user} - ${new Date(
            news.datePosted
          ).toDateString()}</p>
  `;

          items.addEventListener("click", () => {
            const slug = items.getAttribute("data-slug");
            if (slug) {
              window.location.href = `../detail/technologydetail.html?id=${slug}`;
            }
          });
          technologyContainer.appendChild(items);
          console.log(items);
        });
      };

      rendernews(display);

      setInterval(() => {
        fade(technologyContainer, "out");
        setTimeout(() => {
          display = display === 0 ? 5 : 0;
          rendernews(display);
          fade(technologyContainer, "in");
        }, 600);
      }, 8000);
    })

    .catch((error) => {
      console.log("Error fetching world news:", error);
      load.classList.add("text-red-700", "text-[15px]");
      load.innerHTML = "Failed to load world news, try again later.";
    });
});