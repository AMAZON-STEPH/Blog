 import { cookies } from "../Myjsfiles/cookie.js";

document.addEventListener("DOMContentLoaded", () => {

  const menuItems = document.querySelectorAll(".menu-item");
  const sections = document.querySelectorAll("main section");
  const uploadForm = document.getElementById("uploadForm");
  const uploadMsg = document.getElementById("uploadMsg");

   const {getCookie} = cookies();

    const token = getCookie("authToken");

    if (!token) {
      uploadMsg.textContent = "You are not logged in. Redirecting to login...";
      uploadMsg.classList.remove("text-green-600");
      uploadMsg.classList.add("text-red-600");
      setTimeout(() => window.location.href = "/index.html", 1000);
      return;
    }
     console.log("Authenticated user:", getCookie("userEmail"));

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-section");

      sections.forEach((section) => section.classList.add("hidden"));

      document.getElementById(target).classList.remove("hidden");

      menuItems.forEach((i) => i.classList.remove("bg-white/10"));
      item.classList.add("bg-white/10");
    });
  });


  // const {getCookie} = cookies();
  // // Function to read cookie by name
  // function getCookie(name) {
  //   const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  //   return match ? match[2] : null;
  // }

  uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const article = document.getElementById("article").value.trim();
    const category = document.getElementById("category").value.trim().toLowerCase();
    const image = document.getElementById("imageUrl").value.trim();

    // Validate all fields
    if (!title || !article || !category || !image) {
      uploadMsg.textContent = "Please fill out all fields.";
      uploadMsg.classList.remove("text-green-600");
      uploadMsg.classList.add("text-red-600");
      return;
    }

    const payload = {
      title,
      shortDescription: article.length > 100 ? article.slice(0, 100) + "..." : article,
      content: article,
      category,
      picUrl: image,
      isTrending: true,
      timetoread: "5 min",
      datePosted: new Date().toISOString(),
    };

    // console.log("Token:", token);
    console.log("Payload:", payload);

    try {
      const res = await fetch("https://newsapi-w6iw.onrender.com/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.status === 401) {
        uploadMsg.textContent = "Unauthorized. Please login again.";
        uploadMsg.classList.remove("text-green-600");
        uploadMsg.classList.add("text-red-600");
        setTimeout(() => (window.location.href = "../index.html"), 1500);
        return;
      }

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        uploadMsg.textContent = errorData?.message || "Failed to upload news. Server error.";
        uploadMsg.classList.remove("text-green-600");
        uploadMsg.classList.add("text-red-600");
        console.error("Upload failed:", res, errorData);
        return;
      }

      const data = await res.json();
      console.log("News uploaded successfully:", data);
      uploadMsg.textContent = "News uploaded successfully!";
      uploadMsg.classList.remove("text-red-600");
      uploadMsg.classList.add("text-green-600");
      uploadForm.reset();
    } catch (err) {
      console.error("Network error:", err);
      uploadMsg.textContent = "Network error. Try again.";
      uploadMsg.classList.remove("text-green-600");
      uploadMsg.classList.add("text-red-700");
    }
  });
});
