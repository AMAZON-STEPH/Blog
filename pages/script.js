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
  // --- Elements ---
  const settingBtn = document.getElementById("setting");
  const loginModal = document.getElementById("login");
  const closeBtn = document.getElementById("removeLogin");
  const showPasswordBtn = document.getElementById("showPassword");
  const loginForm = document.getElementById("logindata");
  const direction = document.getElementById("direction");
  const passwordInput = document.getElementById("password");
  const emailInput = document.getElementById("email")

  // --- Open modal ---
  settingBtn.addEventListener("click", () => {
    loginModal.classList.remove("hidden");
  });

  // --- Close modal ---
  closeBtn.addEventListener("click", () => {
    loginModal.classList.add("hidden");
  });

  // Close modal if click outside form
  loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) loginModal.classList.add("hidden");
  });

  // --- Toggle password visibility ---
  showPasswordBtn.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    showPasswordBtn.classList.toggle("fa-eye");
    showPasswordBtn.classList.toggle("fa-eye-slash");
  });

  // --- Handle login form submission ---
 const savedEmail = localStorage.getItem("userEmail");
  if (savedEmail) {
    emailInput.value = savedEmail;
  }

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    direction.textContent = "";
    direction.classList.remove("text-red-600", "text-green-600");

    if (!email || !password) {
      direction.textContent = "Please enter your email and password.";
      direction.classList.add("text-red-600");
      return;
    }

    let data
    try {
      const res = await fetch("https://newsapi-w6iw.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: passwordValue }),
      });

       data = await res.json();
      console.log("Response:", data);

      if (!res.ok) {
        direction.textContent = data.message || "Invalid email or password.";
        direction.classList.add("text-red-600");
        return;
      }

      // ✅ Save auth token for 7 days
      document.cookie = `authToken=${data.token}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Lax; Secure`;

      // ✅ Save email to auto-fill next time
      localStorage.setItem("userEmail", email);

      direction.textContent = "Login successful! Redirecting...";
      direction.classList.add("text-green-600");

      // ✅ Redirect to dashboard
      setTimeout(() => {
        window.location.href = "/pages/dashboard.html";
      }, 1500);

    } catch (err) {
      console.log("Login error:", err);
      direction.textContent = "Network error. Try again.";
      direction.classList.add("text-red-600");
    }
  });
});