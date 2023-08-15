const getUsersButton = document.querySelector(".get-users-button");
const userGrid = document.getElementById("userGrid");
const loaderContainer = document.querySelector(".loader-container");

getUsersButton.addEventListener("click", getUsers);

async function getUsers() {
  loaderContainer.style.display = "flex";

  try {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    const users = data.data;

    userGrid.innerHTML = "";
    users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");
      userCard.innerHTML = `
        <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
        <h3>${user.first_name} ${user.last_name}</h3>
        <p>Email: ${user.email}</p>
      `;
      userGrid.appendChild(userCard);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    loaderContainer.style.display = "none";
  }
}
