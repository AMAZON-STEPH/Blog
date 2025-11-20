import { cookies } from "../Myjsfiles/cookie.js";

document.addEventListener("DOMContentLoaded", () => {
  const { getCookie } = cookies();
  const token = getCookie("authtoken");

  const accountForm = document.getElementById("accountForm");
  const passwordForm = document.getElementById("passwordForm");

  const accountMsg = document.getElementById("accountMsg");
  const passwordMsg = document.getElementById("passwordMsg");

  const userNameInput = document.getElementById("userName");
  const userEmailInput = document.getElementById("userEmail");
  const profilePicInput = document.getElementById("profilePic");

  // Pre-fill user info
  userNameInput.value = getCookie("userName") || "";
  userEmailInput.value = getCookie("userEmail") || "";

  // Cloudinary upload helper
  async function uploadToCloudinary(file) {
    const url = `https://api.cloudinary.com/v1_1/di9adjiow/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned");
    formData.append("cloud_name", "di9adjiow");

    const res = await fetch(url, { method: "POST", body: formData });
    const data = await res.json();

    if (!res.ok) throw new Error(data.error?.message || "Cloudinary upload failed");
    return data.secure_url;
  }

  // --- Update Account Info ---
  accountForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    accountMsg.textContent = "";
    const name = userNameInput.value.trim();
    const email = userEmailInput.value.trim();
    const file = profilePicInput.files[0];

    if (!name || !email) {
      accountMsg.textContent = "Name and email are required.";
      accountMsg.className = "text-red-600";
      return;
    }

    try {
      let picUrl;
      if (file) picUrl = await uploadToCloudinary(file);

      const updateData = { name, email };
      if (picUrl) updateData.profilePic = picUrl;

      const res = await fetch("https://newsapi-w6iw.onrender.com/api/users/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(updateData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update account info");

      accountMsg.textContent = "Account info updated successfully!";
      accountMsg.className = "text-green-600";

      // Update cookies
      document.cookie = `userName=${name}; path=/`;
      document.cookie = `userEmail=${email}; path=/`;
    } catch (err) {
      console.error(err);
      accountMsg.textContent = err.message;
      accountMsg.className = "text-red-600";
    }
  });

  // --- Change Password ---
  passwordForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    passwordMsg.textContent = "";

    const current = document.getElementById("currentPassword").value.trim();
    const newPass = document.getElementById("newPassword").value.trim();
    const confirmPass = document.getElementById("confirmPassword").value.trim();

    if (!current || !newPass || !confirmPass) {
      passwordMsg.textContent = "All fields are required.";
      passwordMsg.className = "text-red-600";
      return;
    }

    if (newPass !== confirmPass) {
      passwordMsg.textContent = "New password and confirm password do not match.";
      passwordMsg.className = "text-red-600";
      return;
    }

    try {
      const res = await fetch("https://newsapi-w6iw.onrender.com/api/users/change-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ currentPassword: current, newPassword: newPass }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to change password");

      passwordMsg.textContent = "Password changed successfully!";
      passwordMsg.className = "text-green-600";
      passwordForm.reset();
    } catch (err) {
      console.error(err);
      passwordMsg.textContent = err.message;
      passwordMsg.className = "text-red-600";
    }
  });
});
