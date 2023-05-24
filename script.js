button = document.getElementById('joke-btn');
joke = document.getElementById('joke');

const tedLassoQuotes = [
  "Football is life!",
  "Be curious, not judgmental.",
  "I believe in hope, not fear.",
  "Do you believe in ghosts? Because I think my office might be haunted.",
  "Takin' on a challenge is a lot like riding a horse. If you're comfortable while you're doin' it, you're probably doin' it wrong.",
  "I know that I talk a lot... and I'm comfortable with that.",
  "Do you believe in miracles? Yes!",
  "I'm gonna treat them like they're the greatest football team in the world, because they are!",
  "There's two buttons I never like to hit: panic and snooze. I'd have to say right now we're in that panic button.",
  "I'd be curious to know how many times you've looked in the mirror this morning and said, 'I love you.'",
  "Success is not about the destination. It’s about the journey.",
  "I figured if a girl can play football, boys can cheerlead.",
  "It's like those Pluto Nash reviews. Everyone said it's horrible, but I just kept buying tickets to it, you know? It's kind of a similar situation.",
  "A good teammate is like a Swiss Army knife. Full of gadgets that can help you win. Also, you can open a bottle of wine with their leg.",
  "Be a goldfish.",
  "I think the happiest animal in the world is a goldfish, 'cause it only has a 10-second memory.",
  "You're a wizard of dart!",
  "Look, it's the football fairies!",
  "This diamond is made from the compressed ashes of all the things I've done wrong in my life, and I wear it as a reminder to be a better person.",
  "I’m a coach. My job is to get people to do their best, even when they don’t have it in them.",
  "Be curious, not judgmental. Now, let's go make a painting.",
  "I don't care if we win or lose, but we gotta be good at cricket!",
  "You know what the happiest animal on earth is? It's a goldfish. You know why? It's got a 10-second memory. Be a goldfish.",
  "You know what the problem is with a bag of lucky charms? It only comes with one bag of marshmallows. It's unbalanced. What I'm trying to say is, be a little more flexible with your formations.",
  "We're gonna make like NASA and turn that negative into a positive. Right, folks?",
  "If you look at the Premier League, there are more teams in London than any other city. And out of all of them, only one calls itself 'United'.",
  "When I talk about belief and being positive, I’m not trying to inspire them. I’m trying to infect them.",
  "Do you know why the English media loves an underdog? It's because they are underdogs themselves, and they want to see one of their own win.",
  "Sometimes, a tie feels like a win.",
  "Do you know how many times I've been called a wanker in the last 48 hours? Seventeen! Besides the fact that it's a grossly overused and sometimes offensive insult, it turns out I'm actually only a wanker 16 times, as one bloke had the audacity to call me a 'tosser'.",]

function onClick() {
  const quote = tedLassoQuotes[Math.floor(Math.random() * 30)]
  joke.textContent = quote
}




button.addEventListener('click', onClick);
document.addEventListener('DOMContentLoaded', onClick);
