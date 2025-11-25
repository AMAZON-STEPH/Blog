import { Nav, date, similarnews, detailed, exist, search } from '../Myjsfiles/nav.js';
import { cookies } from "../Myjsfiles/cookie.js";
document.addEventListener("DOMContentLoaded", () => {
  Nav();
  date();
  similarnews();
  // detailed();
  exist();
  search();


const apiURL = "https://";



document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);

  if(!params.get("name")){
    window.location.replace("index.html?name=world")
  }
  const { getCookie, setCookie, deleteCookie } = cookies();

  const authToken = getCookie("authToken");
  const loginModalWrapper = document.getElementById("login");
  const settingBtn = document.getElementById("setting");
  const closeBtn = document.getElementById("removeLogin");
  const loginForm = document.getElementById("logindata");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const direction = document.getElementById("direction");
  const showPasswordBtn = document.getElementById("showPassword");

  if (authToken) {
    settingBtn.style.display = "none";
  } else {
    settingBtn.addEventListener("click", () => loginModalWrapper.classList.remove("hidden"));
  }

  closeBtn.addEventListener("click", () => loginModalWrapper.classList.add("hidden"));
  loginModalWrapper.addEventListener("click", (e) => {
    if (e.target === loginModalWrapper) loginModalWrapper.classList.add("hidden");
  });

  showPasswordBtn.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    showPasswordBtn.classList.toggle("fa-eye");
    showPasswordBtn.classList.toggle("fa-eye-slash");
  });

  const savedEmail = getCookie("userEmail");
  if (savedEmail) emailInput.value = savedEmail;

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const theemail = emailInput.value.trim();
    const thepassword = passwordInput.value.trim();
    direction.textContent = "";
    direction.classList.remove("text-red-600", "text-green-600");

    if (!theemail || !thepassword) {
      direction.textContent = "Enter email and password";
      direction.classList.add("text-red-600");
      return;
    }

    try {
      const res = await fetch("https://newsapi-w6iw.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: theemail, password: thepassword }),
      });

      const contentType = res.headers.get("content-type");
      let data = {};
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        throw new Error("Unexpected response format");
      }

      if (!res.ok) {
        direction.textContent = data.message || "Invalid email or password";
        direction.classList.add("text-red-600");
        return;
      }

      // Save cookies
      cookies("authToken", data.token, 7);
      cookies("userEmail", theemail, 7);

      direction.textContent = "Login successful! Redirecting...";
      direction.classList.add("text-green-600");

      setTimeout(() => window.location.href = "./dashboard.html", 1500);

    } catch (error) {
      console.error("Login error:", error);
      direction.textContent = "Network error. Try again";
      direction.classList.add("text-red-600");
    }
  });


  async function loadTrending() {
  const skeleton = document.getElementById("trending-skeleton");
  const real = document.getElementById("trending");

  // Show skeleton first
  skeleton.style.display = "flex";
  real.classList.add("hidden");

  try {
    const res = await fetch("https://newsapi-w6iw.onrender.com/api/news/trending");
    const data = await res.json();

    // Update real content
    document.getElementById("world-img").src = data.world.image;
    document.getElementById("world-desc").textContent = data.world.desc;

    document.getElementById("technology-img").src = data.tech.image;
    document.getElementById("technology-desc").textContent = data.tech.desc;

    document.getElementById("health-img").src = data.health.image;
    document.getElementById("health-desc").textContent = data.health.desc;

    document.getElementById("sports-img").src = data.sports.image;
    document.getElementById("sports-desc").textContent = data.sports.desc;

    // Hide skeleton, show real content
    skeleton.style.display = "none";
    real.classList.remove("hidden");

  } catch (err) {
    console.error("Error loading trending:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadTrending);

});

})


