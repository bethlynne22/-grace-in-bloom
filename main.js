
const cursor=document.getElementById("cursor");
document.addEventListener("mousemove",e=>{
  if(!cursor) return;
  cursor.style.left=e.clientX+"px"; cursor.style.top=e.clientY+"px";
  if(Math.random()<.28){
    const s=document.createElement("div");s.className="spark";
    s.style.left=e.clientX+"px";s.style.top=e.clientY+"px";
    document.body.appendChild(s);setTimeout(()=>s.remove(),700);
  }
});
function closeBook(){document.getElementById("modal")?.classList.remove("open")}
function openBook(title,sub,collection,description,contents){
 const pages=document.getElementById("pages");
 if(!pages) return;
 pages.innerHTML=`
  <h2>${title}</h2><p class="tag">${sub}</p>
  <div class="tabs"><span class="tab">📖 Read</span><span class="tab">🔗 Links</span><span class="tab">🎨 Coloring</span><span class="tab">📝 Journal</span><span class="tab">🙏 Prayer</span><span class="tab">🌸 Bloom Notes</span></div>
  <div class="page-card"><h3>${collection}</h3><p>${description}</p></div>
  <div class="page-card"><h3>Books / Pages Inside</h3><p>${contents}</p></div>
  <div class="page-card"><h3>Grace in Bloom Links</h3><p>People, places, plants, animals, foods, maps, Hebrew/Greek words, coloring pages, devotionals, and prayer pages can all link back to the exact reading page so you never lose your place.</p></div>`;
 document.getElementById("modal").classList.add("open");
}
function openGenesis(){
 const pages=document.getElementById("pages");
 if(!pages) return;
 pages.innerHTML=`
  <h2>Volume I — The Beginning</h2><p class="tag">Genesis 1 Starter Book • Rose-Gold Spiral Study Journal</p>
  <div class="tabs"><span class="tab">📖 Scripture</span><span class="tab">🌸 Bloom Notes</span><span class="tab">🎨 Coloring</span><span class="tab">📝 Journal</span><span class="tab">🌿 Creation</span></div>
  <div class="genesis-grid">
    <div class="page-card">
      <div class="art-box"></div>
      <h3>Genesis 1 — In the Beginning</h3>
      <p><strong>Theme:</strong> God creates order, beauty, and life.</p>
    </div>
    <div class="page-card scripture">
      <h3>Reading Sample</h3>
      <p><sup>1</sup> In the beginning <span class="goldword">God created</span> the heavens and the earth.</p>
      <p><sup>2</sup> The earth was without form, and void; and darkness was upon the face of the deep. And the <span class="greenword">Spirit of God</span> moved upon the face of the waters.</p>
      <p><sup>3</sup> And God said, <span class="red">“Let there be light”</span>: and there was light.</p>
      <p><em>Color coding preview: God, Spirit, and spoken words highlighted softly.</em></p>
    </div>
  </div>
  <div class="page-card"><h3>Bloom Notes</h3><p>Genesis begins with God. Before mountains, oceans, birds, flowers, or people, God already was. Creation is not careless or rushed. It is ordered, beautiful, purposeful, and good.</p></div>
  <div class="page-card"><h3>Hebrew Word Spotlight</h3><p><strong>Bereshit</strong> — “In the beginning.” The Bible begins by turning our attention to God before everything else.</p></div>
  <div class="page-card">
    <h3>Coloring Companion Page</h3>
    <div class="coloring">
      <svg viewBox="0 0 500 230" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="480" height="210" rx="18" fill="none" stroke="#222" stroke-width="4"/>
        <circle cx="380" cy="55" r="32" fill="none" stroke="#222" stroke-width="4"/>
        <path d="M40 175 C110 115 170 130 230 75 C285 25 330 70 370 125 C415 178 460 120 480 175" fill="none" stroke="#222" stroke-width="4"/>
        <path d="M35 190 C120 150 185 172 250 140 C320 105 390 148 465 130" fill="none" stroke="#222" stroke-width="3"/>
        <path d="M95 175 L95 105 M75 125 L95 105 L115 125 M80 145 L95 128 L110 145" fill="none" stroke="#222" stroke-width="4"/>
        <path d="M155 172 L155 92 M132 118 L155 92 L180 120 M137 148 L155 126 L177 150" fill="none" stroke="#222" stroke-width="4"/>
        <path d="M60 58 q18 -22 36 0 q-18 18 -36 0z M100 52 q18 -22 36 0 q-18 18 -36 0z" fill="none" stroke="#222" stroke-width="3"/>
        <text x="250" y="210" text-anchor="middle" font-family="Georgia" font-size="22">“In the beginning…”</text>
      </svg>
    </div>
  </div>
  <div class="page-card"><h3>Journal Prompt</h3><p>Today I noticed God's creativity in: ________________________________</p></div>
  <div class="page-card"><h3>Prayer</h3><p>Heavenly Father, thank You for creating a world filled with beauty, order, and life. Open my eyes to notice Your handiwork and help me grow in wonder and gratitude. Amen.</p></div>`;
 document.getElementById("modal").classList.add("open");
}
const shelves = [
 {title:"📖 Holy Scripture", books:[
  ["Volume I — The Beginning","Genesis–Deuteronomy","Scripture Collection","Sage leather. Opens into apple blossom rose-gold journal.","Genesis, Exodus, Leviticus, Numbers, Deuteronomy","sage","genesis"],
  ["Volume II — The Kingdom","Joshua–Esther","Scripture Collection","Royal blue leather. Opens into cedar and crown dividers.","Joshua, Judges, Ruth, Samuel, Kings, Chronicles, Ezra, Nehemiah, Esther","blue"],
  ["Volume III — Wisdom & Praise","Job–Song of Solomon","Scripture Collection","Burgundy leather. Opens with wildflowers, harps, and poetry pages.","Job, Psalms, Proverbs, Ecclesiastes, Song of Solomon","burg"],
  ["Volume IV — The Prophets","Isaiah–Malachi","Scripture Collection","Crimson leather. Opens with lanterns, scrolls, and stars.","Isaiah through Malachi","crimson"],
  ["Volume V — New Covenant","Matthew–Revelation","Scripture Collection","White and gold leather. Opens with stained glass and lilies.","Matthew through Revelation","white"]]},
 {title:"👩👨 People of the Bible", books:[
  ["Women","Eve to Lydia","People Collection","Profiles, family trees, maps, courage stories, and Scripture links.","Eve, Sarah, Hagar, Rebekah, Leah, Rachel, Miriam, Deborah, Ruth, Esther, Mary, Martha, Lydia","rose"],
  ["Men","Adam to Paul","People Collection","Biographies, timelines, related places, lessons, and Scripture links.","Adam, Noah, Abraham, Moses, David, Daniel, Peter, Paul","brown"],
  ["Children","Young Bible Lives","People Collection","Child-friendly profiles and family discussion pages.","Samuel, Isaac, Miriam, boy with loaves and fishes, Timothy","gold"],
  ["Kings & Queens","Royal Lives","People Collection","Kings, queens, leadership lessons, maps, and timelines.","Saul, David, Solomon, Esther, Herod","blue"]]},
 {title:"🌿 God's Creation", books:[
  ["Bible Flowers","Lilies & Blooms","Creation Collection","Flower references, photos, art, coloring pages, and devotional notes.","Lilies, roses, wildflowers, almond blossoms","rose"],
  ["Bible Trees","Cedars & Oaks","Creation Collection","Trees in Scripture with maps, meanings, and nature journal pages.","Olive, fig, cedar, oak, acacia, palm","green"],
  ["Plants & Herbs","Hyssop to Mint","Creation Collection","Herbs, plants, growing notes, recipes, and Hebrew word links.","Hyssop, mustard, mint, dill, cumin, aloe","sage"],
  ["Fruits & Vines","Vineyards","Creation Collection","Fruits in Scripture with recipes and garden links.","Grapes, figs, dates, pomegranates, olives","burg"]]},
 {title:"🐾 God's Creatures", books:[
  ["Farm Animals","Sheep & Goats","Animal Collection","Bible references, care notes, sounds, photos, and coloring pages.","Sheep, lambs, goats, cattle, oxen, donkeys","brown"],
  ["Wild Animals","Lions & Bears","Animal Collection","Wildlife in Scripture and creation care lessons.","Lions, bears, wolves, deer, foxes","crimson"],
  ["Birds","Doves & Eagles","Animal Collection","Bible birds plus cottage birds like cardinal, oriole, hummingbird, owl.","Doves, ravens, eagles, sparrows, quail, owls, cardinals, orioles, hummingbirds","teal"],
  ["Woodland Friends","Cottage Creatures","Animal Collection","Grace in Bloom wildlife and gentle creation lessons.","Rye, geese, ducks, turtles, rabbits, squirrels, hedgehogs","green"]]},
 {title:"🍞 Biblical Kitchen", books:[
  ["Bread","Daily Bread","Kitchen Collection","Bread in Scripture, flatbreads, unleavened bread, and family recipes.","Manna, flatbread, unleavened bread","gold"],
  ["Honey","Sweetness","Kitchen Collection","Honey in Scripture, bee lessons, honey cakes, and tea ideas.","Honey, honeycomb, milk and honey","gold"],
  ["Feast Foods","Holy Days","Kitchen Collection","Passover, Hanukkah, Advent, Christmas, Easter recipes.","Seder foods, latkes, sufganiyot, hot cross buns","rose"],
  ["Family Recipes","Your Table","Kitchen Collection","A place for personal recipes and Grace in Bloom meals.","Apple pie, cider, soups, bread, tea","brown"]]},
 {title:"🌼 Grace in Bloom Originals", books:[
  ["Coloring Bible","Annual","Originals","Stained glass, cute Bible themes, cottage scenes, animals, and holidays.","Annual coloring books, Bible stories, seasonal scenes","rose"],
  ["Verse Letters","Scripture Art","Originals","Decorative Bible verse lettering to color with floral borders.","Memory verses, alphabet letters, honey borders","purple"],
  ["Kids Comic Bible","Story Bible","Originals","Original gentle comic Bible with activities and coloring pages.","Creation, Noah, Ruth, David, Jesus, parables","gold"],
  ["Crosswords","365 Pages","Originals","Annual Bible crossword volumes saved by year.","Daily crosswords, family mode, Apple Pencil support","blue"],
  ["Word Searches","365 Pages","Originals","Annual Bible word search volumes saved by year.","Daily word searches, circle with Apple Pencil","green"]]}
];
function buildShelves(){
 const library=document.getElementById("library");
 if(!library) return;
 shelves.forEach(shelf=>{
  const wrap=document.createElement("div");wrap.className="shelf";wrap.innerHTML=`<h3>${shelf.title}</h3><div class="books"></div>`;
  const books=wrap.querySelector(".books");
  shelf.books.forEach(b=>{
   const el=document.createElement("div");el.className=`book ${b[5]||'brown'}`;el.textContent=b[0];el.title=b[1];
   el.onclick=()=> b[6]==="genesis" ? openGenesis() : openBook(b[0],b[1],b[2],b[3],b[4]);
   books.appendChild(el);
  });
  library.appendChild(wrap);
 });
}
buildShelves();
