site_likes = 5773
liked = false
form_open = false
let variableDisplay = document.getElementById('variableDisplay');
var my_envelope_div = document.getElementById('my_envelope');


my_envelope_div.addEventListener('click', function() {
  form_open = !form_open
  if (form_open){
    document.getElementById('contactForm').style.display = 'block';
  }else{
    document.getElementById('contactForm').style.display = 'none';
  }
});

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
