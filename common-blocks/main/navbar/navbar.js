const menuToggle = () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navbarContent = document.getElementById("navbarContent");

  navToggle.addEventListener("click", () => {
    navbarContent.classList.toggle("navbar__collapse-show");
  });
};

menuToggle();
