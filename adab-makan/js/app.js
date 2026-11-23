(() => {
"use strict";
const ROOT = document.getElementById("app");
const KEY = "pnata-adab-makan-progress-v1";
const RAW = "https://raw.githubusercontent.com/khusnajulidar/pnata-digital-projects/refs/heads/main/adab-makan/mockups/";
const dua = {
 ar:"الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
 latin:"Alhamdu lillāhil-ladzī ath‘amanī hādzā wa razaqanīhi min ghairi haulin minnī wa lā quwwah.",
 meaning:"Segala puji bagi Allah yang telah memberiku makanan ini dan menganugerahkan rezeki kepadaku tanpa daya dan kekuatan dariku."
};
const missions = [
 {title:"Sebelum Makan",icon:"🍽️",items:[
  ["Kenali Bismillah","Mana bacaan Bismillah yang kita baca sebelum makan?",["بِسْمِ اللَّهِ","الْحَمْدُ لِلَّهِ"],0,"choice"],
  ["Dengarkan Bismillah","Pilih bacaan yang sesuai dengan Bismillah.",["بِسْمِ اللَّهِ","الْحَمْدُ لِلَّهِ"],0,"audio-choice"],
  ["Kapan Membaca Bismillah?","Kapan kita membaca Bismillah?",["Sebelum mulai makan","Setelah selesai makan"],0,"choice",["🧼","🍽️"]],
  ["Urutkan Sebelum Makan","Susun kegiatan sebelum makan dengan urutan yang tepat.",["Cuci tangan","Membaca Bismillah","Mulai makan"],0,"sequence",["🧼","🤲","🥣"]],
  ["Ayo Mulai Makan!","Pilih Bismillah, dengarkan bacaannya, lalu mulai makan.",["بِسْمِ اللَّهِ"],0,"audio-choice"]
 ]},
 {title:"Makan dengan Tangan Kanan",icon:"🤚",items:[
  ["Kenali Tangan Kanan","Pilih tangan kanan.",["Tangan kiri","Tangan kanan"],1,"choice",["🤚","🤚"]],
  ["Ayo Makan dengan Tangan Kanan","Tangan mana yang digunakan untuk mengambil makanan?",["Tangan kiri","Tangan kanan"],1,"simulation",["🤚","🤚"]],
  ["Tangan Kanan Saat Makan","Pilih kebiasaan makan yang tepat.",["Menggunakan tangan kanan","Menggunakan tangan kiri"],0,"choice",["🍴","🥄"]],
  ["Ambil Makanan Terdekat","Pilih makanan yang paling dekat dengan tempat dudukmu.",["Makanan dekat anak","Makanan dekat orang tua"],0,"scene-choice",["🍚","🥗"]],
  ["Misi Piring Makanan","Pertama pilih tangan kanan, lalu pilih makanan terdekat.",["Tangan kanan","Tangan kiri"],0,"two-step"]
 ]},
 {title:"Menghargai Makanan",icon:"🥗",items:[
  ["Jangan Mencela Makanan","Apa yang sebaiknya kita ucapkan tentang makanan?",["Alhamdulillah, makanan ini nikmat dari Allah","Makanan ini jelek"],0,"choice",["💚","🙁"]],
  ["Jika Tidak Suka Makanan","Jika tidak suka makanan, bagaimana sikap kita?",["Tidak mencela makanan","Menghina makanan"],0,"choice",["😊","💬"]],
  ["Ambil Secukupnya","Pilih porsi yang sesuai. Kamu boleh menambah jika masih lapar.",["Porsi secukupnya","Mengambil terlalu banyak"],0,"choice",["🍲","🍛"]],
  ["Jangan Menyia-nyiakan Makanan","Apa yang dilakukan pada makanan yang masih aman disimpan?",["Simpan dengan bantuan orang dewasa","Buang begitu saja"],0,"choice",["🥡","🗑️"]],
  ["Makanan adalah Nikmat Allah","Siapakah yang memberi kita rezeki makanan?",["Allah","Mainan"],0,"choice",["🌤️","🧸"]]
 ]},
 {title:"Adab Saat Makan dan Minum",icon:"🥛",items:[
  ["Minum dengan Tangan Kanan","Pilih tangan yang digunakan untuk memegang gelas.",["Tangan kiri","Tangan kanan"],1,"choice",["🥛","🥛"]],
  ["Jangan Bernapas ke Dalam Gelas","Pilih kebiasaan yang tepat saat minum.",["Bernapas di luar gelas","Bernapas ke dalam gelas"],0,"choice",["🌬️","🥤"]],
  ["Minum dengan Beberapa Tegukan","Ikuti urutan: minum, jauhkan gelas, bernapas di luar gelas, lalu lanjutkan.",["Minum","Jauhkan gelas","Bernapas di luar gelas","Lanjutkan"],0,"sequence4"],
  ["Tunggu Sampai Tidak Terlalu Panas","Apa yang kita lakukan jika makanan masih panas?",["Menunggu sampai aman","Langsung dimakan"],0,"choice",["⏳","🔥"]],
  ["Tantangan Adab Makan dan Minum","Pilih tindakan yang tepat.",["Gunakan tangan kanan","Bernapas ke dalam gelas"],0,"challenge4"]
 ]},
 {title:"Setelah Makan",icon:"🤲",items:[
  ["Kenali Alhamdulillah","Dengarkan bacaan, lalu pilih Alhamdulillah.",["بِسْمِ اللَّهِ","الْحَمْدُ لِلَّهِ"],1,"audio-choice"],
  ["Kapan Mengucapkan Alhamdulillah?","Pilih salah satu waktu kita mengucapkan Alhamdulillah.",["Setelah makan","Hanya sebelum tidur"],0,"choice",["🍽️","🌙"]],
  ["Dengarkan Doa Setelah Makan","Dengarkan doa sambil melihat bacaan Arab, latin, dan artinya.",[],0,"dua-audio"],
  ["Pilih Doa Setelah Makan","Pilih bacaan doa setelah makan yang telah kita dengarkan.",[dua.ar,"بِسْمِ اللَّهِ"],0,"dua-choice"],
  ["Meja Makan Rapi","Letakkan perlengkapan makan pada tempatnya.",["Piring","Gelas","Sendok"],0,"tidy",["🍽️","🥛","🥄"]]
 ]}
];
const state = {screen:"home",mission:0,activity:0,feedback:"",feedbackGood:false,step:0,sequence:[],selectedSequenceIndex:null,audioPlaying:false,narrationPlaying:false,audioHeard:false,bismillahSelected:false};
let activeAudio=null;
let activeNarration=null;
let activeFeedback=null;
const NARRATION_RATE=0.88;
const AUDIO={bismillah:"./assets/audio/bismillah.mp3",alhamdulillah:"./assets/audio/alhamdulillah.mp3",dua:"./assets/audio/doa-setelah-makan-tirmidzi-3458.mp3"};
const FEEDBACK_AUDIO={benar:"./assets/audio/feedback/benar.MP3",cobaLagi:"./assets/audio/feedback/coba-lagi.MP3",misiSelesai:"./assets/audio/feedback/misi-selesai.MP3",permainanSelesai:"./assets/audio/feedback/permainan-selesai.MP3"};
function blankProgress(){return {completedActivities:[],completedMissions:[],unlockedMissions:[0],finished:false};}
function loadProgress(){try{return {...blankProgress(),...JSON.parse(localStorage.getItem(KEY)||"{}")}}catch{return blankProgress()}}
let progress=loadProgress();
function save(){localStorage.setItem(KEY,JSON.stringify(progress))}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function stars(){return Array.from({length:5},(_,i)=>'<span class="star '+(progress.completedMissions.includes(i)?"earned":"")+'">★</span>').join("")}
function stopAllAudio(){if(activeAudio){activeAudio.pause();activeAudio.currentTime=0;activeAudio=null}if(activeNarration){activeNarration.pause();activeNarration.currentTime=0;activeNarration=null}if(activeFeedback){activeFeedback.pause();activeFeedback.currentTime=0;activeFeedback=null}state.audioPlaying=false;state.narrationPlaying=false}
function go(screen){stopAllAudio();state.screen=screen;state.feedback="";state.feedbackGood=false;state.step=0;state.sequence=[];state.selectedSequenceIndex=null;state.audioHeard=false;state.bismillahSelected=false;render()}
function home(){ROOT.innerHTML='<section class="screen" data-mockup="01"><div class="brand"><span class="brand-mark">P</span><span>P’NATA</span></div><div class="hero"><div class="hero-art">🍽️</div><h1>Yuk Belajar<br>Adab Makan!</h1><p class="lead">Petualangan seru belajar adab makan dan minum bersama P’Nata.</p><button class="btn" data-action="start">MULAI PETUALANGAN</button><p class="small-muted">Untuk anak usia 3–4 tahun</p></div></section>'}
function instructions(){ROOT.innerHTML='<section class="screen" data-mockup="02"><div class="topbar"><div class="brand"><span class="brand-mark">P</span><span>P’NATA</span></div></div><div class="hero"><h2>Yuk, bermain sambil belajar!</h2><p class="lead">Sentuh dan pilih jawaban yang tepat. Ikuti petunjuk pada setiap permainan. Tidak apa-apa jika belum tepat, kamu boleh mencoba lagi.</p><div class="options"><div class="option"><span class="symbol">👆</span>SENTUH DAN PILIH</div><div class="option"><span class="symbol">⭐</span>Kumpulkan bintang</div></div><button class="btn secondary" data-action="map">LIHAT PETA MISI</button></div><div class="footer-nav"><button class="btn ghost" data-action="home">KEMBALI</button></div></section>'}
function map(){const cards=missions.map((m,i)=>{const done=progress.completedMissions.includes(i),open=progress.unlockedMissions.includes(i);return '<button class="mission-card '+(done?"done":open?"open":"locked")+'" data-mission="'+i+'" '+(!open?"disabled":"")+'><span class="mission-icon">'+m.icon+'</span><strong>MISI '+(i+1)+'<br>'+esc(m.title)+'</strong><small>'+(done?"✓ Selesai":open?"Ayo mulai!":"🔒 Terkunci")+'</small></button>'}).join("");ROOT.innerHTML='<section class="screen" data-mockup="03"><div class="topbar"><div class="brand"><span class="brand-mark">P</span><span>P’NATA</span></div><div class="stars" aria-label="Bintang yang diperoleh">'+stars()+'</div></div><h2>Peta Lima Misi</h2><p class="lead">Pilih misi yang sudah terbuka. Selesaikan semua aktivitas untuk mendapatkan bintang.</p><div class="map-grid">'+cards+'</div><div class="footer-nav"><button class="btn ghost" data-action="instructions">PETUNJUK</button><button class="btn secondary" data-action="home">HALAMAN AWAL</button></div></section>'}
function activityData(){return missions[state.mission].items[state.activity]}
function renderActivity(){const d=activityData(),num=state.mission*5+state.activity+1,done=progress.completedActivities.includes(num-1);
let side='<div class="hero-art">'+(missions[state.mission].icon)+'</div><p class="small-muted">'+esc(missions[state.mission].title)+'</p>';
let main='';
if(d[4]==="dua-audio"||d[4]==="dua-choice"){
side='<div class="small-muted">Doa setelah makan • Jami’ at-Tirmidzi 3458</div><div class="dua-panel"><div class="arabic">'+dua.ar+'</div></div><div class="audio-note">Dengarkan doa sambil mengikuti teks Arab, latin, dan artinya.</div>';main='<div class="dua-panel"><div class="arabic">'+dua.ar+'</div><p class="latin">'+dua.latin+'</p><p class="translation">'+dua.meaning+'</p></div><button class="audio-btn" data-action="audio">'+audioButtonText()+'</button><p class="audio-note">Ikuti bacaan sambil melihat teks Arab, latin, dan artinya.</p>';
 if(d[4]==="dua-choice")main+='<p class="audio-note">'+(state.audioHeard?"Sekarang pilih doa yang tadi kamu dengarkan.":"Dengarkan doa terlebih dahulu, ya.")+'</p><div class="options"><button class="option" data-choice="0" '+(!state.audioHeard?"disabled":"")+'><span class="symbol">🤲</span><span class="arabic">'+dua.ar+'</span></button><button class="option" data-choice="1" '+(!state.audioHeard?"disabled":"")+'><span class="symbol">📖</span><span class="arabic">بِسْمِ اللَّهِ</span></button></div>';
}else if(d[4]==="audio-choice"&&state.mission===0&&state.activity===4){main=preMealStartUI();}
else if(state.mission===0&&state.activity===0){main='<div class="mockup-a1-interaction"><div class="mockup-a1-sample arabic" dir="rtl" lang="ar">بِسْمِ اللَّهِ</div><div class="options">'+d[2].map((v,i)=>'<button class="option" data-choice="'+i+'"><span class="arabic" dir="rtl" lang="ar">'+v+'</span></button>').join("")+'</div></div>';}
else if(state.mission===0&&state.activity===2){main='<div class="mockup-a3-interaction"><div class="options">'+d[2].map((v,i)=>'<button class="option" data-choice="'+i+'"><span>'+v+'</span></button>').join("")+'</div></div>';}

else if(d[4]==="audio-choice"){main=audioChoiceUI(d);}
else if(d[4]==="simulation"){main=simulationUI();}
else if(d[4]==="sequence4"){main=sipStageUI();}
else if(d[4]==="sequence"||d[4]==="tidy"){main=sequenceUI(d);}
else if(d[4]==="two-step"){main=twoStepUI();}
else if(d[4]==="challenge4"){main=challengeUI();}
else if(d[4]==="scene-choice"){side='<p class="small-muted">Amati posisi piring dan tempat duduk anak, ya.</p>';main='<div class="scene-interaction"><img class="scene-image" src="'+RAW+'mockup-11.jfif" alt="Adegan makan bersama dari sudut pandang anak"><button class="scene-hotspot scene-near-child" data-choice="0" aria-label="Pilih makanan dekat anak"></button><button class="scene-hotspot scene-near-adult" data-choice="1" aria-label="Pilih makanan dekat orang tua"></button></div><p class="small-muted">Sentuh bagian wadah makanan yang paling dekat denganmu.</p>';}
else if((state.mission===0&&state.activity===2)||(state.mission===1&&(state.activity===0||state.activity===2))){main=illustratedChoiceUI(d,state.mission===0?3:state.activity===0?6:8);}
else{main=options(d);}
/* Hanya aktivitas yang teks dan ilustrasinya cocok yang memakai mockup utuh. */
const activityId=num-1;
const exactMockups={0:"a1",1:"05",2:"a3",3:"06",4:"a5"};
const mockup=exactMockups[activityId]||"none";
const isArtwork=mockup!=="none";
const canContinue=done||state.feedbackGood;
const backAction=state.activity>0?"previous":"map";
const nav='<div class="footer-nav"><button class="btn ghost" data-action="'+backAction+'" aria-label="Kembali ke aktivitas sebelumnya">KEMBALI</button><button class="btn ghost" data-action="hint" aria-label="Petunjuk">PETUNJUK</button><button class="btn continue-btn" data-action="next" '+(!canContinue?'disabled':'')+' aria-label="Lanjutkan">LANJUTKAN</button></div>';
ROOT.innerHTML='<section class="screen" data-mockup="'+mockup+'" data-activity-id="'+activityId+'"><div class="activity-progress-dots" aria-label="Aktivitas '+(state.activity+1)+' dari 5">'+Array.from({length:5},(_,i)=>'<span class="progress-dot '+(i<=state.activity?'active':'')+'"></span>').join("")+'</div><div class="activity-head"><span class="pill">MISI '+(state.mission+1)+' • AKTIVITAS '+(state.activity+1)+'/5</span><span class="pill">'+num+'/25</span></div><div class="progress-line"><span style="width:'+((state.activity+1)/5*100)+'%"></span></div><div class="activity-layout"><div class="activity-main"><h2>'+esc(d[0])+'</h2><p class="prompt">'+esc(d[1])+'</p><button class="audio-btn narration-btn" data-action="narration">'+narrationButtonText()+'</button>'+main+'<div id="feedback" class="feedback '+(state.feedbackGood?"good":"")+'" role="status">'+(state.feedback||(["07","06","a5"].includes(mockup)?"":"Pilih jawabanmu, ya!"))+'</div></div><aside class="activity-side">'+side+'</aside></div>'+nav+'</section>';
}
function illustratedChoiceUI(d,kind){
 const defs=(prefix)=>'<defs><linearGradient id="'+prefix+'skin" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffdfbd"/><stop offset=".58" stop-color="#efbd91"/><stop offset="1" stop-color="#d99d70"/></linearGradient><linearGradient id="'+prefix+'plate" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fffefa"/><stop offset="1" stop-color="#e9dfcc"/></linearGradient><linearGradient id="'+prefix+'table" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f5dfba"/><stop offset="1" stop-color="#e8c99b"/></linearGradient></defs>';
 const handPath='M60 112 48 76Q44 64 53 60Q62 56 68 68L57 35Q54 23 64 20Q75 17 79 30L88 57 82 20Q81 8 92 7Q104 6 106 19L111 55 112 28Q113 16 124 17Q136 18 135 31L132 65 140 48Q146 38 155 44Q165 50 159 61L139 103Q132 119 113 121Z';
 const hand=(prefix,flip=false)=>'<svg viewBox="0 0 180 130" role="img" aria-label="Ilustrasi tangan">'+defs(prefix)+'<ellipse cx="96" cy="117" rx="57" ry="8" fill="#9b8060" opacity=".14"/>'+(flip?'<g transform="translate(180 0) scale(-1 1)">':'<g>')+'<path d="'+handPath+'" fill="url(#'+prefix+'skin)" stroke="#ca956d" stroke-width="3.5" stroke-linejoin="round"/><path d="M70 75Q79 68 88 75M94 58Q101 53 108 58M119 63Q126 59 132 63" fill="none" stroke="#d99f78" stroke-width="2.5" stroke-linecap="round" opacity=".65"/><path d="M67 103Q95 113 128 102" fill="none" stroke="#d99f78" stroke-width="2" opacity=".45"/></g></svg>';
 const table='<rect x="12" y="18" width="196" height="100" rx="22" fill="url(#TABLE)" stroke="#d9b987" stroke-width="3"/><path d="M22 37Q110 24 198 37" fill="none" stroke="#fff3dc" stroke-width="5" opacity=".7"/>';
 const plate='<ellipse cx="110" cy="77" rx="55" ry="35" fill="#d8c7aa" opacity=".22"/><ellipse cx="110" cy="70" rx="52" ry="35" fill="url(#PLATE)" stroke="#d8c8ac" stroke-width="4"/><ellipse cx="110" cy="70" rx="39" ry="24" fill="#f8f0df" stroke="#eee2ca" stroke-width="2"/>';
 let art;
 if(kind===3){
  art=[
   '<svg viewBox="0 0 220 140" role="img" aria-label="Meja makan dan makanan sebelum mulai makan">'+defs("m3a")+'<rect x="9" y="13" width="202" height="114" rx="22" fill="url(#m3atable)" stroke="#d9b987" stroke-width="3"/><path d="M18 31Q110 19 202 31" fill="none" stroke="#fff3dc" stroke-width="5" opacity=".8"/><ellipse cx="110" cy="76" rx="58" ry="38" fill="#d8c7aa" opacity=".22"/><ellipse cx="110" cy="68" rx="55" ry="37" fill="url(#m3aplate)" stroke="#d8c8ac" stroke-width="4"/><ellipse cx="110" cy="68" rx="41" ry="26" fill="#f8f0df" stroke="#eee2ca" stroke-width="2"/><g><ellipse cx="91" cy="65" rx="11" ry="8" fill="#f1c66e"/><ellipse cx="113" cy="75" rx="12" ry="8" fill="#87b987"/><circle cx="132" cy="59" r="7" fill="#e9a078"/><path d="M77 88Q110 99 145 87" fill="none" stroke="#e3d4b9" stroke-width="2"/></g></svg>',
   '<svg viewBox="0 0 220 140" role="img" aria-label="Piring setelah selesai makan">'+defs("m3b")+'<rect x="9" y="13" width="202" height="114" rx="22" fill="url(#m3btable)" stroke="#d9b987" stroke-width="3"/><path d="M18 31Q110 19 202 31" fill="none" stroke="#fff3dc" stroke-width="5" opacity=".8"/><ellipse cx="110" cy="76" rx="58" ry="38" fill="#d8c7aa" opacity=".22"/><ellipse cx="110" cy="68" rx="55" ry="37" fill="url(#m3bplate)" stroke="#d8c8ac" stroke-width="4"/><ellipse cx="110" cy="68" rx="41" ry="26" fill="#f8f0df" stroke="#eee2ca" stroke-width="2"/><g fill="#d9bd91"><circle cx="91" cy="60" r="2.5"/><circle cx="123" cy="77" r="2.5"/><circle cx="105" cy="84" r="2"/><circle cx="137" cy="62" r="1.8"/></g><path d="M79 45Q110 34 141 45" fill="none" stroke="#fff" stroke-width="2" opacity=".7"/></svg>'
  ];
 }else if(kind===6){
  art=[hand("m6a",true),hand("m6b",false)];
 }else{
  const picking=(prefix,flip)=>'<svg viewBox="0 0 180 140" role="img" aria-label="Tangan mengambil makanan">'+defs(prefix)+'<ellipse cx="91" cy="113" rx="62" ry="17" fill="#d8c7aa" opacity=".25"/><ellipse cx="91" cy="104" rx="59" ry="21" fill="url(#'+prefix+'plate)" stroke="#d8c8ac" stroke-width="4"/><ellipse cx="91" cy="103" rx="43" ry="12" fill="#f8f0df"/><circle cx="79" cy="100" r="7" fill="#e7b75f"/><circle cx="101" cy="105" r="6" fill="#87b987"/>'+(flip?'<g transform="translate(180 0) scale(-1 1)">':'<g>')+'<path d="M40 108 51 88 70 78 87 67 99 72 93 84 118 85Q130 85 130 96L119 114H61Z" fill="url(#'+prefix+'skin)" stroke="#ca956d" stroke-width="3.5" stroke-linejoin="round"/><path d="M73 73 66 54Q63 45 71 42Q80 39 84 49L92 68" fill="url(#'+prefix+'skin)" stroke="#ca956d" stroke-width="3.5" stroke-linejoin="round"/><path d="M88 83Q103 78 116 87" fill="none" stroke="#d99f78" stroke-width="2" opacity=".6"/></g></svg>';
  art=[picking("m8a",true),picking("m8b",false)];
 }
 const visuals=art;
 const labels=kind===3?["Sebelum mulai makan","Setelah selesai makan"]:kind===6?["Tangan kiri","Tangan kanan"]:["Menggunakan tangan kanan","Menggunakan tangan kiri"];
 return '<div class="illustrated-options">'+d[2].map((v,i)=>'<button class="illustrated-option" data-choice="'+i+'"><span class="illustrated-art">'+visuals[i]+'</span><span class="illustrated-label">'+labels[i]+'</span></button>').join("")+'</div>';
}
function options(d){return '<div class="options">'+d[2].map((v,i)=>{const ar=/[\\u0600-\\u06FF]/.test(v);return '<button class="option" data-choice="'+i+'"><span class="symbol">'+((d[5]&&d[5][i])||"✨")+'</span><span class="'+(ar?"arabic":"")+'" '+(ar?'dir="rtl" lang="ar"':"")+'>'+v+'</span></button>'}).join("")+'</div>'}
function sequenceUI(d){const list=d[2],chosen=state.sequence,tidy=d[4]==="tidy";const slotNames=tidy?["Tempat piring","Tempat gelas","Tempat sendok"]:list.map((_,i)=>"Urutan "+(i+1));const instruction=tidy?"Sentuh satu perlengkapan, lalu sentuh tempat yang sesuai.":"Sentuh satu kartu gambar, lalu sentuh tempat urutan yang sesuai. Ulangi sampai ketiganya tersusun.";return '<div class="sequence-board"><div class="sequence-slots">'+list.map((v,i)=>'<button type="button" class="slot '+(chosen[i]!==undefined?"filled":"")+'" data-slot="'+i+'" aria-label="'+slotNames[i]+'">'+(chosen[i]!==undefined?'<span class="slot-art">'+((d[5]&&d[5][chosen[i]])||"🖼️")+'</span><span class="slot-caption">'+esc(list[chosen[i]])+'</span>':'<span class="slot-number">'+(i+1)+'</span><span class="slot-caption">'+slotNames[i]+'</span>')+'</button>').join("")+'</div><p class="sequence-instruction">'+instruction+'</p><div class="drag-items">'+list.map((v,i)=>chosen.includes(i)?"":'<button class="drag-item '+(state.selectedSequenceIndex===i?"selected":"")+'" data-seq="'+i+'" aria-label="Pilih gambar '+esc(v)+'"><span class="drag-art">'+((d[5]&&d[5][i])||"🖼️")+'</span><span>'+esc(v)+'</span></button>').join("")+'</div></div>'}
function placeSequenceItem(source,slot){
 const d=activityData(),count=d[2].length;
 if(!Number.isInteger(source)||!Number.isInteger(slot)||source<0||source>=count||slot<0||slot>=count)return;
 const previous=state.sequence.indexOf(source);
 const displaced=state.sequence[slot];
 if(previous>=0)state.sequence[previous]=displaced;
 state.sequence[slot]=source;
 state.selectedSequenceIndex=null;
 const filled=Array.from({length:count},(_,i)=>state.sequence[i]!==undefined).every(Boolean);
 const correct=filled&&Array.from({length:count},(_,i)=>state.sequence[i]===i).every(Boolean);
 if(correct){completeActivity();renderActivity();}
 else if(filled){state.sequence=[];renderActivity();feedback("Belum tepat. Gambar dikembalikan, ayo susun lagi.",false);}
 else renderActivity();
}
function twoStepUI(){if(state.step===0)return '<div class="simulation-stage"><p class="small-muted">Tantangan 1 dari 2</p><p class="prompt">Dengan tangan mana kita mengambil makanan?</p><div class="options"><button class="option" data-stepchoice="0">🤚 Tangan kiri</button><button class="option" data-stepchoice="1">🤚 Tangan kanan</button></div></div>';return '<div class="simulation-stage"><p class="small-muted">Tantangan 2 dari 2</p><p class="prompt">Sekarang, pilih makanan yang paling dekat dengan tempat dudukmu.</p><div class="scene-interaction"><img class="scene-image" src="'+RAW+'mockup-11.jfif" alt="Makan bersama dari satu wadah, dilihat dari sudut pandang anak"><button class="scene-hotspot scene-near-child" data-stepchoice="1" aria-label="Pilih makanan dekat anak"></button><button class="scene-hotspot scene-near-adult" data-stepchoice="0" aria-label="Pilih makanan dekat orang tua"></button></div><p class="small-muted">Sentuh bagian wadah yang paling dekat denganmu.</p></div>'}
function sipStageUI(){const steps=[["Minum","Angkat gelas dan minum beberapa teguk."],["Jauhkan gelas","Turunkan dan jauhkan gelas dari mulut."],["Bernapas di luar gelas","Ambil napas saat gelas tidak menempel di mulut."],["Lanjut minum","Angkat gelas kembali untuk tegukan berikutnya."]];const t=steps[Math.min(state.step,3)];return '<div class="sip-simulation"><div class="sip-progress">'+steps.map((_,i)=>'<span class="sip-dot '+(i<state.step?'done':i===state.step?'active':'')+'"></span>').join("")+'</div><div class="sip-glass '+(state.step===1?'lowered':state.step===2?'away':state.step===3?'raised':'raised')+'"><div class="sip-water"></div></div><p class="sip-step-label">LANGKAH '+(state.step+1)+' DARI 4</p><h3>'+t[0]+'</h3><p class="sip-instruction">'+t[1]+'</p><button class="btn secondary" data-sipstage="next">'+(state.step===3?'SELESAI MINUM':'LANJUT')+'</button></div>'}
function challengeUI(){const tasks=[["Saat makan, gunakan tangan…","Tangan kanan","Tangan kiri","🤚"],["Saat ingin bernapas ketika minum…","Jauhkan gelas dari mulut terlebih dahulu","Bernapas ke dalam gelas","🥛"],["Saat minum, lakukan…","Minum beberapa tegukan dengan jeda","Minum terus tanpa jeda","💧"],["Jika makanan masih panas…","Tunggu sampai aman untuk dimakan","Langsung dimakan","♨️"]];const t=tasks[state.step];return '<div class="challenge-board"><div class="challenge-progress">'+tasks.map((_,i)=>'<span class="challenge-step '+(i<state.step?'done':i===state.step?'active':'')+'">'+(i+1)+'</span>').join("")+'</div><div class="challenge-object">'+t[3]+'</div><p class="small-muted">TANTANGAN '+(state.step+1)+' DARI 4</p><h3>'+t[0]+'</h3><div class="challenge-options"><button class="challenge-answer" data-stepchoice="1">'+t[1]+'</button><button class="challenge-answer" data-stepchoice="0">'+t[2]+'</button></div></div>'}

function simulationUI(){if(state.step===0)return '<div class="simulation-stage" aria-label="Simulasi memilih tangan"><div class="simulation-hand" aria-hidden="true">🤚</div><p class="small-muted">Pilih tangan yang akan digunakan untuk mengambil makanan.</p><div class="options"><button class="option" data-stepchoice="0" aria-label="Pilih tangan kiri">Tangan kiri</button><button class="option" data-stepchoice="1" aria-label="Pilih tangan kanan">Tangan kanan</button></div></div>';return '<div class="simulation-stage" aria-label="Simulasi mengambil makanan dengan tangan kanan"><div class="simulation-hand" aria-hidden="true">🤚 → 🥣</div><p class="prompt">Bagus! Sekarang ambil makanan dengan tangan kanan.</p><button class="btn secondary" data-action="simulate-pick" aria-label="Selesaikan simulasi mengambil makanan dengan tangan kanan">AMBIL MAKANAN</button></div>'}
function audioChoiceUI(d){const phrase=state.mission===4?"Alhamdulillah":"Bismillah";return '<button class="audio-btn" data-action="audio">'+audioButtonText()+' '+phrase.toUpperCase()+'</button><p class="audio-note">'+(state.audioHeard?"Bacaan selesai didengarkan. Sekarang pilih teks yang sesuai.":"Dengarkan bacaan terlebih dahulu, lalu pilih teks yang sesuai.")+'</p><div class="options">'+d[2].map((v,i)=>'<button class="option" data-choice="'+i+'" '+(!state.audioHeard?"disabled":"")+'> <span class="arabic" dir="rtl" lang="ar">'+v+'</span></button>').join("")+'</div>'}
function preMealStartUI(){
 const completed=progress.completedActivities.includes(state.mission*5+state.activity);
 const bismillahDone=state.bismillahSelected||completed;
 const audioDone=state.audioHeard||completed;
 return '<div class="premeal-steps '+(bismillahDone?'is-bismillah-done ':'')+(audioDone?'is-audio-done ':'')+(completed?'is-finished':'')+'">'+
 '<div class="dua-panel"><p class="arabic" dir="rtl" lang="ar">بِسْمِ اللَّهِ</p><button class="btn secondary" data-action="select-bismillah" '+(bismillahDone?'disabled':'')+'>'+(bismillahDone?'✓ BISMILLAH DIPILIH':'PILIH BISMILLAH')+'</button></div>'+
 '<span class="step-check check-bismillah" aria-hidden="true">✓</span>'+
 '<button class="audio-btn" data-action="audio" '+(!bismillahDone?'disabled':'')+'>'+audioButtonText()+' BISMILLAH</button>'+
 '<span class="step-check check-audio" aria-hidden="true">✓</span>'+
 '<p class="audio-note">'+(audioDone?'Bacaan selesai. Kamu siap mulai makan!':bismillahDone?'Dengarkan bacaan sampai selesai.':'Pilih Bismillah terlebih dahulu.')+'</p>'+
 '<button class="btn" data-action="start-meal" '+(!audioDone?'disabled':'')+'>MULAI MAKAN</button>'+
 '<span class="step-check check-start" aria-hidden="true">✓</span></div>';
}
function audioButtonText(){return state.audioPlaying?"⏸ JEDA AUDIO":state.audioHeard?"↻ DENGARKAN ULANG":"▶ DENGARKAN"}
function narrationButtonText(){return state.narrationPlaying?"⏸ JEDA PETUNJUK":"▶ DENGARKAN PETUNJUK"}
function playNarration(){if(activeFeedback){activeFeedback.pause();activeFeedback.currentTime=0;activeFeedback=null}if(activeNarration){if(state.narrationPlaying){activeNarration.pause();state.narrationPlaying=false;renderActivity()}else{activeNarration.play().then(()=>{state.narrationPlaying=true;renderActivity()}).catch(()=>feedback("Audio petunjuk belum dapat dilanjutkan.",false))}return}if(activeAudio){activeAudio.pause();activeAudio.currentTime=0;activeAudio=null;state.audioPlaying=false}const number=String(state.mission*5+state.activity+1).padStart(2,"0");const file="./assets/audio/narasi/aktivitas-"+number+".MP3";const audio=new Audio(file);audio.playbackRate=NARRATION_RATE;audio.preservesPitch=true;audio.mozPreservesPitch=true;audio.webkitPreservesPitch=true;activeNarration=audio;state.narrationPlaying=true;audio.addEventListener("ended",()=>{state.narrationPlaying=false;activeNarration=null;renderActivity()});audio.addEventListener("error",()=>{state.narrationPlaying=false;activeNarration=null;feedback("Rekaman petunjuk belum tersedia. File narasi akan ditambahkan ke folder audio.",false)});audio.play().then(()=>renderActivity()).catch(()=>{state.narrationPlaying=false;activeNarration=null;feedback("Narasi belum dapat diputar. Periksa file MP3 pada folder assets/audio/narasi.",false)})}
function playActivityAudio(){if(activeFeedback){activeFeedback.pause();activeFeedback.currentTime=0;activeFeedback=null}if(activeNarration){activeNarration.pause();activeNarration.currentTime=0;activeNarration=null;state.narrationPlaying=false}if(activeAudio){if(state.audioPlaying){activeAudio.pause();state.audioPlaying=false;renderActivity()}else{activeAudio.play().then(()=>{state.audioPlaying=true;renderActivity()}).catch(()=>feedback("Audio belum dapat dilanjutkan.",false))}return}let file=null;if(state.mission===0&&(state.activity===1||state.activity===4))file=AUDIO.bismillah;else if(state.mission===4&&state.activity===0)file=AUDIO.alhamdulillah;else if(state.mission===4&&(state.activity===2||state.activity===3))file=AUDIO.dua;if(!file){feedback("Rekaman untuk aktivitas ini belum ditentukan.",false);return}state.audioHeard=false;state.audioPlaying=true;const audio=new Audio(file);activeAudio=audio;audio.addEventListener("ended",()=>{state.audioPlaying=false;state.audioHeard=true;activeAudio=null;if(state.mission===4&&state.activity===2)completeActivity();else{renderActivity();feedback("Alhamdulillah, bacaan selesai didengarkan. Silakan lanjutkan langkah berikutnya.",false)}});audio.addEventListener("error",()=>{state.audioPlaying=false;activeAudio=null;feedback("Rekaman belum tersedia. Silakan tambahkan file audio pada folder assets/audio.",false)});audio.play().catch(()=>{state.audioPlaying=false;activeAudio=null;feedback("Audio belum dapat diputar. Periksa file rekaman dan izin pemutaran.",false)})}
function playFeedback(kind){const file=FEEDBACK_AUDIO[kind];if(!file)return;if(activeAudio){activeAudio.pause();activeAudio.currentTime=0;activeAudio=null;state.audioPlaying=false}if(activeNarration){activeNarration.pause();activeNarration.currentTime=0;activeNarration=null;state.narrationPlaying=false}if(activeFeedback){activeFeedback.pause();activeFeedback.currentTime=0;activeFeedback=null}const audio=new Audio(file);activeFeedback=audio;audio.addEventListener("ended",()=>{if(activeFeedback===audio)activeFeedback=null});audio.addEventListener("error",()=>{if(activeFeedback===audio)activeFeedback=null});audio.play().catch(()=>{if(activeFeedback===audio)activeFeedback=null})}
function feedback(msg,good){const id=state.mission*5+state.activity;const alreadyDone=progress.completedActivities.includes(id);state.feedback=msg;state.feedbackGood=good||alreadyDone;const el=document.getElementById("feedback");if(el){el.textContent=msg;el.className="feedback "+(good?"good":"")}const next=document.querySelector('[data-action="next"]');if(next)next.disabled=!(good||alreadyDone)}
function answer(correct){if(correct){feedback("Masya Allah! Benar! ⭐",true);playFeedback("benar");const id=state.mission*5+state.activity;progress.completedActivities=[...new Set([...progress.completedActivities,id])];save()}else{state.feedbackGood=false;feedback("Belum tepat. Tidak apa-apa, ayo coba lagi! 😊",false);playFeedback("cobaLagi")}}
function completeActivity(){const id=state.mission*5+state.activity;progress.completedActivities=[...new Set([...progress.completedActivities,id])];save();state.feedbackGood=true;feedback("Alhamdulillah, aktivitas selesai!",true);playFeedback("benar")}
function finishMission(){if(!progress.completedMissions.includes(state.mission))progress.completedMissions.push(state.mission);if(state.mission<4&&!progress.unlockedMissions.includes(state.mission+1))progress.unlockedMissions.push(state.mission+1);if(progress.completedMissions.length===5)progress.finished=true;save();const allFinished=progress.finished;go("mission-done");playFeedback(allFinished?"permainanSelesai":"misiSelesai")}
function next(){stopAllAudio();if(state.activity<4){state.activity++;state.feedback="";state.feedbackGood=false;state.step=0;state.sequence=[];state.selectedSequenceIndex=null;state.audioHeard=false;state.bismillahSelected=false;render()}else finishMission()}
function render(){if(state.screen==="home")home();else if(state.screen==="instructions")instructions();else if(state.screen==="map")map();else if(state.screen==="activity")renderActivity();else if(state.screen==="mission-done")missionDone();else if(state.screen==="game-done")gameDone()}
function missionDone(){if(progress.finished){gameDone();return}const mockup=state.mission===0?"08":"none";ROOT.innerHTML='<section class="screen" data-mockup="'+mockup+'"><div class="completion"><div class="big-star">★</div><h1>ALHAMDULILLAH,<br>MISI SELESAI!</h1><p class="lead">Masya Allah! Kamu berhasil menyelesaikan misi ini!</p><div class="stars">'+stars()+'</div><button class="btn secondary" data-action="map">LANJUTKAN PETUALANGAN</button></div></section>'}
function gameDone(){ROOT.innerHTML='<section class="screen" data-mockup="09"><div class="completion"><div class="big-star">★★★★★</div><h1>ALHAMDULILLAH,<br>PETUALANGAN SELESAI!</h1><p class="lead">Masya Allah! Kamu hebat! Kamu berhasil menyelesaikan semua misi!</p><button class="btn" data-action="replay">MAIN LAGI</button><button class="btn ghost" data-action="map">LIHAT PETA MISI</button></div></section>'}
ROOT.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
if(b.dataset.action){switch(b.dataset.action){
case"start":go("instructions");break;case"home":go("home");break;case"instructions":go("instructions");break;case"map":go("map");break;case"previous":state.activity=Math.max(0,state.activity-1);state.feedback="";state.feedbackGood=false;state.step=0;state.sequence=[];state.selectedSequenceIndex=null;state.audioHeard=false;state.bismillahSelected=false;go("activity");break;
case"hint":playNarration();break;
case"next":next();break;
case"audio":playActivityAudio();break;case"narration":playNarration();break;
case"select-bismillah":state.bismillahSelected=true;renderActivity();break;
case"start-meal":if(state.audioHeard){completeActivity();renderActivity()}break;
case"simulate-pick":completeActivity();break;
case"check-sequence":{const d=activityData();if(state.sequence.length!==d[2].length||Array.from({length:d[2].length},(_,i)=>state.sequence[i]===undefined).some(Boolean)){feedback("Lengkapi semua tempat terlebih dahulu.",false);break}const ok=Array.from({length:d[2].length},(_,i)=>state.sequence[i]===i).every(Boolean);answer(ok);if(ok){document.querySelectorAll('[data-action="check-sequence"]').forEach(button=>{button.dataset.action="next";button.disabled=false})}break}
case"replay":progress=blankProgress();save();go("home");break;
}return}
if(b.dataset.mission!==undefined){const m=Number(b.dataset.mission);if(progress.unlockedMissions.includes(m)){state.mission=m;state.activity=0;go("activity")}return}
if(b.dataset.choice!==undefined){const i=Number(b.dataset.choice);const d=activityData();if((d[4]==="audio-choice"||d[4]==="dua-choice")&&!state.audioHeard){feedback("Dengarkan bacaannya terlebih dahulu, ya.",false);return}answer(i===d[3]);return}
if(b.dataset.seq!==undefined){state.selectedSequenceIndex=Number(b.dataset.seq);renderActivity();return}
if(b.dataset.slot!==undefined){
 const slot=Number(b.dataset.slot);
 if(state.selectedSequenceIndex!==null&&state.selectedSequenceIndex!==undefined)placeSequenceItem(state.selectedSequenceIndex,slot);
 else if(state.sequence[slot]!==undefined){state.sequence[slot]=undefined;renderActivity()}
 return;
}
if(b.dataset.sipstage!==undefined){if(state.step<3){state.step++;renderActivity()}else completeActivity();return}
if(b.dataset.stepchoice!==undefined){const val=Number(b.dataset.stepchoice);if(activityData()[4]==="two-step"){if(state.step===0&&val===1){state.step=1;renderActivity()}else if(state.step===0)feedback("Coba pilih tangan kanan, ya.",false);else if(val===1)completeActivity();else feedback("Pilih makanan yang paling dekat denganmu.",false)}else if(activityData()[4]==="simulation"){if(state.step===0&&val===1){state.step=1;renderActivity()}else if(state.step===0)feedback("Coba pilih tangan kanan, ya.",false)}else if(activityData()[4]==="challenge4"){if(val===1){state.step++;if(state.step>=4)completeActivity();else renderActivity()}else feedback("Ayo coba lagi dengan petunjuk yang ada.",false)}return}
});
function boot(){render()}
boot();
})();