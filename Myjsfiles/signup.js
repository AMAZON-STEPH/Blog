import { cookies } from "../Myjsfiles/cookie.js";
document.addEventListener("DOMContentLoaded", () => {
  // setCookies();

  const user = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const signupForm = document.getElementById("signupForm");
  const direction = document.getElementById("direction");
  const showPassword = document.getElementById("showPassword");

  const adminPassword = document.getElementById("adminCode");

  showPassword.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    showPassword.classList.toggle("fa-eye");
    showPassword.classList.toggle("fa-eye-slash");
  });

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nameValue = user.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const adminValue = adminPassword.value.trim();

    direction.textContent = "";
    direction.classList.remove("text-red-600", "text-green-600");

    if (!nameValue || !emailValue || !passwordValue) {
      direction.textContent = "Please enter your details.";
      direction.classList.add("text-red-600");
      return;
    }
    try {
      const res = await fetch("https://newsapi-w6iw.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // credentials: "include",
        
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          password: passwordValue,
          adminCode: adminValue,
        }),
      });
      console.log(res,"here res");

      const data = await res.json();
      direction.textContent = data.error || data.success;
      direction.classList.add(`${data.error? "text-red-600" : "text-green-600"}`);
      console.log("Raw response:", res);
      
      if (!res.ok) {
        direction.textContent = "Failed to sign up.";
        direction.classList.add("text-red-600");        
        return;
      }
      

      const { setCookie } = cookies();
        setCookie("authToken", data.token, 7);
        setCookie("userEmail", emailValue, 7);

         direction.classList.remove("text-red-600");
         direction.textContent = "Signup successful! Redirecting...";
          direction.classList.add("text-green-600");

    
      setTimeout(
        () => (window.location.href = "../pages/dashboard.html"),
        1500
      );   

    } catch (err) {
      console.error("Signup error:", err);
      direction.textContent = "Network error. Try again.";
      direction.classList.add("text-red-600");
    }
  });
});

// G7bQz2tH9kLx8pN4rMzVw5YdXcJt6fUq
