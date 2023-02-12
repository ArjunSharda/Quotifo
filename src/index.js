
class QUOTES {
    constructor(quote, author) {
        this.quote = quote;
        this.author = author;
    }
}

const quotes = [
    new QUOTES("You miss 100% of the shots you don't take.",
        "Wayne Gretzky"
    ),
    new QUOTES(
        "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
        "Michael Jordan"
    ),
    new QUOTES(
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
        "Amelia Earhart"
    ),
    new QUOTES(
        "Every strike brings me closer to the next home run.",
        "Babe Ruth"
    ),
    new QUOTES(
        "Definiteness of purpose is the starting point of all achievement.",
        "W. Clement Stone"
    ),
    new QUOTES(
        "Life isn't about getting and having, it's about giving and being.",
        "Kevin Kruse"
    ),
    new QUOTES(
        "Life is what happens to you while you're busy making other plans.",
        "John Lennon"
    ),
    new QUOTES(
        "We become what we think about.",
        "Earl Nightingale"
    ),
    new QUOTES(
        "Strive not to be a success, but rather to be of value.",
        "Albert Einstein"
    ),
    new QUOTES(
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        "Robert Frost"
    ),
    new QUOTES(
        "I attribute my success to this: I never gave or took any excuse.",
        "Florence Nightingale"
    ),
    new QUOTES(
        "A person who never made a mistake never tried anything new.",
        "Albert Einstein"
    ),
    new QUOTES(
        "The person who says it cannot be done should not interrupt the person who is doing it.",
        "Chinese Proverb"
    ),
    new QUOTES(
        "The only person you are destined to become is the person you decide to be.",
        "Ralph Waldo Emerson"
    ),
    new QUOTES(
        "Go confidently in the direction of your dreams. Live the life you have imagined.",
        "Henry David Thoreau"
    ),
    new QUOTES(
        "The two most important days in your life are the day you are born and the day you find out why.",
        "Mark Twain"
    ),
    new QUOTES(
        "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
        "Johann Wolfgang von Goethe"
    ),
    new QUOTES(
        "The best revenge is massive success.",
        "Frank Sinatra"
    ),
    new QUOTES(
        "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily.",
        "Zig Ziglar"
    ),
    new QUOTES(
        "Life shrinks or expands in proportion to one's courage.",
        "Anais Nin"
    ),
    new QUOTES(
        "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
        "Vincent Van Gogh"
    ),
    new QUOTES(
        "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        "Aristotle"
    ),
    new QUOTES(
        "Nothing is impossible, the word itself says 'I'm possible!'",
        "Audrey Hepburn"
    ),
    new QUOTES(
        "No matter what people tell you, words and ideas can change the world.",
        "Robin Williams"
    ),
    new QUOTES(
        "The only way to do great work is to love what you do.",
        "Steve Jobs"
    ),

];


function randomQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}

function Quote(number) {
    // Gets a quote from choosing a number
    // Example: Quote(1) returns the first quote
    return quotes[number - 1];
}

module.exports = {
    randomQuote: () => {
        return randomQuote()
    },
    
    quote: (number) => {
        return Quote(number)
    },
}
