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

      
      
      if (!res.ok) {
        direction.textContent = "Failed to sign up.";
        direction.classList.add("text-red-600");        
        return;
      }
      
      
      const data = await res.json();
      direction.textContent = data.error || data.success;
      direction.classList.add(`${data.error? "text-red-600" : "text-green-600"}`);
      console.log("Raw response:", res);
      
      
    
      // setTimeout(
      //   () => (window.location.href = "../pages/dashboard.html"),
      //   1500
      // );   

      // document.cookie = `authToken=${data.token}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Lax`;
      // document.cookie = `userEmail=${emailValue}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Lax`;

    //  cookies("authToken", data.token, 7);
    //   cookies("userEmail", emailValue, 7);

      // direction.textContent = "Signup successful! You can now login.";
      // direction.classList.remove("text-red-600");
      // 
    } catch (err) {
      console.error("Signup error:", err);
      direction.textContent = "Network error. Try again.";
      direction.classList.add("text-red-600");
    }
  });
});

// G7bQz2tH9kLx8pN4rMzVw5YdXcJt6fUq
