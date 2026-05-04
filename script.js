// LOADER
window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);

});

// SIDEBAR
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu(){
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}

// SCROLL TOP BUTTON
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){
    topBtn.style.display = "block";
  }else{
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});

// EMAIL JS
emailjs.init("ISI_PUBLIC_KEY_KAMU");

// CONTACT FORM
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

  e.preventDefault();

  const templateParams = {

    from_name: document.getElementById("nama").value,

    from_email: document.getElementById("email").value,

    message: document.getElementById("pesan").value,

    to_email: "areksuroboyo112@gmail.com"

  };

  emailjs.send(
    "ISI_SERVICE_ID_KAMU",
    "ISI_TEMPLATE_ID_KAMU",
    templateParams
  )

  .then(() => {

    alert("Keluhan berhasil dikirim!");

    contactForm.reset();

  })

  .catch((error) => {

    alert("Gagal mengirim pesan!");

    console.log(error);

  });

});

// BELI BUTTON
const buyButtons = document.querySelectorAll(".card-content button");

buyButtons.forEach(button => {

  button.addEventListener("click", () => {

    alert("Menu berhasil ditambahkan!");

  });

});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){

      target.scrollIntoView({
        behavior:"smooth"
      });

      closeMenu();

    }

  });

});