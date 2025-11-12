import{cookies} from "../Myjsfiles/cookie.js";
async function changeNews(category, imgId, descId) {
  const img = document.getElementById(imgId);
  const desc = document.getElementById(descId);

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

    img.setAttribute("data-slug", item.slug);
    img.setAttribute("data-category", category);

    index = (index + 1) % data.length;
    }

    showNext();
    setInterval(showNext,10000);

    img.addEventListener("click", () => {
      const slug = img.getAttribute("data-slug")
      const cat = img.getAttribute("data-category")

      if(slug && cat) {
        window.location.href = `../detail/${cat}detail.html?id=${slug}`
      }
    })

  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    desc.textContent = `Failed to load ${category} news.`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  changeNews("world", "world-img", "world-desc");
  changeNews("technology", "tech-img", "tech-desc");
  changeNews("health", "health-img", "health-desc");
  changeNews("sports", "sports-img", "sports-desc");
});

async function startLiveUpdates() {
  try {
    const response = await fetch(
      "https://newsapi-w6iw.onrender.com/api/news/live"
    );

    if (!response.ok) throw new Error("Failed to fetch live updates");

    const data = await response.json();
    if (response.ok) {
      console.log(data);
    }
    let currentIndex = 0;

    function showLiveItem(index) {
      const item = data[index];

      document.getElementById("live-img").src = item.picUrl;
      document.getElementById("live-img").alt = item.title;
      document.getElementById("live-category").textContent =
        item.category.toUpperCase();
      document.getElementById("live-author").textContent = item.user;
      document.getElementById("live-title").textContent = item.title;
      document.getElementById(
        "live-date"
      ).textContent = `${new Date().toLocaleDateString()} - 05 Minute`;
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
        body: JSON.stringify({ email: theemail, password: thepassword }),
      });
       console.log("Response status:", res.status);

       data = await res.json();
      console.log("Response:", data);

      if (!res.ok) {
        direction.textContent = data.message || "Invalid email or password.";
        direction.classList.add("text-red-600");
        return;
      }

     const {setCookie} = cookies()
     setCookie("authToken", data.token, 7);
      localStorage.setItem("userEmail", theemail);

      direction.textContent = "Login successful! Redirecting...";
      direction.classList.add("text-green-600");

      setTimeout(() => {
        window.location.href = "../pages/dashboard.html";
      }, 1500);

    } catch (error) {
      console.log("Login error", error);
      direction.textContent = "Network error. Try again.";
      direction.classList.add("text-red-600");
    }
  });
});