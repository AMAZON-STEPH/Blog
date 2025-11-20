document.addEventListener("DOMContentLoaded", () => {

async function AllPosts() {
  const postsContainer = document.getElementById("postsContainer");

  try {
    const res = await fetch("https://newsapi-w6iw.onrender.com/api/news/latest");

    console.log(postsContainer)

    if (!res.ok) {
      throw new Error("Server returned " + res.status);
    }

    const data = await res.json();

    postsContainer.innerHTML = "";

    if (!data || data.length === 0) {
      postsContainer.innerHTML = `
        <p class="text-gray-500">No posts found.</p>
      `;
      return;
    }

    data.forEach(post => {
       const div = document.createElement("div");
        div.className = "border rounded-lg p-4 shadow bg-white mb-3";

        div.innerHTML = `
          <h3 class="text-xl font-bold">${post.title}</h3>
          <p class="text-gray-600">${post.shortDescription}</p>
          <p class="text-sm text-gray-400">${new Date(post.createdAt).toLocaleString()}</p>

          <button class="btn inline-block mt-2 text-blue-600 hover:underline">
            View Details <i class="fas fa-arrow-right"></i>
          </button>
        `;

       const btn = div.querySelector(".btn")

        btn.addEventListener("click", () => {
          window.location.href = `../pages/detail.html?id=${post.slug || post._id}`
        })

        postsContainer.appendChild(div)
    });


  } catch (err) {
    console.error("Failed to load posts:", err);
    postsContainer.innerHTML = `
      <p class="text-red-500">Failed to load posts.</p>
    `;
  }

}
const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-section");

      if (target === "posts") {
        AllPosts();
      }
    });
  });

  async function loadTotalPosts() {
  const totalPosts = document.getElementById("totalPosts");

  try {
    const res = await fetch("https://newsapi-w6iw.onrender.com/api/news/latest");

    if (!res.ok) {
      throw new Error("Server returned " + res.status);
    }

    const posts = await res.json();

    totalPosts.textContent = posts.length;

  } catch (err) {
    console.error("Failed to load total posts:", err);
    totalSpan.textContent = "0";
  }
}

loadTotalPosts();


async function loadAnalytics() {
  const totalPosts = document.getElementById("totalPosts");
  const trendingPosts = document.getElementById("trendingPosts");
  const postsChart = document.getElementById("postsChart").getContext("2d");

  try {
    const res = await fetch("https://newsapi-w6iw.onrender.com/api/news/latest");
    if (!res.ok) throw new Error("Failed to fetch posts");

    const posts = await res.json();

    if (!posts || posts.length === 0) {
      totalPosts.textContent = "0";
      trendingPosts.textContent = "0";
      return;
    }

    totalPosts.textContent = posts.length;

    const trendingCount = posts.filter(p => p.isTrending).length;
    trendingPosts.textContent = trendingCount;

    // Posts per category
    const categoryCounts = {};
    posts.forEach(post => {
      if (categoryCounts[post.category]) categoryCounts[post.category]++;
      else categoryCounts[post.category] = 1;
    });

    // Chart.js bar chart
    new Chart(postsChart, {
      type: "bar",
      data: {
        labels: Object.keys(categoryCounts),
        datasets: [{
          label: "Posts per Category",
          data: Object.values(categoryCounts),
          backgroundColor: "rgba(208, 77, 103, 0.6)",
          borderColor: "rgba(17, 155, 47, 1)",
          borderWidth: 1,
          borderRadius:"20px"
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

  } catch (err) {
    console.error("Analytics load error:", err);
  }
}

// Call function when dashboard section is opened
const Items = document.querySelectorAll(".menu-item");
Items.forEach(item => {
  item.addEventListener("click", () => {
    const target = item.getAttribute("data-section");
    if (target === "analytics") loadAnalytics();
  });
});


})
