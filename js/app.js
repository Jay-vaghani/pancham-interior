// Loader JS

const loaderPage = document.getElementById("loader");
const vid = document.getElementById("vid")
const page = document.getElementById("cover");

const loaderBtn = document
  .getElementById("loader-btn")
  .addEventListener("click", () => {
    localStorage.setItem("loaded", "true");
    vid.remove();
    loaderPage.remove();
  });

window.addEventListener("load", () => {

  if (localStorage.getItem("loaded") === "true") {
    loaderPage.remove();
    vid.remove();
  } else {
    loaderPage.style.display = "flex";
  }
});

// Email JS

let contactForm = document.getElementsByClassName("contact-form")[0];

const sjc = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let textarea = document.getElementById("textarea").value;

  Email.send({
    SecureToken: "6f93c6fd-285e-4d9f-9f0f-4e6c19e6fa44",
    To: "vaghanijay20@gmail.com",
    From: "vaghanijay20@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
};
