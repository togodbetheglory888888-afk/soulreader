
const $=id=>document.getElementById(id);
let age=0,idx=0,selected=null;
let scores={lead:0,social:0,ind:0,emp:0,risk:0,wis:0};

const types={
 sigma:{name:"SIGMA",emoji:"🐺",sub:"The Independent Strategist",desc:"You tend to value autonomy, personal standards and the freedom to choose your own path. You can participate socially without needing constant approval.",role:"The Silent Strategist",theme:"Independence with purpose — building a life that feels authentic rather than simply impressive."},
 alpha:{name:"ALPHA",emoji:"👑",sub:"The Natural Initiator",desc:"You tend to move toward responsibility, challenge and visible action. You are comfortable making decisions and taking initiative when others hesitate.",role:"The Commanding Builder",theme:"Leadership through action — turning confidence into responsibility and meaningful results."},
 beta:{name:"BETA",emoji:"🤝",sub:"The Loyal Connector",desc:"You tend to place strong value on relationships, cooperation and emotional understanding. Your influence often comes through trust rather than dominance.",role:"The Heart Connector",theme:"Strength through connection — helping people feel supported, understood and included."},
 omega:{name:"OMEGA",emoji:"🦉",sub:"The Unconventional Thinker",desc:"You tend to resist unnecessary social expectations and prefer authentic choices. Your path may look unusual because you are guided more by curiosity than status.",role:"The Independent Explorer",theme:"Freedom through authenticity — questioning assumptions and discovering your own direction."},
 gamma:{name:"GAMMA",emoji:"🦊",sub:"The Analytical Achiever",desc:"You tend to combine independence with curiosity and strategic thinking. You are interested in understanding systems, patterns and how things work.",role:"The Strategic Analyst",theme:"Understanding before action — turning observation and knowledge into better choices."},
 delta:{name:"DELTA",emoji:"🧭",sub:"The Grounded Adapter",desc:"You tend to be practical, flexible and steady. You may not seek the spotlight, but you can adapt to changing circumstances while protecting what matters.",role:"The Steady Navigator",theme:"Balance through adaptability — staying grounded while life changes around you."}
};

function start(){
 age=parseInt($("age").value,10);
 if(!age||age<13||age>120){$("age").focus();return}
 $("startScreen").classList.add("hidden");$("quizScreen").classList.remove("hidden");
 renderQuestion();
}
function renderQuestion(){
 selected=null;$("nextBtn").disabled=true;
 const item=QUESTIONS[idx];
 $("questionCounter").textContent=`Question ${idx+1} of ${QUESTIONS.length}`;
 $("progressPct").textContent=Math.round(idx/QUESTIONS.length*100)+"%";
 $("progressBar").style.width=(idx/QUESTIONS.length*100)+"%";
 $("qNum").textContent=`Question ${String(idx+1).padStart(2,"0")}`;
 $("question").textContent=item.q;
 const box=$("answers");box.innerHTML="";
 item.a.forEach((x,i)=>{
   const b=document.createElement("button");b.className="answer";b.textContent=x[0];
   b.onclick=()=>{document.querySelectorAll(".answer").forEach(z=>z.classList.remove("selected"));b.classList.add("selected");selected=i;$("nextBtn").disabled=false};
   box.appendChild(b);
 });
 $("nextBtn").textContent=idx===QUESTIONS.length-1?"Continue to Soul Reveal ✦":"Continue →";
}
function next(){
 if(selected===null)return;
 const s=QUESTIONS[idx].a[selected][1];Object.keys(scores).forEach(k=>scores[k]+=s[k]||0);
 idx++;
 if(idx<QUESTIONS.length) renderQuestion(); else showDonation();
}
function showDonation(){
 $("quizScreen").classList.add("hidden");
 $("donationScreen").classList.remove("hidden");
 window.scrollTo({top:0,behavior:"smooth"});
}
function clamp(n,min,max){return Math.max(min,Math.min(max,n))}
function resultType(){
 const s=scores;
 if(s.ind>=s.lead+8 && s.ind>=s.emp+4)return "sigma";
 if(s.lead>=s.ind+8 && s.lead>=s.emp+4)return "alpha";
 if(s.emp>=s.lead+6 && s.emp>=s.ind+3)return "beta";
 if(s.wis>=s.lead+5 && s.wis>=s.emp+1)return "gamma";
 if(s.ind>=s.social+4 && s.risk>=s.emp)return "omega";
 return "delta";
}
function calculateSoulProfile(){
 const s=scores;
 const raw=(s.wis*3+s.emp*1.7+s.ind*1.1-s.risk*.35);
 const soul=clamp(Math.round(18+(raw+30)*1.12+age*.22),18,120);
 const stage=soul<35?"Young Soul":soul<55?"Growing Soul":soul<75?"Mature Soul":soul<95?"Old Soul":"Ancient Soul";
 // Entertainment-only symbolic estimate, deliberately capped and never presented as factual evidence.
 const reinc=clamp(Math.round(1+(s.wis*0.10)+(s.emp*0.08)+(s.ind*0.05)),1,12);
 const cycle=soul<40?"Early Journey":soul<65?"Developing Journey":soul<90?"Long Journey":"Many-Cycle Journey";
 return {soul,stage,reinc,cycle};
}

