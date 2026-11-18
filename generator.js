// Fabrique de phrases d'entraînement : des milliers de combinaisons, gratuites, sans Internet.
(function(){
const pick = a => a[Math.floor(Math.random()*a.length)];
const W = {
  T: ["Real Madrid","Barcelona","Atletico","Sevilla","Valencia","Villarreal","Real Sociedad","Athletic Club","Inter Miami","LA Galaxy","Seattle","Columbus","Betis","Girona"],
  P: ["Messi","Yamal","Vinicius","Mbappe","Pedri","Bellingham","Kane","Haaland","Salah","Suarez","Griezmann","Lewandowski","the captain","the young striker"],
  N: ["two","three","four","five","ten","thirteen","thirty"],
  TIME: ["last night","on Sunday","in the first half","in the second half","in the last minute","this season","in front of his own fans"],
  COMP: ["league","cup","title","Champions League","MLS Cup","Copa del Rey"],
  POS: ["striker","goalkeeper","defender","midfielder","coach","captain","winger"],
  ADJ: ["big","terrible","strange","huge","simple","costly","stupid"],
  EMO: ["angry","happy","worried","proud","tired","nervous","excited"],
  ADV: ["really well","very badly","with a lot of energy","without any ideas","like champions","too slowly"],
  RANK: ["first","second","third","fourth"],
  SUP: ["best","strangest","most beautiful","craziest","luckiest","ugliest"],
  DAY: ["Saturday","Sunday","Tuesday","Wednesday","Thursday"],
  WHERE: ["Spain","America","Europe","the world","this league"],
  QUAL: ["incredible","disappointing","unstoppable","very consistent","too quiet","better than ever","under pressure"],
  SCORE: ["one to nothing","two to one","three to one","two to two","four to three","three to nothing"],
  OPEN: ["Honestly,","To be fair,","In my opinion,","Let's be real,","I have to say,","Right now,"],
  VERB: ["play","react","celebrate","defend","run","talk"],
  THING: ["the referee","the tactics","the fans","the transfer","the result","the coach"]
};
const T = [
  "{P} scored {N} goals {TIME}.",
  "{T} beat {T2} {SCORE}.",
  "I think {T} can win the {COMP} this year.",
  "{T} needs a new {POS}.",
  "The {POS} made a {ADJ} mistake.",
  "Nobody expected {P} to {VERB} like that.",
  "Can {T} stop {T2} on {DAY}?",
  "{P} wants to leave {T}.",
  "The fans of {T} are {EMO}.",
  "{OPEN} {P} is the best {POS} in {WHERE}.",
  "{T} played {ADV} in the second half.",
  "A win on {DAY} would put {T} {RANK} in the table.",
  "Write the name of your favorite {POS} in the comments.",
  "{P} has been {QUAL} this season.",
  "That was the {SUP} goal I have ever seen.",
  "{T} lost {N} games in a row.",
  "The coach of {T} is under pressure.",
  "{P} passed the ball to {P2}, and he scored.",
  "Do you think {P} will stay at {T}?",
  "The {COMP} final is on {DAY}.",
  "{OPEN} {THING} was the real problem.",
  "Everybody is talking about {P} right now.",
  "{T} wants three points, and nothing else.",
  "I was {EMO} when {P} came on.",
  "This is why {T} will win the {COMP}.",
  "{P} thinks {T} can still do it.",
  "Three things went wrong for {T} {TIME}.",
  "The players of {T} were {EMO} after the game.",
  "Tell me in the comments: was {P} right?",
  "{T} and {T2} meet again on {DAY}.",
  "{P} never stops running.",
  "Watch what {P} does with the ball here.",
  "{OPEN} {T} deserved to win.",
  "The {SUP} moment of the night came from {P}.",
  "{T} has not won in {N} games.",
  "Is {P} the best player in {WHERE}?"
];
function fill(t){
  const used = {};
  return t.replace(/\{([A-Z]+)(2?)\}/g, (m,k,two)=>{
    let v; do { v = pick(W[k]); } while(two && v===used[k]);
    if(!two) used[k]=v;
    return v;
  }).replace(/^the /, "The ").replace(/([.?:]\s)the /g, "$1The ");
}
window.makeSentences = function(n, mustContain){
  const out = new Set(); let guard = 0;
  while(out.size<n && guard++<4000){
    const s = fill(pick(T));
    if(mustContain && !mustContain.some(w=>new RegExp("\\b"+w+"\\b","i").test(s))) continue;
    out.add(s);
  }
  return [...out];
};
})();
