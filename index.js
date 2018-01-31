const titles = ["passion", "dedication", "skill", "name"];
addEventListeners();
startTitles();

function addEventListeners() {
  for(var i = 0; i < titles.length; i++) {
    document.getElementById(titles[i])
      .addEventListener("animationend", triggerNextTitle)
  }
}

function triggerNextTitle(event) {
    var nextTitle = $("#" + titles[titles.indexOf(event.target.id) + 1]);
    if (nextTitle.length) {
      nextTitle.addClass("slideAcross");
    } else {
      finishAnimation()
    }
}

function startTitles() {
  $("#" + titles[0]).addClass("slideAcross");
}

function finishAnimation() {
  $("#info").addClass("fadeIn");
}
