import { Nav, date,exist,search } from '../Myjsfiles/nav.js';

document.addEventListener("DOMContentLoaded", () => {
  Nav();
  date();
  exist();
  search();
  // similarnews();
});

const apiURL = "https://";

import { cookies } from "./nav.js";

document.addEventListener("DOMContentLoaded", () => {
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

  // Hide login button if already logged in
  if (authToken) {
    settingBtn.style.display = "none";
  } else {
    settingBtn.addEventListener("click", () => loginModalWrapper.classList.remove("hidden"));
  }

  // Close modal
  closeBtn.addEventListener("click", () => loginModalWrapper.classList.add("hidden"));
  loginModalWrapper.addEventListener("click", (e) => {
    if (e.target === loginModalWrapper) loginModalWrapper.classList.add("hidden");
  });

  // Toggle password visibility
  showPasswordBtn.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    showPasswordBtn.classList.toggle("fa-eye");
    showPasswordBtn.classList.toggle("fa-eye-slash");
  });

  // Prefill email if saved
  const savedEmail = getCookie("userEmail");
  if (savedEmail) emailInput.value = savedEmail;

  // Login form submit
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

      // Check if response is JSON
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

  // Add your existing news + live updates code here...
});





