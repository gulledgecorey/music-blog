var replyButton = document.querySelector("#reply");

replyButton.addEventListener("click", function (event) {
  document.location.replace(`/single-songpost/${event.target.dataset.songid}`);
  //console.log(`${event.target.dataset.songid}`);
});
