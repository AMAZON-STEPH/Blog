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
        const option = item.querySelector(".option");

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
          <div class="flex flex-col w-[60%] lg:w-[60%] h-[35vh] rounded-[5px] justify-center gap-2 bg-white p-5 relative">
            <h3>Do you want to delete this post? This action cannot be undone.</h3>
            <div class="flex justify-end gap-3 mt-4">
              <button class="cancel-btn px-4 py-2 rounded bg-gray-200 hover:bg-gray-500 active:scale-110 transition-all">Cancel</button>
              <button class="confirm-delete-btn px-4 py-2 rounded bg-red-600 text-white hover:bg-red-600 active:scale-110 transition-all">Delete</button>
            </div>
            <i class="fas fa-remove absolute top-3 right-3 text-gray-600 hover:bg-gray-200 p-2 rounded-full cursor-pointer close-modal"></i>
            </div>
          `;
          document.body.appendChild(dialog);

          const cancelBtn = dialog.querySelector(".cancel-btn");
          const closeModal = dialog.querySelector(".close-modal");
          const confirmDeleteBtn = dialog.querySelector(".confirm-delete-btn");

          cancelBtn.addEventListener("click", () => dialog.remove());
          closeModal.addEventListener("click", () => dialog.remove());

          confirmDeleteBtn.addEventListener("click", async () => {
            const id = news.id;
            const token = localStorage.getItem("token");
             if (!token) {
                console.log(token);
                return;
              }
            // 
       
              const res = await fetch(`https://newsapi-w6iw.onrender.com/api/news/${id}`, {
                  method: "DELETE",
                  headers: {"Authorization": `Bearer ${token}`, "accept": "*/*",}
                });

              console.log(res)
              // console.log("Trying to delete id:", news._id);


             if (res.status === 204) {
                item.remove();              
                dropdown.remove(); 
              } else if (res.status === 403) {
                alert("You are not authorized to delete this post.");
              } else if (res.status === 404) {
                alert("Post not found.");
              } else {
                alert("Server error occurred.");
              }
            });
          });

        // Edit action
        dropdown.querySelector(".edit-btn").addEventListener("click", () => {
          alert("Edit clicked");
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
