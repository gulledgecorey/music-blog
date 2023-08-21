// const commentFormHandler = async (event) => {
//   event.preventDefault();
//   const post = document.querySelector(".song-comment").value.trim();
//   const songposts_id = `${event.target.dataset.songid}`;

//   if (post && songposts_id) {
//     const response = await fetch("/api/comments", {
//       method: "POST",
//       body: JSON.stringify({ post, songposts_id }),
//       headers: { "Content-Type": "application/json" },
//     });
//     // console.log(songposts_id);
//     if (response.ok) {
//       document.location.replace(
//         `/single-songpost/${event.target.dataset.songid}`
//       );
//     } else {
//       alert("Failed to submit comment.");
//     }
//   }
// };

// const exitPage = () => {
//   //console.log("exit button");
//   document.location.replace("/songposts");
// };
// document.querySelector(".exit-button-2").addEventListener("click", exitPage);
// //document.reload;
// document
//   .querySelector(".comments-form")
//   .addEventListener("submit", commentFormHandler);
