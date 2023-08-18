const newPostFormHandler = async (event) => {
  event.preventDefault();
  const song_link = document.querySelector(".spotify-link-box").value.trim();
  const post = document.querySelector(".comment-box").value.trim();

  if (song_link && post) {
    const response = await fetch("/api/songpost", {
      method: "POST",
      body: JSON.stringify({ song_link, post }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/new-post");
    } else {
      alert("Spotify link is invalid.");
    }
  }
};

document
  .querySelector(".post-form")
  .addEventListener("submit", newPostFormHandler);
