document.addEventListener("DOMContentLoaded", loadLatestNews);

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

async function loadLatestNews() {
  const latestMain = document.getElementById("latestMain");
  const latestScroll = document.getElementById("latestScroll");

  latestMain.innerHTML = "<p>Loading...</p>";

  try {
    const res = await fetch("https://newsapi-w6iw.onrender.com/api/news/latest");
    if (!res.ok) throw new Error("Failed to load news");

    const data = await res.json();
    if (!data.length) {
      latestMain.innerHTML = "<p>No news available.</p>";
      return;
    }

    const big = data[0];
    const side = data.slice(1, 3);
    const scroll = data.slice(3, 20);

    latestMain.innerHTML = `
      <div class="flex flex-col lg:flex-row gap-5 cursor-pointer">

        <img src="${big.picUrl || big.imageUrl}" 
             class="w-full h-[220px] sm:h-[260px] lg:w-[40%] lg:h-[300px] rounded-md object-cover cursor-pointer"
             onclick="openDetail('${big.slug}')"/>

        <div class="flex flex-col gap-4 w-full">
          ${side
            .map(
              (news) => `
            <div class="flex items-start gap-3 cursor-pointer" onclick="openDetail('${news.slug}')">
              <div class="flex-1">
                <p class="font-semibold text-[15px] sm:text-[17px]">${news.title}</p>
                <p class="text-[12px] sm:text-[13px] text-gray-600">
                  ${news.category} - ${formatDate(
                news.datePosted || news.createdAt
              )}
                </p>
              </div>

              <img class="w-[70px] sm:w-[85px] h-[60px] sm:h-[65px]
               rounded-md object-cover"
                src="${news.picUrl || news.imageUrl}">
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;

    latestScroll.innerHTML = scroll
      .map(
        (news) => `
        <div class="flex flex-col gap-2 shrink-0 w-[150px] sm:w-[180px] cursor-pointer" onclick="openDetail('${news.slug}')">
          <img class="rounded-md h-[90px] sm:h-[110px] w-full object-cover"
             src="${news.picUrl || news.imageUrl}" />

          <p class="font-medium text-[13px] sm:text-[14px] line-clamp-2">
            ${news.title}
          </p>

          <p class="text-[12px] text-gray-600">
            ${news.category} - ${formatDate(news.datePosted || news.createdAt)}
          </p>
        </div>
    `
      )
      .join("");


  } catch (err) {
    latestMain.innerHTML = "<p class='text-red-600'>Unable to load news</p>";
    console.error(err);
  }
}

function openDetail(slug) {
  window.location.href = `/pages/detail.html?id=${slug}`;
}
