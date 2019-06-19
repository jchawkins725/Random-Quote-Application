const text = document.getElementById('text');
const author = document.getElementById('author');
const button = document.getElementById('new-quote');
const container = document.getElementById('quote-author');

//first quote render
fetch('https://quota.glitch.me/random')
.then(response => response.json())
.then(data => {
  text.innerHTML = data.quoteText;
  author.innerHTML = "- " + data.quoteAuthor + " -";
  $("#quote-author").animate(
    { opacity: 1 }, 1000,
  );
});

//quote render on click
button.onclick = function change() {
  fetch('https://quota.glitch.me/random')
  .then(response => response.json())
  .then(data => {
    setTimeout (function () {
      text.innerHTML = data.quoteText;
      author.innerHTML = "- " + data.quoteAuthor + " -";}, 500);
    $("#quote-author").animate(
      { opacity: 0 }, 500,
       function() {
         $(this).animate({ opacity: 1}, 500);
    });
  })
};
  
  
  $("#tweet-quote").click(function(event){
    event.preventDefault();
    window.open("https://twitter.com/intent/tweet?hashtags=quotes&text=" + "''" + text.innerHTML + "'' " + author.innerHTML.substring(0, author.innerHTML.length - 1)
  )});