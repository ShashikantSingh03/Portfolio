const g=i=>document.getElementById(i);
g("intro").textContent=P.intro;
g("ab").innerHTML=P.about.map(t=>`<p>${t}</p>`).join("");
g("glance").innerHTML=P.glance.map(s=>`<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join("");
g("sk").innerHTML=P.skills.map(([k,v])=>`<div><h3>${k}</h3><div class="chips">${v.map(x=>`<span>${x}</span>`).join("")}</div></div>`).join("");
g("pj").innerHTML=P.projects.map((p,i)=>`<article class="pj"><b>0${i+1}</b><div><h3>${p.n}</h3><p>${p.d}</p><div class="chips">${p.t.map(x=>`<span>${x}</span>`).join("")}</div><div class="ln"><a href="${p.live}">Live demo →</a><a href="${p.gh}">GitHub →</a></div></div></article>`).join("");
g("ed").innerHTML=P.edu.map(e=>`<div><small>${e[0]}</small><h3>${e[1]}</h3><p>${e[2]}</p></div>`).join("");
const L=P.links.map(l=>`<a href="${l[1]}" rel="noopener">${l[0]}</a>`).join("");
g("sl").innerHTML=L;g("fs").innerHTML=L.replace(/<a /g,'<a style="margin:0 8px" ');
g("ml").href="mailto:"+P.email;g("ml").textContent=P.email;g("lc").textContent=P.place;
g("yr").textContent=new Date().getFullYear();
if(P.resume){g("cv").href=P.resume;g("cv").setAttribute("download","")}
g("cv").onclick=e=>{if(g("cv").getAttribute("href")==="#"){e.preventDefault();alert("Add your resume file and link it in the page code.")}};
g("fm").onsubmit=e=>{e.preventDefault();const f=e.target;
 location.href="mailto:"+P.email+"?subject="+encodeURIComponent("Hello from "+f.n.value)+"&body="+encodeURIComponent(f.m.value+"\n\n"+f.n.value+" ("+f.e.value+")");
 g("ok").textContent="Opening your email app…";f.reset()};
/* theme */
const R=document.documentElement,tg=g("tg");
const dark=()=>R.dataset.theme?R.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;
const lab=()=>tg.textContent=dark()?"Light":"Dark";
try{const s=localStorage.getItem("th");if(s)R.dataset.theme=s}catch(e){}
lab();
tg.onclick=()=>{const t=dark()?"light":"dark";R.dataset.theme=t;try{localStorage.setItem("th",t)}catch(e){}lab()};
/* rotating role */
const sw=g("swap");let k=0;sw.textContent=P.words[0];
if(!matchMedia("(prefers-reduced-motion:reduce)").matches)setInterval(()=>{sw.style.opacity=0;setTimeout(()=>{k=(k+1)%P.words.length;sw.textContent=P.words[k];sw.style.opacity=1},350)},2600);
/* reveal + active menu */
const io=new IntersectionObserver(a=>a.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.08});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
const links=[...document.querySelectorAll(".menu a")];
const so=new IntersectionObserver(a=>a.forEach(x=>{if(x.isIntersecting)links.forEach(l=>l.classList.toggle("on",l.getAttribute("href")==="#"+x.target.id))}),{rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("main section").forEach(s=>so.observe(s));
