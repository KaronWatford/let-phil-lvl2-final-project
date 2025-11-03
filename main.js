const quotes = [
    "The only true wisdom is in knowing you know nothing. – Socrates",
    "In the middle of difficulty lies opportunity. – Albert Einstein",
    "Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom. – Viktor E. Frankl",
    "Life is not a problem to be solved, but a reality to be experienced. – Søren Kierkegaard",
    "Waste no more time arguing about what a good person should be. Be one. – Marcus Aurelius",
    "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life. – Albert Camus",
    "Preocupied with a single leaf you do not see the tree. – Zen Proverb",
    "He who has a why to live can bear almost any how. – Friedrich Nietzsche",
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "The unexamined life is not worth living. – Socrates"
];

document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const container = document.getElementById('daily-quote');

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;

    container.classList.add('visible');
});