function dimensionData(){
 const maxAbs=Math.max(...Object.values(scores).map(v=>Math.abs(v)),1);
 const score=v=>clamp(Math.round(50+(v/(maxAbs*2))*50),8,98);
 const level=n=>n>=85?"Very High":n>=70?"High":n>=50?"Moderate":n>=35?"Moderate-Low":"Low";
 return [
  ["Independence",score(scores.ind),level(score(scores.ind))],
  ["Leadership",score(scores.lead),level(score(scores.lead))],
  ["Emotional Depth",score(scores.emp),level(score(scores.emp))],
  ["Social Energy",score(scores.social),level(score(scores.social))],
  ["Risk Taking",score(scores.risk),level(score(scores.risk))],
  ["Wisdom",score(scores.wis),level(score(scores.wis))]
 ];
}
function renderDimensions(){
 const data=dimensionData();
 $("dimensionTable").innerHTML=data.map(d=>`
  <div class="dimension-row">
    <div class="dimension-name">${d[0]}</div>
    <div class="dimension-level">${d[2]}</div>
    <div class="dimension-score">${d[1]}%</div>
    <div class="dimension-track"><div style="width:${d[1]}%"></div></div>
  </div>`).join("");
 const ind=data[0][1],lead=data[1][1],emp=data[2][1],social=data[3][1],risk=data[4][1],wis=data[5][1];
 let analysis;
 if(ind>=75 && emp>=70) analysis="Your profile suggests a person who prefers autonomy but is not necessarily isolated. You may be selective about the people you allow into your inner circle. Your combination of independence and emotional depth suggests that you can appear calm externally while thinking deeply about situations internally.";
 else if(lead>=75 && risk>=65) analysis="Your profile suggests an action-oriented personality. You may feel most engaged when you can take initiative, make decisions and turn uncertainty into forward movement. Your strongest growth opportunity is balancing decisive action with reflection.";
 else if(wis>=80 && social<55) analysis="Your profile suggests a reflective and observant style. You may prefer to understand a situation before becoming deeply involved, and you may notice patterns that others overlook. Quiet thinking appears to be an important source of strength.";
 else if(emp>=78 && social>=65) analysis="Your profile suggests strong relational awareness. You may naturally notice emotional signals and value cooperation, trust and meaningful connection. Boundaries can help you protect your own energy while remaining supportive.";
 else analysis="Your profile suggests a flexible combination of independence, emotional awareness and practical thinking. Rather than fitting one extreme, you may adapt your approach depending on the people, goals and circumstances around you.";
 $("personalityAnalysis").innerHTML=`<strong>Interpretation:</strong> ${analysis}`;
 return data;
}
function careerCompatibility(){
 const d=dimensionData().reduce((o,x)=>(o[x[0]]=x[1],o),{});
 const jobs=[
  ["Entrepreneur / Business Owner",Math.round(d.Independence*.34+d.Leadership*.34+d["Risk Taking"]*.20+d.Wisdom*.12)],
  ["Researcher / Analyst",Math.round(d.Wisdom*.40+d.Independence*.25+d["Emotional Depth"]*.10+d.Leadership*.25)],
  ["Teacher / Educator",Math.round(d["Emotional Depth"]*.30+d.Wisdom*.28+d.Leadership*.17+d["Social Energy"]*.25)],
  ["Writer / Author",Math.round(d.Independence*.28+d.Wisdom*.34+d["Emotional Depth"]*.23+d["Social Energy"]*.15)],
  ["Manager / Administrator",Math.round(d.Leadership*.36+d["Social Energy"]*.18+d.Independence*.25+d.Wisdom*.21)],
  ["Creative Professional",Math.round(d.Independence*.25+d["Emotional Depth"]*.25+d.Wisdom*.25+d["Risk Taking"]*.25)],
  ["Counseling / Helping Profession",Math.round(d["Emotional Depth"]*.40+d.Wisdom*.25+d["Social Energy"]*.25+d.Independence*.10)],
  ["Product / Project Strategist",Math.round(d.Wisdom*.28+d.Leadership*.25+d.Independence*.27+d["Risk Taking"]*.20)]
 ].map(x=>[x[0],clamp(x[1],55,97)]).sort((a,b)=>b[1]-a[1]);
 const medals=["🥇","🥈","🥉"];
 $("careerList").innerHTML=jobs.slice(0,6).map((j,i)=>`
  <div class="career-item"><div class="career-rank">${medals[i]||"•"}</div><div class="career-name">${j[0]}</div><div class="career-score">${j[1]}%</div><div class="career-track"><div style="width:${j[1]}%"></div></div></div>`).join("");
 const top=jobs[0][0];
 $("careerExplanation").innerHTML=`<strong>Why these areas appear:</strong> Your strongest dimensions create a profile that may feel more compatible with work involving <strong>${top.toLowerCase()}</strong>-style strengths such as autonomy, problem-solving, communication, creativity or responsibility. Compatibility is a reflection tool, not a guarantee of satisfaction or success.`;
}
function makeSoulReading(){
 const d=dimensionData().reduce((o,x)=>(o[x[0]]=x[1],o),{});
 const high=(name)=>d[name]>=78;
 const present=high("Leadership")&&high("Risk Taking")
  ?"You are in an action-oriented phase. Momentum can be useful now, but not every door needs to be opened at once."
  :high("Wisdom")&&d["Social Energy"]<55
  ?"You are in a reflective phase. Quiet observation may reveal more than forcing an immediate answer."
  :high("Emotional Depth")
  ?"You are in a connection-centered phase. The quality of your relationships may matter more than the quantity of your commitments."
  :"You are in a balancing phase. Different parts of your personality are asking to work together rather than compete.";
 const learning=high("Independence")
  ?"Your lesson is to protect your autonomy without closing the door to healthy support."
  :high("Emotional Depth")
  ?"Your lesson is to care deeply while remembering that other people's emotions do not have to become your responsibility."
  :high("Wisdom")
  ?"Your lesson is to turn insight into action instead of waiting for perfect certainty."
  :"Your lesson is to recognize which choices genuinely reflect your values and which are driven by outside expectations.";
 const strength=high("Leadership")?"The ability to move first when others are still deciding."
  :high("Wisdom")?"The ability to notice patterns and meanings beneath the obvious."
  :high("Emotional Depth")?"The ability to understand people beyond what they say aloud."
  :high("Independence")?"The courage to choose your own path even when it is unconventional."
  :"The ability to adapt without losing your sense of self.";
 const shadow=high("Independence")&&d["Social Energy"]<50
  ?"You may sometimes carry too much alone or mistake distance for protection."
  :high("Leadership")&&high("Risk Taking")
  ?"You may sometimes move so quickly that reflection arrives after the decision."
  :high("Emotional Depth")
  ?"You may sometimes absorb other people's moods more than you realize."
  :"You may sometimes spend too much energy trying to find the perfect balance before moving.";
 const direction=high("Wisdom")
  ?"Choose depth over noise. Invest in projects, relationships and ideas that still matter after the excitement fades."
  :high("Leadership")
  ?"Choose purposeful action. Your next step becomes more powerful when it serves something larger than recognition."
  :high("Emotional Depth")
  ?"Choose meaningful connection. Let your relationships become a source of strength rather than a source of obligation."
  :"Choose alignment. Let your next chapter be shaped by what feels meaningful, not simply what looks impressive.";
 const message=high("Independence")
  ?"You do not need permission to become the person you are already becoming."
  :high("Wisdom")
  ?"Not every answer arrives as certainty. Sometimes wisdom begins with a better question."
  :"The next chapter does not have to be perfect to be meaningful.";
 const quotes=[
  "Do not measure your journey by how quickly others move. Some paths are meant to be walked slowly because the traveler is meant to notice what others miss.",
  "A quiet mind can hear a direction that noise keeps hiding.",
  "Your path becomes clearer when you stop asking which road looks impressive and start asking which road feels meaningful.",
  "Strength is not always the force that pushes forward; sometimes it is the wisdom to pause before choosing."
 ];
 const quote=quotes[(d.Wisdom+d.Independence+d.Leadership)%quotes.length];
 const advice=high("Independence")
  ?"Protect your independence, but don't confuse independence with carrying everything alone. Let trusted people contribute to your journey."
  :high("Leadership")
  ?"Use your ability to lead with patience. The strongest direction is the one that leaves room for other people to grow."
  :high("Emotional Depth")
  ?"Care deeply, but keep healthy boundaries. Your compassion becomes stronger when your own energy is protected."
  :"Give yourself permission to evolve. You do not have to remain the same person simply because others know you that way.";
 $("presentEnergy").textContent=present;$("soulLearning").textContent=learning;$("hiddenStrength").textContent=strength;$("shadow").textContent=shadow;$("lifeDirection").textContent=direction;$("wiseMessage").textContent=message;$("wiseQuote").textContent=`“${quote}”`;$("wiseAdvice").textContent=advice;
}

