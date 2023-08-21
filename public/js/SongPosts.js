var replyButton = document.querySelector("#reply");

replyButton.addEventListener("click", function (event) {
  console.log(`${event.target.dataset.songid}`);
  document.location.replace(`/single-songpost/${event.target.dataset.songid}`);
  
});
 