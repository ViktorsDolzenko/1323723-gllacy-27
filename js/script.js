var feedbtn = document.querySelector(".feedback-entry");
var popupfeed = document.querySelector(".feedback-section");
var form = document.querySelector(".feedback");
if (popupfeed) {


  var closeBtn = popupfeed.querySelector(".feedback-close");
  var userName = popupfeed.querySelector("[name=username]");
  var userEmail = popupfeed.querySelector("[name=useremail]");
};
var isStorageSupport = true;
var storage = "";
var catalog = document.querySelector(".catalog");
var search = document.querySelector(".search");
var userLogin = document.querySelector(".login-li");

var setListner = function (target, type, listner) {
  if (!target) {
    return;
  }
  target.addEventListener(type, listner);
}

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

setListner(feedbtn, "click", function (evt) {
  evt.preventDefault();
  popupfeed.classList.add("modal-show");
  userName.focus();
  if (storage) {
    userName.value = storage;



  }
});

setListner(closeBtn, "click", function (evt) {
  evt.preventDefault();
  popupfeed.classList.remove("modal-show");
  popupfeed.classList.remove("modal-error");
});

setListner(form, "submit", function (evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    popupfeed.classList.remove("modal-error");
    popupfeed.offsetWidth = popupfeed.offsetWidth
    popupfeed.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", userName.value)
    }
  }


});


setListner(catalog, "click", function (keytoOpen) {
  catalog.classList.toggle("dropdown-active");

});
setListner(search, "click", function (keytoOpen) {
  search.classList.toggle("search-active");
});

setListner(userLogin, "click", function (keytoOpen) {
  userLogin.classList.toggle("login-active");
});
