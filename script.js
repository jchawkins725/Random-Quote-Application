const text = document.getElementById("text");
const author = document.getElementById("author");

function quoteCall(delay) {
  fetch("https://quota.glitch.me/random")
    .then(response => response.json())
    .then(data => {
      setTimeout(function() {
        $('#text').html(data.quoteText);
        $('#author').html("- " + data.quoteAuthor + " -");
      }, delay);
      $("#quote-author").animate({ opacity: 0 }, delay, function() {
        $(this).animate({ opacity: 1 }, 500);
      });
    });
}

$("#new-quote").click(function() {
  quoteCall(500);
});

$(document).ready(function() {
  quoteCall(0);
});

$("#tweet-quote").click(function(event) {
  event.preventDefault();
  window.open(
    "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
      "''" +
      text.innerHTML +
      "'' " +
      author.innerHTML.substring(0, author.innerHTML.length - 1)
  );
});
