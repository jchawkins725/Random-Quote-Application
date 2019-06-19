const quotes = [
  {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  author: "Nelson Mandela"},
  {quote: "The way to get started is to quit talking and begin doing.",
  author: "Walt Disney"},
  {quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  author: "Steve Jobs"},
  {quote: "If life were predictable it would cease to be life, and be without flavor.",
  author: "Eleanor Roosevelt"},
  {quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  author: "Oprah Winfrey"},
  {quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  author: "James Cameron"},
  {quote: "Life is what happens when you're busy making other plans.",
  author: "John Lennon"},
  {quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  author: "Mother Teresa"},
  {quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  author: "Benjamin Franklin"},
  {quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  author: "Helen Keller"},
]

const text = document.getElementById('text');
const author = document.getElementById('author');
const button = document.getElementById('new-quote');

fetch('https://quota.glitch.me/random')
.then(response => response.json())
.then(data => {
  text.innerHTML = data.quoteText;
  author.innerHTML = "- " + data.quoteAuthor + " -";
})

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
}

  const randomnumber = Math.floor(Math.random()* quotes.length);
  let currentQuote = quotes[randomnumber].quote;
  let currentAuthor = quotes[randomnumber].author;
  
  //first quote render
  //$("#text").html(currentQuote);
  //$("#author").html("- " + currentAuthor + " -");
  
  //new quote render
  //$("#new-quote").click(function() {
    //const random = Math.floor(Math.random()* quotes.length);
    //currentQuote = quotes[random].quote;
    //currentAuthor = quotes[random].author;
    //setTimeout (function () {
      //  $("#text").html(currentQuote);
        //$("#author").html("- " + currentAuthor + " -");}, 500)   
    //$("#quote-author").animate(
      //  { opacity: 0 },
        //500,
        //function() {
          //  $(this).animate({ opacity: 1}, 500);
  //  });
 // });
  
  
  $("#tweet-quote").click(function(event){
    event.preventDefault();
    window.open("https://twitter.com/intent/tweet?hashtags=quotes&text=" + "''" + currentQuote + "''" + " " + currentAuthor
  )});