function showResult(){
 $("donationScreen").classList.add("hidden");$("resultScreen").classList.remove("hidden");
 const key=resultType(),t=types[key],p=calculateSoulProfile();
 $("resultEmoji").textContent=t.emoji;$("personalityType").textContent=t.name;$("personalitySubtitle").textContent=t.sub;
 $("soulAge").textContent=p.soul;$("soulStage").textContent=p.stage;
 $("reincarnation").textContent=p.reinc===1?"1 cycle":`${p.reinc} symbolic cycles`;
 $("cycleStage").textContent=p.cycle;
 $("soulRole").textContent=t.role;$("description").textContent=t.desc;$("lifeTheme").textContent=t.theme;
 renderDimensions();
 careerCompatibility();
 makeSoulReading();
 window.scrollTo({top:0,behavior:"smooth"});
}
function resultText(){
 return `SOULTYPE RESULT
Personality: ${$("personalityType").textContent} — ${$("personalitySubtitle").textContent}
Symbolic Soul Age: ${$("soulAge").textContent} (${$("soulStage").textContent})
Symbolic Reincarnation Count: ${$("reincarnation").textContent}
Journey Stage: ${$("cycleStage").textContent}
Soul Archetype: ${$("soulRole").textContent}

${$("description").textContent}

Life Theme: ${$("lifeTheme").textContent}

SoulType is a fun spiritual-style interpretation, not a scientific measurement or proof of past lives.`;
}
$("startBtn").onclick=start;
$("nextBtn").onclick=next;
$("revealBtn").onclick=showResult;
$("copyNumberBtn").onclick=async()=>{
 try{await navigator.clipboard.writeText("09380536208");$("donationStatus").textContent="GCash number copied."}
 catch(e){$("donationStatus").textContent="GCash number: 09380536208"}
};
$("againBtn").onclick=()=>location.reload();
$("copyBtn").onclick=async()=>{
 try{await navigator.clipboard.writeText(resultText());$("shareStatus").textContent="Result copied!"}
 catch(e){$("shareStatus").textContent="Copy is unavailable in this browser."}
};
$("shareBtn").onclick=async()=>{
 const text=resultText();
 if(navigator.share){try{await navigator.share({title:"My SoulType Result",text})}catch(e){}}
 else {try{await navigator.clipboard.writeText(text);$("shareStatus").textContent="Result copied — paste it anywhere to share."}catch(e){$("shareStatus").textContent="Use Copy Result to share your profile."}}
};
