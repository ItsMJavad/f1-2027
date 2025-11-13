const qnumber = Math.floor(Math.random() * 10);
const quotes = [
    "Lewis Hamilton - “In racing there are always things you can learn, every single day. There is always space for improvement, and I think that applies to everything in life.”",
    "Ayrton Senna - “If you no longer go for a gap that exists, you're no longer a racing driver.”",
    "Daniel Ricciardo - “Sometimes you've just got to lick the stamp and send it.”",
    "Sebastian Vettel - “We have to remember these days. There is no guarantee they will last forever. Enjoy them as long as they last.”",
    "Michael Schumacher - “I've always believed that you should never, ever give up and you should always keep fighting even when there's only a slightest chance.”",
    "Kimi Räikkönen - “Just leave me alone, I know what to do.”",
    "Ron Dennis - “You don't expect to be at the top of the mountain the day you start climbing.”",
    "Graham Hill - “I am an artist. The track is my canvas and my car is my brush.”",
    "Felipe Massa - “When you give up your hunger for success you are not racing full-heartedly anymore. Just to be there, that is not my style.”",
    "Fernando Alonso - “All the time you have to leave a space!”"
];
const quoteP = document.getElementById("quote");
quoteP.innerHTML = quotes[qnumber];