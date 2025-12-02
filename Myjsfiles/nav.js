export function Nav() {
  const navLinks = document.querySelectorAll("ul li a");
  // const currentPage = window.location.pathname.split("/").pop().toLowerCase();

  const params = new URLSearchParams(window.location.search);
  const currentCategory = params.get("name");

  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(item => {
    item.classList.remove("text-red-600");

    if (item.getAttribute("data-category") === currentCategory) {
      item.classList.add("text-red-600");
    }
  });


  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("name");

  navLinks.forEach((page) => {
       const href = page.getAttribute("href").split("/").pop().split("?")[0].toLowerCase();
      
    page.classList.remove("text-red-600", "font-bold");

    if (href === "index.html" && window.location.pathname.split("/").pop().toLowerCase() === "index.html") {
      link.classList.add("text-red-600", "font-bold");
      return;
    }

     if (category && page.getAttribute("href").toLowerCase().includes(category)) {
      page.classList.add("text-red-600", "font-bold");
    }
  });
}

export function date() {
  const today = document.querySelectorAll(".today");
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  today.forEach((el) => {
    el.textContent = formattedDate;
  });
}

export function exist() {
   const menu = document.getElementById("menu");
   if(menu){
   menu.classList.add("cursor-pointer")
   menu.addEventListener("click", () => {
    window.location.href = "/index.html"
  });
}
  const toexist = document.getElementById("exist");
  if(toexist){
  toexist.classList.add("cursor-pointer")
  toexist.addEventListener("click", () => {
    window.history.back();
  });
}
}


export function similarnews() {
   const thecontent = document.getElementById("thecontent")
   if(!thecontent)
    return;

   const params = new URLSearchParams(window.location.search)
   const currentslug = params.get("id")

   fetch(`https://newsapi-w6iw.onrender.com/api/news/newsdetail/${currentslug}`)
   .then((result) => result.json())
   .then((currentNews) => {
    const currentCategory = currentNews.category?.toLowerCase() || null;
    if(!currentCategory){
      thecontent.innerHTML = '<p class="text-[15px] text-gray-700">No category found for this article</p>'
      return;
    }

    fetch(`https://newsapi-w6iw.onrender.com/api/news/category/${currentCategory}`)
    .then((res) => res.json())
    .then((thenews) => {
      const relatedContent = thenews.filter(sm => sm.slug !== currentslug).slice(0,3)

      if (relatedContent.length === 0) {
            thecontent.innerHTML = `<p class="text-gray-600 text-center text-[14px] py-3">No similar news found.</p>`;
            return;
          }

          let startIndex = 0;
          function renderSimilar(){
            thecontent.innerHTML= "";
            const visibleNews = relatedContent.slice(startIndex,startIndex + 3);

            visibleNews.forEach((news) => {
              const card = document.createElement("div");
              card.classList.add("flex", "flex-col","shrink-0", "gap-2", "cursor-pointer")
              card.setAttribute("data-slug", news.slug);

              const theDate = new Date(news.datePosted).toDateString();

              card.innerHTML = `
                  <img class="h-[37vh] w-full object-cover" src="${news.picUrl}" alt="${news.title}" class="rounded-[5px] h-[30vh] w-full object-cover">
                  <p class="font-semibold text-[16px]">${news.title}</p>
                 <p class="text-[13px] font-[400] flex flex-row">${news.shortDescription} <p class="text-[13px] font-[400]"> ${theDate} </p></p>
               `;

               card.addEventListener("click", () => {
                const slug = card.getAttribute("data-slug");
                 
                if(slug){
                  window.location.href = `../pages/detail.html?id=${news.slug}`
              }
               });

               thecontent.appendChild(card);
            });

          }
          renderSimilar();
          setInterval(renderSimilar, 5000);
    })
     .catch(() => {
      thecontent.innerHTML = `<p class="text-red-600 text-center">Failed to fetch similar news.</p>`
     });

   })
   .catch(() => {
      thecontent.innerHTML = `<p class="text-red-600 text-center">Details not found.</p>`;
    });
}



