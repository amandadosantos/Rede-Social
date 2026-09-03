document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.querySelector(".like-btn");
  const likeCountSpan = document.querySelector(".like-count");
  const postMedia = document.querySelector(".post-media");
  const bookmarkBtn = document.querySelector(".bookmark-btn");

  let baseLikes = 1200;
  let isLiked = false;

  function formatLikes(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  }

  likeCountSpan.textContent = formatLikes(baseLikes);

  function animateSvg(element) {
    const svg = element.querySelector("svg");
    if (svg) {
      svg.style.transform = "scale(1.3)";
      setTimeout(() => {
        svg.style.transform = "scale(1)";
      }, 150);
    }
  }

  function addLike() {
    if (!isLiked) {
      baseLikes++;
      isLiked = true;
      likeBtn.classList.add("liked");
      likeCountSpan.textContent = formatLikes(baseLikes);
      animateSvg(likeBtn);
    }
  }

  function removeLike() {
    if (isLiked) {
      baseLikes--;
      isLiked = false;
      likeBtn.classList.remove("liked");
      likeCountSpan.textContent = formatLikes(baseLikes);
      animateSvg(likeBtn);
    }
  }

  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isLiked) {
      removeLike();
    } else {
      addLike();
    }
  });

  if (postMedia) {
    postMedia.addEventListener("click", (e) => {
      e.stopPropagation();
      addLike();
    });
  }

  if (bookmarkBtn) {
    let isBookmarked = false;
    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isBookmarked = !isBookmarked;
      bookmarkBtn.classList.toggle("bookmarked", isBookmarked);
      animateSvg(bookmarkBtn);
    });
  }
});