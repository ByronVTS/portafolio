  const menuIcon = document.getElementById("menuIcon");
  const menuMobile = document.getElementById("menuMobile");

  menuIcon.addEventListener("click", function toggleClass() {
    const menuMobile = document.getElementById("menuMobile");
    menuMobile.classList.toggle("inactive");
  });
  
