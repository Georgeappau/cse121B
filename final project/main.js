import { getQuotes } from './quotes.js';
  
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

let quotes = [];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const displayRandomQuote = () => {
  const { text, author } = getRandomQuote();
  quoteElement.textContent = text;
  authorElement.textContent = author || 'Unknown';
};

newQuoteButton.addEventListener('click', displayRandomQuote);

const init = async () => {
  quotes = await getQuotes();
  displayRandomQuote();
};

init();