site_likes = 5773
liked = false
form_open = false
let variableDisplay = document.getElementById('variableDisplay');
var my_envelope_div = document.getElementById('my_envelope');

//emoji picker

document.getElementById('emojiSelect').addEventListener('change', function() {
  var emoji = this.value;
  var messageTextarea = document.getElementById('message_form_1');
  messageTextarea.value += emoji;
});


//open and close the contact us form
my_envelope_div.addEventListener('click', function() {
  form_open = !form_open
  if (form_open){
    document.getElementById('contactForm').style.display = 'block';
  }else{
    document.getElementById('contactForm').style.display = 'none';
  }
});

variableDisplay.innerHTML = myVariable;
// like and unlike the page
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

