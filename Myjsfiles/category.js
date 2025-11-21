import { Nav, date, exist, search } from "../Myjsfiles/nav.js";
import { cookies } from "../Myjsfiles/cookie.js";

document.addEventListener("DOMContentLoaded", () => {
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
        <div class="card cursor-pointer">
          <img class="h-[37vh] w-full object-cover rounded-[5px]" src="${
            news.picUrl
          }" alt="${news.title}">
          <h2 class="font-[600] text-[17px]">${news.title}</h2>
          <p class="font-[500] text-[15px]">${news.shortDescription}</p>
          <p class="text-[12px] font-[400] text-blue-950">${
            news.user?.name || "Anoynmous"
          }</p>
        </div>

      <div class="flex w-full items-center justify-between">
        <p class="text-[12px] font-[500] text-gray-800">${new Date(
          news.datePosted
        ).toDateString()}</p>

      <div class="relative">
        <i class="fas fa-ellipsis-v hover:bg-gray-300 p-2 rounded-full transition-all active:scale-110 cursor-pointer menu-btn"></i>
        
        <div class="dropdown fixed inset-0 bg-black/50 flex justify-center items-start pt-20 z-40 hidden">
          
          <div class="option flex flex-col w-[60%] lg:w-[60%] h-[35vh] rounded-[5px] justify-center gap-2 bg-white p-5 relative">
           <div class="flex justify-end">
            <i class="fas fa-remove hover:bg-gray-200 p-2 rounded-full cursor-pointer close-modal text-[17px]"></i>
           </div>
            <p type="button" class="px-4 py-2 hover:bg-gray-200 cursor-pointer edit-btn text-blue-600 hover:underline rounded active:scale-110 transition-all">Edit</p>
            <p type="button" class="px-4 py-2 hover:bg-gray-200 cursor-pointer delete-btn text-red-600 active:scale-110 transition-all rounded">Delete</p>
            </div>
          </div>
        </div>
      </div>
  `;

  console.log(news)
        const card = item.querySelector(".card");
        card.addEventListener("click", () => {
          window.location.href = `../pages/detail.html?id=${
            news.slug || news._id
          }`;
        });

        const menuBtn = item.querySelector(".menu-btn");
        const dropdown = item.querySelector(".dropdown");
        const closeModal = item.querySelector(".close-modal");
        const deleteBtn = dropdown.querySelector(".delete-btn");
        // const option = item.querySelector(".option");

        menuBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          dropdown.classList.remove("hidden");
        });

        closeModal.addEventListener("click", (e) => {
          e.stopPropagation();
          dropdown.classList.add("hidden");
        });

        dropdown.addEventListener("click", (e) => {
          if (e.target === dropdown) dropdown.classList.add("hidden");
        });

        dropdown.addEventListener("click", (e) => e.stopPropagation());

        deleteBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          dropdown.classList.add("hidden");

          const dialog = document.createElement("div");

          dialog.className =
            " fixed inset-0 bg-black/50 flex justify-center items-center z-50";
          dialog.innerHTML = `
          <div class="flex flex-col w-[60%] lg:w-[60%] h-[30vh] rounded-[5px] justify-center gap-2 bg-white p-5 relative">
            <h3>Do you want to delete this post</h3>
            <div class="flex justify-end gap-3 mt-4">
              <button class="cancel-btn px-4 py-1 rounded bg-gray-200 hover:bg-gray-500 active:scale-110 transition-all">Cancel</button>
              <button class="confirm-delete-btn px-4 py-1 rounded bg-red-600 text-white hover:bg-red-600/80 active:scale-110 transition-all">Delete</button>
            </div>
            <i class="fas fa-remove absolute top-3 right-3 hover:bg-gray-200 p-2 rounded-full cursor-pointer close-modal font-bold active:scale-110 transition-all"></i>
            </div>
          `;
          document.body.appendChild(dialog);

          const cancelBtn = dialog.querySelector(".cancel-btn");
          const closeModal = dialog.querySelector(".close-modal");
          const confirmDeleteBtn = dialog.querySelector(".confirm-delete-btn");

          cancelBtn.addEventListener("click", () => dialog.remove());
          closeModal.addEventListener("click", () => dialog.remove());

          confirmDeleteBtn.addEventListener("click", async () => {
           const id = news.id || news._id || news.slug;

            const { getCookie } = cookies();
            const token = localStorage.getItem("token") || getCookie("token");
            console.log(news._id)
            console.log("TOKEN:", token);

             if (!token) {
                console.log(token);
                return;
              }
       
              const res = await fetch(`https://newsapi-w6iw.onrender.com/api/news/${id}`, {
                  method: "DELETE",
                  headers: {"Authorization": `Bearer ${token}`, "accept": "*/*",}
                });

              console.log("hello",res.status)
              // console.log("Trying to delete id:", news._id);


             if (res.status === 204) {
                item.remove();              
                dropdown.remove(); 
                dialog.remove();
              } else if (res.status === 403) {
                alert("You are not authorized to delete this post.");
                  dialog.remove();
              } else if (res.status === 404) {
                alert("Post not found.");
                  dialog.remove();
              } else {
                alert("Internal server error");
                  dialog.remove();
              }
            });
          });

        // Edit action
        dropdown.querySelector(".edit-btn").addEventListener("click", () => {
          window.location.href = `../pages/dashboard.html?editId=${news._id}`;
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
