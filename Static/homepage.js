const likeBtn = document.querySelector(".likes")
const likeIcon = document.querySelector("#like")
const likecount = document.querySelector('#count')

const dislikeBtn = document.querySelector(".dislikes")
const dislikeIcon = document.querySelector("#dislike")
const dislikeCount = document.querySelector('#dislike_count')

let likeClicked = false;
let dislikeClicked = false;

likeBtn.addEventListener("click", () =>{
    if(!likeClicked) {
        likeClicked = true;
        likeIcon.innerHTML = '<i class="fas fa-thumbs-up"></i>'
        likeIcon.style.color = "blue";
        likecount.textContent++
        // dislike button black
    }
    else{
        likeClicked = false
        likeIcon.innerHTML = '<i class="far fa-thumbs-up"></i>'
        likeIcon.style.color = "black";
        likecount.textContent--
    }
});

dislikeBtn.addEventListener("click", () =>{
    if(!dislikeClicked) {
        dislikeClicked = true;
        dislikeIcon.innerHTML = '<i class="fas fa-thumbs-down"></i>'
        dislikeIcon.style.color = "red"
        dislikeCount.textContent++
        // like button black
    }
    else{
        dislikeClicked = false
        dislikeIcon.innerHTML = '<i class="far fa-thumbs-down"></i>'
        dislikeIcon.style.color = "black"
        dislikeCount.textContent--
    }
});

function test(fun){
  console.log('function test ran')
  fetch('/expanded_post', {
      method: 'POST',
      //body: JSON.stringify({likes: 1}),
  }).then((response) => {
  console.log(response)
  });
}
