site_likes = 245748
liked = false
form_open = false
let variableDisplay = document.getElementById('variableDisplay');
var my_envelope_div = document.getElementById('my_envelope');

//emoji picker

document.getElementById('emoji').addEventListener('change', function() {
  var emoji = this.value;
  var messageTextarea = document.getElementById('message');
  messageTextarea.value += emoji;
});


//open and close the contact us form
my_envelope_div.addEventListener('click', function() {
  form_open = !form_open
  if (form_open){
    document.getElementById('emailForm').style.display = 'block';
    document.getElementById('message').value = " "
    document.getElementById('email').value = " "
    document.getElementById('name').value = " "
    document.getElementById('emoji').value = "Select Emoji"
  }else{
    document.getElementById('emailForm').style.display = 'none';
  }
});

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

document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  
  const name = document.getElementById('name').value + "\n email: " + document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const email = 'kobizagurikobi@gmail.com';

  const mailtoLink = `mailto:${email}?subject=Message from ${name}&body=${encodeURIComponent(message)}`;
  
  window.location.href = mailtoLink;
});
