var feedbtn = document.querySelector(".feedback-entry");
var popupfeed = document.querySelector(".feedback-section");
var close = popupfeed.querySelector(".feedback-close");
var form = document.querySelector(".feedback");
var name = popupfeed.querySelector("[name=username]");
var email = popupfeed.querySelector("[name=useremail]")
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}



feedbtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupfeed.classList.add("modal-show");
  if (storage) {
    name.value = storage;
  
  

  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupfeed.classList.remove("modal-show");
  popupfeed.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    popupfeed.classList.remove("modal-error");
    popupfeed.offsetWidth = popupfeed.offsetWidth
    popupfeed.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value)

    }
  }


});



