var inputboxes = document.getElementsByTagName("input");

$(document).ready(function() {

  for(var i = 0; i < inputboxes.length; i++) {
    inputboxes[i].addEventListener("focus", function(e) {
      if(this.getAttribute("data-defaulttext") == this.value) {
        this.value = "";
      }
    });
    inputboxes[i].addEventListener("blur", function(e) {
      if(this.value == "") {
        this.value = this.getAttribute("data-defaulttext");
        this.setAttribute("data-filled", "false");
      } else {
        this.setAttribute("data-filled", "true");
      }
    });
  }

  document.getElementById("message").addEventListener("focus", function(e) {
    if(this.getAttribute("data-defaulttext") == this.value) {
      this.value = "";
    }
  });
  document.getElementById("message").addEventListener("blur", function(e) {
    if(this.value == "") {
      this.value = this.getAttribute("data-defaulttext");
      this.setAttribute("data-filled", "false");
    } else {
      this.setAttribute("data-filled", "true");
    }
  });

  $("#sign-up-submit").click(function(e) {
    signUp();
  });

  $("#send-message-submit").click(function(e) {
    sendMessage();
  });

});

//checks for any empty boxes, notifies the user if any are present, opens the url
function signUp() {
  for(var i = 0; i < 2; i++) {
    if(inputboxes[i].getAttribute("data-filled") == "false") {
      $("#sign-up-error").css("display", "block");
      return;
    }
  }
  $("#sign-up-error").css("display", "none");
  window.open(formSignUpURL(inputboxes[0].value, inputboxes[1].value), '_blank');
  resetSignUpForm();
}

//parses user sign up information and forms the appropriate google form URL
function formSignUpURL(name, email) {
  var url = "https://docs.google.com/forms/d/e/1FAIpQLSf2sji4j_ptXoKWXH7iB6sdEAiB_mtRi6a2fp-nc67zvn6VaQ/formResponse?"
  url += "entry.961131194=" + encodeURIComponent(name) + "&";
  url += "entry.55753487=" + encodeURIComponent(email) + "&";
  url += "submit=Submit";
  return url;
}

//reset sign up form by setting data filled to false and setting value to default text
function resetSignUpForm() {
  for(var i = 0; i < 2; i++) {
    inputboxes[i].value = inputboxes[i].getAttribute("data-defaulttext");
    inputboxes[i].setAttribute("data-filled", "false");
  }
}

//checks for any empty boxes, notifies the user if any are present, opens the url
function sendMessage() {
  for(var i = 2; i < 5; i++) {
    if(inputboxes[i].getAttribute("data-filled") == "false") {
      $("#send-message-error").css("display", "block");
      return;
    }
  }
  $("#send-message-error").css("display", "none");
  window.open(formMessageURL(inputboxes[2].value, inputboxes[3].value, inputboxes[4].value, $("#message").val()), '_blank');
  resetMessageForm();
}

//parses user message information and forms the appropriate google form URL
function formMessageURL(name, email, subject, message) {
  var url = "https://docs.google.com/forms/d/e/1FAIpQLSdSxsMt_yIICe1qkQTk7A7iRfoY-SMbyDn6VPKjV6Iw4lv04Q/formResponse?"
  url += "entry.1837640053=" + encodeURIComponent(name) + "&";
  url += "entry.882014927=" + encodeURIComponent(email) + "&";
  url += "entry.1035462743=" + encodeURIComponent(subject) + "&";
  url += "entry.1184078844=" + encodeURIComponent(message) + "&";
  url += "submit=Submit";
  return url;
}

//reset message form by setting data filled to false and setting value to default text
function resetMessageForm() {
  for(var i = 2; i < 5; i++) {
    inputboxes[i].value = inputboxes[i].getAttribute("data-defaulttext");
    inputboxes[i].setAttribute("data-filled", "false");
  }
  document.getElementById("message").value = document.getElementById("message").getAttribute("data-defaulttext");
  document.getElementById("message").setAttribute("data-filled", "false");
}
