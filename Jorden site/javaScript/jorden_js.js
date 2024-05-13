site_likes = 5773
liked = false
let variableDisplay = document.getElementById('variableDisplay');

variableDisplay.innerHTML = myVariable;

function click_like_button(){
    liked = !liked;
    if (liked) {
      site_likes++;
      document.getElementById('likeButton').innerHTML = 'Liked';
    } else {
      site_likes--;
      document.getElementById('likeButton').innerHTML = 'Like';
    }
    document.getElementById('likeCount').innerHTML = site_likes;
}
  