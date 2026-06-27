const panel = document.getElementById('panel');
const content = document.getElementById('panelContent');
const closePanel = document.getElementById('closePanel');

const sections = {
  bible: {
    title: '📖 Bible',
    body: `Choose how you want to read today.`,
    choices: [
      ['Single Bible', 'Read one version at a time.'],
      ['Parallel Bible', 'Compare two versions side by side.'],
      ['Storybook Layout', 'Warm single-column reading.'],
      ['Traditional Layout', 'Double-column Bible style.'],
      ['Bible Versions', 'NCV, WEB, CJB, KJV, NKJV, NIV, NASB, ESV, NLT, CSB.'],
      ['Red Words of Christ', 'Turn red letters on or off.'],
      ['Color Coding', 'Color by speaker or topic.'],
      ['Symbolism Cards', 'Tap lamb, wheat, bread, dove, water, fire, and more.']
    ]
  },
  honey: { title: '🍯 Honey Drops', body: 'Daily encouragement, devotional, prayer, reflection, and favorite Honey Drops.', choices: [['Today’s Drop','Open today’s devotional.'], ['Favorites','Saved devotionals.'], ['Prayer Prompt','Pray with today’s verse.']] },
  hebrew: { title: '🇮🇱 Hebrew Garden', body: 'Learn Hebrew letters, words, biblical names, pronunciation, and flashcards.', choices: [['Hebrew Alphabet','Aleph-Bet lessons.'], ['Word Garden','Bible words and meanings.'], ['Names','Learn the meaning of names.']] },
  memory: { title: '🌸 Memory Garden', body: 'Memory verses, review games, badges, and gentle practice.', choices: [['Verse Garden','Choose verses.'], ['Review','Practice today.'], ['Games','Matching and fill-in-the-blank.']] },
  coloring: { title: '🎨 Coloring Garden', body: 'Digital coloring, printable pages, stickers, and Bible scenes.', choices: [['Color Online','Open digital coloring.'], ['Printables','Printable coloring pages.'], ['Bible Animals','Animal pages.']] },
  comic: { title: '💥 Comic Adventure', body: 'Liam, Mysti & Rye’s Bible Journeys.', choices: [['Start Episode','Begin a Bible journey.'], ['Continue','Pick up where you left off.'], ['Hidden Treasures','Bee, dragonfly, firefly, wheat, flowers, mushrooms.']] },
  friends: { title: '🐾 Meet Friends', body: 'Meet Liam, Mysti, Rye, and the Grace in Bloom forest friends.', choices: [['Liam, Mysti & Rye','Main cast.'], ['Animal Pairs','Hebrew male names and woodland female names.'], ['Pronunciation','Hear the Hebrew names.']] },
  maps: { title: '🗺️ Bible Maps', body: 'Explore Bible places, journeys, lands, rivers, mountains, and cities.', choices: [['Genesis Map','Beginning places.'], ['Exodus Route','Wilderness journey.'], ['Jesus’ Ministry','Galilee and Jerusalem.']] },
  timeline: { title: '⏳ Timeline', body: 'God’s story from Creation to Forever.', choices: [['Creation','Beginning.'], ['Patriarchs','Abraham to Joseph.'], ['Jesus','Life, ministry, resurrection.']] },
  journal: { title: '📓 Journal Corner', body: 'Write, reflect, remember, draw, and save notes.', choices: [['New Note','Start writing.'], ['Study Notes','Bible study notes.'], ['Gratitude','Thankfulness journal.']] },
  prayer: { title: '🙏 Prayer Garden', body: 'Prayer requests, answered prayers, gratitude, and prayer calendar.', choices: [['Add Prayer','Write a request.'], ['Answered Prayer','Record praise.'], ['Prayer Calendar','See prayer days.']] },
  artist: { title: '🎨 Artist Studio', body: 'Draw, paint, create cards, bookmarks, wallpapers, and verse art.', choices: [['Draw','Open canvas.'], ['Cards','Create a card.'], ['Bookmarks','Make a bookmark.']] },
  verse: { title: '📖 Today’s Verse', body: 'The daily verse card opens here with context, audio, prayer, journal prompt, and symbolism links.', choices: [['Read More','Open verse study.']] },
  binder: { title: '📚 Study Binder', body: 'Your personal Bible notebook with the Star of David and cross symbol.', choices: [['Notes','Study notes.'], ['Character Studies','People of the Bible.'], ['Word Studies','Hebrew and Greek.']] },
  music: { title: '🎵 Music Library', body: 'Worship, hymns, kids music, Scripture songs, favorites, and playlists.', choices: [['All Songs','Browse library.'], ['My Favorites','Songs you love.'], ['Create Playlist','Make a playlist.']] },
  search: { title: '🔍 Search', body: 'Search Bible, notes, songs, devotionals, maps, and friends.', choices: [['Search Everything','Coming next.']] },
  bookmarks: { title: '🔖 Bookmarks', body: 'Saved verses, pages, maps, songs, and activities.', choices: [['View Bookmarks','Coming next.']] },
  notes: { title: '📝 Notes', body: 'Quick notes connected to your Study Binder.', choices: [['New Note','Coming next.']] },
  calendar: { title: '📅 Calendar', body: 'Reading plans, prayer reminders, feast days, and milestones.', choices: [['Open Calendar','Coming next.']] },
  settings: { title: '⚙️ Settings', body: 'Reading themes, font size, single/parallel Bible, red letters, and color coding.', choices: [['Reading Settings','Coming next.']] }
};

function openSection(key) {
  const s = sections[key] || sections.bible;
  content.innerHTML = `
    <div class="panel-inner">
      <h1>${s.title}</h1>
      <p>${s.body}</p>
      <div class="button-grid">
        ${s.choices.map(([name, desc]) => `<button class="choice" type="button">${name}<small>${desc}</small></button>`).join('')}
      </div>
      <p style="margin-top:18px"><span class="badge">Button test: working</span><span class="badge">Artwork locked</span></p>
    </div>`;
  panel.showModal();
}

document.querySelectorAll('.hotspot').forEach(btn => btn.addEventListener('click', () => openSection(btn.dataset.section)));
closePanel.addEventListener('click', () => panel.close());
panel.addEventListener('click', (e) => { if (e.target === panel) panel.close(); });
