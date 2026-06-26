function go(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('show'));document.getElementById(id).classList.add('show');location.hash=id}if(location.hash)go(location.hash.slice(1));
const books=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"];
books.forEach(b=>{let d=document.createElement('div');d.className='book';d.innerHTML=`<b>${b}</b><button onclick="go('genesis')">Study</button><button onclick="go('kids')">Kids</button><button onclick="go('listen')">Audio</button>`;document.getElementById('books').appendChild(d)});
const honeys=[
"God brings light into darkness.",
"God creates with wisdom and care.",
"Every good beginning starts with God.",
"God gives order to what feels formless.",
"You are made in God's image.",
"Rest is part of God's good design.",
"God sees what He made and calls it good.",
"God speaks, and creation responds.",
"Beauty can be a reminder of God's care.",
"God gives purpose before He gives tasks.",
"Creation teaches us to worship.",
"God is present before the story begins.",
"God's Word has creative power.",
"God fills empty places with life.",
"God blesses what He creates.",
"The same God who made stars knows your name.",
"God separates light from darkness.",
"God's goodness is not fragile.",
"God's creation invites gratitude.",
"God is not rushed in His work.",
"God forms, fills, and blesses.",
"You can trust the Creator with your day.",
"God's design includes beauty and purpose.",
"The world belongs to God.",
"God creates places for life to flourish.",
"God's voice brings peace and order.",
"Human life carries sacred worth.",
"God's work is good before ours begins.",
"God invites us to steward His creation.",
"Every day can begin with praise.",
"God is the beginning of every story."
];
const prayers=[
"Creator God, bring Your light into my heart today.",
"Lord, help me notice Your care in creation.",
"Father, help me begin this day with You.",
"God, bring peace and order to my thoughts.",
"Lord, teach me to honor the image of God in myself and others.",
"God, help me receive rest as a gift.",
"Father, open my eyes to Your goodness.",
"Lord, help me respond to Your Word with faith.",
"God, let beauty lead my heart to worship.",
"Lord, show me the purpose You have for today.",
"Father, turn my attention toward praise.",
"God, remind me that You are already here.",
"Lord, let Your Word shape what I create.",
"Father, fill empty places in my life with Your presence.",
"God, help me walk in Your blessing.",
"Lord, remind me that I am known by You.",
"Father, help me choose light today.",
"God, strengthen my trust in Your goodness.",
"Lord, make me thankful for ordinary gifts.",
"Father, teach me patience with Your process.",
"God, form my heart and fill my life with Your truth.",
"Lord, help me trust You with what I cannot control.",
"Father, help me see Your design and purpose.",
"God, remind me that all creation belongs to You.",
"Lord, help me create space for life and faith to grow.",
"Father, speak peace over my heart.",
"God, help me treat every person with sacred worth.",
"Lord, help me rest in Your finished work.",
"Father, teach me to care for what You have given.",
"God, fill this day with praise.",
"Lord, be the beginning of my story today."
];
for(let i=1;i<=31;i++){let d=document.createElement('div');d.className='day';d.innerHTML=`<h3>January ${i}</h3><p><b>Reading:</b> Genesis ${Math.min(i,31)}</p><p><b>Honey Drop:</b> ${honeys[i-1]}</p><p><b>Prayer:</b> ${prayers[i-1]}</p><label><input type="checkbox" data-key="jan${i}read"> Read</label><label><input type="checkbox" data-key="jan${i}pray"> Prayer</label><textarea id="jan${i}note" placeholder="Reflection for January ${i}"></textarea>`;document.getElementById('jan').appendChild(d)}
document.getElementById('todayHoney').textContent=honeys[new Date().getDate()%31];
document.getElementById('todayReading').textContent='Genesis 1 — Begin with God as Creator.';
document.getElementById('todayPrayer').textContent=prayers[new Date().getDate()%31];
const grid=["GODLIGHTXX","WATERDAYXG","EARTHMOONX","NIGHTSTARS","SUNGOODXX","CREATEEEE"];
document.getElementById('wordGrid').innerHTML=grid.map(r=>r.split('').join(' ')).join('<br>');
document.querySelectorAll('textarea,input:not([type])').forEach(e=>{if(!e.id)return;e.value=localStorage.getItem(e.id)||'';e.addEventListener('input',()=>localStorage.setItem(e.id,e.value))});
document.querySelectorAll('input[type=checkbox]').forEach(e=>{let k=e.dataset.key;if(!k)return;e.checked=localStorage.getItem(k)==='true';e.addEventListener('change',()=>localStorage.setItem(k,e.checked))});