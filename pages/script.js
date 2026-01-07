import{cookies} from "../Myjsfiles/cookie.js";
import { Nav, date, exist, search } from "../Myjsfiles/nav.js";

document.addEventListener("DOMContentLoaded", () => {
    Nav();
    date();
    exist();
    search();

  changeNews("world", "world-img", "world-desc");
  changeNews("technology", "technology-img", "technology-desc");
  changeNews("health", "health-img", "health-desc");
  changeNews("sports", "sports-img", "sports-desc");

  startLiveUpdates();

async function changeNews(category, imgId, descId) {
  const container = document.getElementById(`${category}-news`);
  const shimmer = container.querySelector(".shimmer"); 
  const img = document.getElementById(imgId);
  const desc = document.getElementById(descId);

  shimmer.classList.remove("hidden");
  img.classList.add("hidden");
  desc.classList.add("hidden");

  await new Promise(res => setTimeout(res, 800));

  try {
    const res = await fetch(
      `https://newsapi-w6iw.onrender.com/api/news/trending/${category}`
    );
    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      desc.textContent = `No trending ${category} news available.`;
      return;
    }

    let index = 0;

    function showNext() {
      const item = data[index];
      img.src = item.picUrl || "./images/default.png";
      desc.textContent = item.shortDescription;

      img.dataset.slug = item.slug;
      img.dataset.category = category;

    index = (index + 1) % data.length;
    }

    showNext();

    shimmer.classList.add("hidden");
    img.classList.remove("hidden");
    desc.classList.remove("hidden");

    setInterval(showNext,10000);

    container.addEventListener("click", () => {
      const slug = img.dataset.slug;
      if(slug) {
        window.location.href = `../pages/detail.html?id=${slug}`
      }
    });

  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    desc.textContent = `Failed to load ${category} news.`;

    shimmer.classList.add("hidden");
    img.classList.remove("hidden");
    desc.classList.remove("hidden");
  }
}

})


async function startLiveUpdates() {
  try {
    const response = await fetch(
      "https://newsapi-w6iw.onrender.com/api/news/live"
    );

    if (!response.ok) throw new Error("Failed to fetch live updates");

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
     const Live = document.getElementById("live-title")
     Live.textContent = "No live updates available right now.";
     Live.classList.add("text-gray-500", "text-[12px]", "animate-pulse")
      return;
    }

    let currentIndex = 0;

    function showLiveItem(index) {
      const item = data[index];
      console.log(item)

      document.getElementById("live-img").src =
        item.picUrl || "./images/default.png";

      document.getElementById("live-img").alt = item.title || "Live news";
      document.getElementById("live-category").textContent =
        (item.category || "news").toUpperCase();
      document.getElementById("live-author").textContent =
        item.user.email.slice(0,4).toUpperCase() || "Unknown";
      document.getElementById("live-title").textContent =
        item.title || "Untitled";

      document.getElementById("live-date").textContent =
        `${new Date().toLocaleDateString()}`;

        const readArticle = document.getElementById("readArticle")
        readArticle.addEventListener("click", () => {
           window.location.href = `../pages/detail.html?id=${item.slug}`
        })
    }

    showLiveItem(currentIndex);

    setInterval(() => {
      currentIndex = (currentIndex + 1) % data.length;
      showLiveItem(currentIndex);
    }, 8000);

  } catch (error) {
    console.error("Error fetching live updates:", error);
    document.getElementById("live-title").textContent =
      "Failed to load live updates.";
  }
}


startLiveUpdates();


document.addEventListener("DOMContentLoaded", () => {
  const settingBtn = document.getElementById("setting");
  const loginModal = document.getElementById("login");
  const closeBtn = document.getElementById("removeLogin");
  const showPasswordBtn = document.getElementById("showPassword");
  const loginForm = document.getElementById("logindata");
  const direction = document.getElementById("direction");
  const password = document.getElementById("password");
  const email = document.getElementById("email")

  settingBtn.addEventListener("click", () => {
    loginModal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    loginModal.classList.add("hidden");
  });

  loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) loginModal.classList.add("hidden");
  });

  loginForm.reset()

  showPasswordBtn.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    showPasswordBtn.classList.toggle("fa-eye");
    showPasswordBtn.classList.toggle("fa-eye-slash");
  });

const savedEmail = localStorage.getItem("userEmail");
  if (savedEmail) {
    email.value = savedEmail;
  }

  function decodeToken(token) {
  const payload = token.split(".")[1];
  return JSON.parse(atob(payload));
}


  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const theemail = email.value.trim();
    const thepassword = password.value.trim();

    direction.textContent = "";
    direction.classList.remove("text-red-600", "text-green-600");

    if (!theemail || !thepassword) {
      direction.textContent = "Please enter your email and password.";
      direction.classList.add("text-red-600");
      return;
    }
    

    let data
    try {
       const res = await fetch("https://newsapi-w6iw.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: theemail, password: thepassword }),
      });
       console.log("Response status:", res.status);

       data = await res.json();
      console.log("Response:", data);

      if (!res.ok) {
        direction.textContent = data.message || data.error || "Invalid email or password.";
        direction.classList.add("text-red-600");
        return;
      }

      console.log(data)
     const {setCookie} = cookies()

      setCookie("token", data.token, 7);

      localStorage.setItem("token", data.token);

      // Decode ID from token
      const decoded = decodeToken(data.token);

      // Save ID from the token
      setCookie("userId", decoded.id, 7);

      // Email comes from API
      setCookie("userEmail", data.user.email, 7);

      // Name does not exist in API, so create a default
      setCookie("userName", data.user.email.split("@")[0], 4);

      localStorage.setItem("userEmail", data.user.email);

      direction.textContent = "Login successful! Redirecting...";
      direction.classList.add("text-green-600");
      

      setTimeout(() => {
        window.location.href = "../pages/dashboard.html";
      }, 1500);

    } catch (error) {
      console.log("Login error:", error);
      direction.textContent = "Network error. Try again.";
      direction.classList.add("text-red-600");
    }
  });
});