export function detailed() {
const params = new URLSearchParams(window.location.search);
  const slug = params.get("id");

  const display = document.getElementById("display");

  if (!slug) {
    display.innerHTML = `<p class="text-red-500 text-center">No article found.</p>`;
    return;
  }

  fetch(`https://newsapi-w6iw.onrender.com/api/news/newsdetail/${slug}`)
    .then(res => {
     
      if (!res.ok) throw new Error("Failed to fetch news details");
      return res.json();
      
    })
    .then(data => {
      display.innerHTML = `
        <div class="flex flex-col gap-5">
          <div class="flex items-center gap-3 border-t border-b border-gray-300 py-2">
            <i class="far fa-user text-[20px] bg-gray-200 rounded-full p-2"></i>
            <div>
              <h3 class="font-[600] text-[16px]">${data.user?.name || "Anoynmous"}</h3>
              <p class="text-[13px] text-gray-600 flex items-center gap-1">
                <i class="far fa-calendar-days"></i>
                ${new Date(data.datePosted).toDateString()}
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <h2 class="text-[26px] lg:text-[32px] font-[700]">${data.title}</h2>

            <div class="relative w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] mx-auto">

            <img  class="border-2 border-blue-950 w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] h-auto lg:max-h-[90vh] rounded-[2em] mx-auto relative z-10" src="${data.picUrl}" alt="${data.title}" class="w-full rounded-[8px] shadow-md">
            </div>
            <p class="text-[16px] leading-7">${data.content}</p>
          </div>
         
      `;
    })
    .catch(err => {
      console.log("Error fetching detail:", err);
      display.innerHTML = `<p class="text-red-600 text-center">Error loading article. Try again later.</p>`;
    });
  }


export function search() {
  const search = document.getElementById("search");

  search.addEventListener("click", () => {

    const dropdown = document.createElement("div");
    dropdown.className =
      "fixed inset-0 bg-black/50 flex justify-center items-start pt-20 z-40";

  dropdown.innerHTML = `
    <div class="bg-white md:w-[60%] w-[100%] h-[50vh] lg:h-[60vh] py-4 px-2 rounded-[10px] overflow-hidden flex flex-col gap-2">

      <div class="flex justify-start">
        <i id="closeSearch" class="fas fa-remove font-bold text-[20px] cursor-pointer hover:bg-gray-300 p-2 rounded-full transition-all active:scale-110"></i>
      </div>
      <input id="input" type="search" placeholder="Search trending news..." class="w-full border border-gray-400 p-2 rounded-lg mb-3 animate-pulse placeholder:text-blue-800 outline-none">

      <div id="results" class="space-y-3 flex-1 overflow-y-auto"></div>
    </div>
    `;

    document.body.appendChild(dropdown);

    const input = document.getElementById("input");
    const results = document.getElementById("results");

    dropdown.addEventListener("click", (e) => {
      if (e.target === dropdown) dropdown.remove();
    });

    document.getElementById("closeSearch").addEventListener("click", () => {
      dropdown.classList.add("hidden")
    })

    input.addEventListener("input", async () => {
      const query = input.value.trim().toLowerCase();
      results.innerHTML = `<p class="text-gray-500 animate-pulse">Searching...</p>`;

      if (!query) {
        results.innerHTML = "";
        console.log("hello")
        return;
      }

      try {
        const res = await fetch(
          `https://newsapi-w6iw.onrender.com/api/news/search?query=${query}`
        )
        const raw = await res.json();
        const data = raw.filter((news) => news.title.toLowerCase().includes(query));
  
        if (!data.length) {
          results.innerHTML = `<p class="text-gray-500">No results found.</p>`;
          return;
        }

        results.innerHTML = "";

        data.forEach((news) => {
          const content = document.createElement("div");
          content.className =
            "flex flex-col gap-3 items-start p-2 border-b cursor-pointer hover:bg-gray-200";
          content.innerHTML = `
              <p class="font-semibold text-[15px]">${news.title}</p>
              <p class="text-[12px] text-gray-600">${news.shortDescription.slice(0, 50)}...</p>
            </div>
          `;
             console.log(news);
             
          content.addEventListener("click", () => {
           
            window.location.href = `../pages/detail.html?id=${news.slug}`
          });

          results.appendChild(content);
        });
      } catch (err) {
        results.innerHTML = `<p class="text-red-600">Error loading results.</p>`;

      }
    });
  });
}



