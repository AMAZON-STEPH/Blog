import { cookies } from "../Myjsfiles/cookie.js";

document.addEventListener("DOMContentLoaded", async () => {
  const menuItems = document.querySelectorAll(".menu-item");
  const sections = document.querySelectorAll("main section");
  const uploadForm = document.getElementById("uploadForm");
  const uploadMsg = document.getElementById("uploadMsg");
  const img = document.getElementById("imageUrl");
  const sidebar = document.getElementById("sidebar");
  const newpost = document.getElementById("Recentpost");
  const preview = document.getElementById("preview");
  const categorySelector = document.getElementById("category");
  const Recentposts = document.getElementById("Recentposts");

  const { getCookie } = cookies();
  const token = getCookie("authtoken");

  if (!token) {
    uploadMsg.textContent = "You are not logged in. Redirecting to login...";
    uploadMsg.classList.add("text-red-600");
    setTimeout(() => (window.location.href = "/index.html"), 1000);
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

      sidebar.classList.add("-translate-x-full");
    });
  });

  document.getElementById("toggleSidebar").addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
  });

  document.getElementById("newPost").addEventListener("click", () => {
    const upload = document.getElementById("upload");
    upload.classList.remove("hidden");
    upload.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  try {
    const res = await fetch("https://newsapi-w6iw.onrender.com/api/categories");
    const data = await res.json();

    categorySelector.innerHTML = `<option value="" disabled selected>Select category</option>`;
    data.forEach((categ) => {
      const option = document.createElement("option");
      option.value = categ.name;
      option.textContent = categ.name;
      categorySelector.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  img.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      preview.src = URL.createObjectURL(file);
      preview.style.display = "block";
    }
  });

  async function uploadToCloudinary(file) {
    const url = `https://api.cloudinary.com/v1_1/di9adjiow/upload`;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned");
    formData.append("cloud_name", "di9adjiow");

    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Cloudinary error:", data);
        throw new Error(data.error?.message || "Cloudinary upload failed");
      }

      return data.secure_url;
    } catch (err) {
      console.error("Cloudinary error:", err);
      throw err;
    }
  }

  uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const article = document.getElementById("article").value.trim();
    const category = categorySelector.value;
    const file = img.files[0];

    if (!title || !article || !category || !file) {
      uploadMsg.textContent = "Please fill out all fields.";
      uploadMsg.classList.add("text-red-600");
      return;
    }

    try {
      const picUrl = await uploadToCloudinary(file);

      const newsData = {
        id: Date.now().toString(),
        title,
        shortDescription:
          article.length > 100 ? article.slice(0, 100) + "..." : article,
        content: article,
        category,
        picUrl,
        timetoread: "5 min",
        datePosted: new Date().toISOString(),
        isTrending: true,
        isLiveUpdate: false,
        user: {
          _id: getCookie("userId"),
          email: getCookie("userEmail"),
          name: getCookie("userName"),
        },
      };
  
      const res = await fetch("https://newsapi-w6iw.onrender.com/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newsData),
      });

      const data = await res.json();

      if (res.status === 401) {
        uploadMsg.textContent = "Unauthorized. Please login again.";
        uploadMsg.classList.add("text-red-600");
        setTimeout(() => (window.location.href = "../index.html"), 1500);
        return;
      }

      if (!res.ok){
        console.error("Backend error:", data);
        uploadMsg.textContent = data.error || "Failed to upload news";
        uploadMsg.classList.add("text-red-600");
        return;
      }

      uploadMsg.textContent = "News uploaded successfully!";
      uploadMsg.classList.add("text-green-600");
      preview.style.display = "none";
      uploadForm.reset();
    } catch (err) {
      console.error("Upload failed:", err);
      uploadMsg.textContent = "Network error";
      uploadMsg.classList.add("text-red-600");
    }
  });
});
