$(document).ready(function() {
  addEventListeners();
  adjustFooterDivFloat($(window).width());
  adjustFooterCopyright($(window).width());
  adjustOuterContainerWidth($(window).width());
  adjustEventListElementOrientation($(window).width());
  adjustEventDetailsOrientation($(window).width());
  adjustFormWidth($(window).width());
  adjustBoardOrientation($(window).width());
  changeBoardLabelText($(window).width());
  $("#my-carousel").carousel({interval: 5000}); //transition every 5 seconds
});

function addEventListeners() {

  $("#footer-snapchat-icon").click(function() {
    $("#snapchat-code-container").css("display", "block");
  });

  $("#contact-snapchat-icon").click(function() {
    $("#snapchat-code-container").css("display", "block");
  });

  $("#snapchat-code-container").click(function() {
    $("#snapchat-code-container").css("display", "none");
  });

  $("#snapchat-code").click(function(e) {
    e.stopPropagation();
  });

  $(window).resize(function() {
    if( $(this).width() >= 740 && $("#navbar-content").attr("aria-expanded") == "true" ) {
      $("#navbar-toggle").click();
    }
    adjustFooterDivFloat($(this).width());
    adjustFooterCopyright($(this).width());
    adjustOuterContainerWidth($(this).width());
    adjustEventListElementOrientation($(this).width());
    adjustEventDetailsOrientation($(this).width());
    adjustFormWidth($(this).width());
    adjustBoardOrientation($(this).width());
    changeBoardLabelText($(this).width());
  });

}

//change copyright text based on window size
function adjustFooterCopyright(width) {
  if(width <= 600) {
    document.getElementById("copyright-text").innerHTML = "© UMCP TASA";
  } else {
    document.getElementById("copyright-text").innerHTML = "© UMCP Taiwanese American Student Association";
  }
}

//change between horizontal and vertical arrangment
function adjustFooterDivFloat(width) {
  if(width <= 400) {
    document.getElementById("footer-right").style.cssFloat = "none";
    document.getElementById("footer-left").style.cssFloat = "none";
  } else {
    document.getElementById("footer-right").style.cssFloat = "right";
    document.getElementById("footer-left").style.cssFloat = "left";
  }
}

//change outer container width
function adjustOuterContainerWidth(width) {
    if(width >= 1024) {
      $(".outer-content-container").css("width", "70%");
      $(".outer-content-container").css("min-width", "1024px");
    } else {
      $(".outer-content-container").css("width", "100%");
      $(".outer-content-container").css("min-width", "100%");
    }
}

//change event list elements orientation
function adjustEventListElementOrientation(width) {
  var eventListElements = document.getElementsByClassName("event-button");
  for(var i = 0; i < eventListElements.length; i++) {
    if(width < 1024) {
      eventListElements[i].getElementsByClassName("list-inline")[0].className = "list-inline vertical-list";
    } else {
      eventListElements[i].getElementsByClassName("list-inline")[0].className = "list-inline";
    }
  }
}

//change event details orientation
function adjustEventDetailsOrientation(width) {
  var eventElements = document.getElementsByClassName("event-contents");
  for(var i = 0; i < eventElements.length; i++) {
    if(width < 922) {
      eventElements[i].className = "event-contents vertical";
    } else {
      eventElements[i].className = "event-contents";
    }
  }
}

//change form input width
function adjustFormWidth(width) {
  var inputElements = document.getElementsByTagName("input");
  for(var i = 0; i < inputElements.length; i++) {
    if(width < 543) {
      inputElements[i].style.width = "100%";
    } else {
      inputElements[i].style.width = "auto";
    }
  }
}

//adjust board bio orientation
function adjustBoardOrientation(width) {
  var bios = document.getElementsByClassName("bio-container");
  for(var i = 0; i < bios.length; i++) {
    if(width < 1024) {
      bios[i].classList.add("vertical");
    } else {
      bios[i].classList.remove("vertical");
    }
  }
}

//change board label text
function changeBoardLabelText(width) {
  var nameTitle = document.getElementsByClassName("name-title");
  var yearMajor = document.getElementsByClassName("year-major");
  for(var i = 0; i < nameTitle.length; i++) {
    if(width < 500) {
      nameTitle[i].innerHTML = "<br>";
    } else {
      nameTitle[i].innerHTML = "|";
    }
  }

  for(var i = 0; i < yearMajor.length; i++) {
    if(width < 500) {
      yearMajor[i].innerHTML = "<br>";
    } else {
      yearMajor[i].innerHTML = ",";
    }
  }
}
