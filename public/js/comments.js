const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const commentInput = document.querySelector(".comment-input").value.trim();
  
    if (commentInput) {
      try {
        const response = await fetch("/api/comments", {
          method: "POST",
          body: JSON.stringify({ commentText: commentInput }),
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.ok) {
          const newComment = await response.json();
          document.querySelector(".comment-input").value = "";
  
          const commentList = document.querySelector(".comment-list");
          const newCommentDiv = document.createElement("div");
          newCommentDiv.classList.add("comment");
          newCommentDiv.textContent = newComment.comment;
          commentList.appendChild(newCommentDiv);
        } else {
          alert("Failed to submit comment.");
        }
      } catch (error) {
        console.error("Error submitting comment:", error);
      }
    }
  };
  

  
  document
  .querySelector(".comments-form")
  .addEventListener("submit", commentFormHandler);
  