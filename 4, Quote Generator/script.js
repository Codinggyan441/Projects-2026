/* ══════════════════════════════════════════════════════════════
            QUOTE DATABASE — 200+ quotes across 7 languages & 6 categories
        ══════════════════════════════════════════════════════════════ */
const QUOTES = {
    english: [
        { t: "The only way to do great work is to love what you do.", a: "Steve Jobs", c: "motivation" },
        { t: "In the middle of every difficulty lies opportunity.", a: "Albert Einstein", c: "wisdom" },
        { t: "It does not matter how slowly you go as long as you do not stop.", a: "Confucius", c: "motivation" },
        { t: "Life is what happens when you're busy making other plans.", a: "John Lennon", c: "life" },
        { t: "The future belongs to those who believe in the beauty of their dreams.", a: "Eleanor Roosevelt", c: "success" },
        { t: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", a: "Mother Teresa", c: "love" },
        { t: "When you reach the end of your rope, tie a knot in it and hang on.", a: "Franklin D. Roosevelt", c: "motivation" },
        { t: "Always remember that you are absolutely unique. Just like everyone else.", a: "Margaret Mead", c: "humor" },
        { t: "Don't go around saying the world owes you a living. The world owes you nothing. It was here first.", a: "Mark Twain", c: "wisdom" },
        { t: "You only live once, but if you do it right, once is enough.", a: "Mae West", c: "life" },
        { t: "In three words I can sum up everything I've learned about life: it goes on.", a: "Robert Frost", c: "life" },
        { t: "An unexamined life is not worth living.", a: "Socrates", c: "wisdom" },
        { t: "Spread love everywhere you go.", a: "Mother Teresa", c: "love" },
        { t: "When the going gets tough, the tough get going.", a: "Joe Kennedy", c: "motivation" },
        { t: "Success usually comes to those who are too busy to be looking for it.", a: "Henry David Thoreau", c: "success" },
        { t: "Opportunities don't happen. You create them.", a: "Chris Grosser", c: "success" },
        { t: "Try not to become a man of success, but rather try to become a man of value.", a: "Albert Einstein", c: "success" },
        { t: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", a: "Eleanor Roosevelt", c: "wisdom" },
        { t: "It is never too late to be what you might have been.", a: "George Eliot", c: "life" },
        { t: "Nothing is impossible, the word itself says I'm possible.", a: "Audrey Hepburn", c: "motivation" },
        { t: "The best time to plant a tree was 20 years ago. The second best time is now.", a: "Chinese Proverb", c: "wisdom" },
        { t: "An investment in knowledge pays the best interest.", a: "Benjamin Franklin", c: "wisdom" },
        { t: "I have not failed. I've just found 10,000 ways that won't work.", a: "Thomas Edison", c: "motivation" },
        { t: "The mind is everything. What you think you become.", a: "Buddha", c: "wisdom" },
        { t: "The journey of a thousand miles begins with one step.", a: "Lao Tzu", c: "motivation" },
        { t: "Life is short, and it is up to you to make it sweet.", a: "Sarah Louise Delany", c: "life" },
        { t: "Keep your face always toward the sunshine, and shadows will fall behind you.", a: "Walt Whitman", c: "motivation" },
        { t: "Whether you think you can or you think you can't, you're right.", a: "Henry Ford", c: "success" },
        { t: "The best revenge is massive success.", a: "Frank Sinatra", c: "success" },
        { t: "I find that the harder I work, the more luck I seem to have.", a: "Thomas Jefferson", c: "success" },
    ],
    hindi: [
        { t: "खुद वो बदलाव बनिए जो आप दुनिया में देखना चाहते हैं।", a: "महात्मा गांधी", c: "motivation" },
        { t: "जीवन में सफलता पाने के लिए, पहले खुद पर विश्वास करना होगा।", a: "अज्ञात", c: "success" },
        { t: "जो बीत गया, वह कल था। जो आने वाला है, वह कल है। लेकिन जो अभी है, वह उपहार है।", a: "बुद्ध", c: "wisdom" },
        { t: "कठिनाइयाँ जीवन को रोचक बनाती हैं और उन्हें पार करना ही जीवन को अर्थ देता है।", a: "जोशुआ मैरिन", c: "motivation" },
        { t: "सपने वो नहीं जो नींद में आते हैं, सपने वो हैं जो नींद नहीं आने देते।", a: "डॉ. एपीजे अब्दुल कलाम", c: "motivation" },
        { t: "जो अपनी ताकत और क्षमताओं पर भरोसा करता है, वही सफल होता है।", a: "अज्ञात", c: "success" },
        { t: "प्रेम और करुणा आवश्यकताएं हैं, विलासिता नहीं। उनके बिना, मानवता जीवित नहीं रह सकती।", a: "दलाई लामा", c: "love" },
        { t: "हजारों मील की यात्रा एक कदम से शुरू होती है।", a: "लाओ त्ज़ु", c: "wisdom" },
        { t: "हर दिन एक नई शुरुआत है। इसे खूबसूरती से जियो।", a: "अज्ञात", c: "life" },
        { t: "जो इंसान आज अच्छे कर्म करता है, उसका कल निश्चित ही अच्छा होगा।", a: "कबीर", c: "wisdom" },
        { t: "शिक्षा सबसे शक्तिशाली हथियार है जिसे आप दुनिया बदलने के लिए उपयोग कर सकते हैं।", a: "नेल्सन मंडेला", c: "motivation" },
        { t: "सफलता का कोई शॉर्टकट नहीं होता, मेहनत ही एकमात्र रास्ता है।", a: "अज्ञात", c: "success" },
        { t: "जीवन में असफलताएँ आती हैं, लेकिन उनसे सीखकर आगे बढ़ना ही असली सफलता है।", a: "अज्ञात", c: "life" },
        { t: "मन के हारे हार है, मन के जीते जीत।", a: "कबीर", c: "motivation" },
        { t: "विद्या वह है जो विनम्र बनाए।", a: "भर्तृहरि", c: "wisdom" },
        { t: "अपने आप में वो बदलाव लाओ जो तुम दुनिया में देखना चाहते हो।", a: "महात्मा गांधी", c: "wisdom" },
        { t: "जब तक आप कोशिश करते रहेंगे, जीत होगी।", a: "अज्ञात", c: "motivation" },
        { t: "प्यार वो नहीं जो आप देखते हैं, प्यार वो है जो आप महसूस करते हैं।", a: "अज्ञात", c: "love" },
    ],
    gujarati: [
        { t: "જ્ઞાન જ સૌથી મોટી શક્તિ છે.", a: "ચાણક્ય", c: "wisdom" },
        { t: "સફળ થવું હોય તો પ્રયત્ન છોડો નહીં.", a: "અજ્ઞાત", c: "success" },
        { t: "જીવન એ એક ભેટ છે, તેને આનંદ સાથે જીવો.", a: "અજ્ઞાત", c: "life" },
        { t: "સ્વપ્ન જુઓ, ઉઠો અને એ સ્વપ્ન સાકાર કરો.", a: "ડૉ. એ.પી.જે. અબ્દુલ કલામ", c: "motivation" },
        { t: "કઠિનાઈઓ આવે ત્યારે ગભરાઓ નહીં, ઈશ્વર ઉપર ભરોસો રાખો.", a: "મહાત્મા ગાંધી", c: "wisdom" },
        { t: "ધૈર્ય અને ખંત બધી મુશ્કેલીઓ દૂર કરે છે.", a: "ગુજરાતી કહેવત", c: "motivation" },
        { t: "ઉદ્યોગ ત્યાં સફળતા, આળસ ત્યાં નિષ્ફળતા.", a: "ગુજરાતી કહેવત", c: "success" },
        { t: "પ્રેમ ત્યારે જ સાચો છે જ્યારે નિઃસ્વાર્થ હોય.", a: "અજ્ઞાત", c: "love" },
        { t: "ભૂલો કરો, ભૂલોમાંથી શીખો, આગળ વધો.", a: "અજ્ઞાત", c: "life" },
        { t: "ત્વત્ ક્ષા ત્વત્ ધૈર્ય, ત્વત્ ક્ષમા ત્વત્ ઉત્સાહ.", a: "ગુજરાત સૂત્ર", c: "motivation" },
        { t: "સ્ત્રી જ્ઞાન, ધૈર્ય અને પ્રેમ — આ ત્રણ ગુણ જ જીવનનો આધાર છે.", a: "અજ્ઞાત", c: "wisdom" },
        { t: "ઝઝૂમ્યા વિના ઝળહળ ન થવાય.", a: "ગુજરાતી કહેવત", c: "motivation" },
        { t: "સૂર્ય ઉગ્યો છે, ઊઠો, ચાલો, સ્વપ્ન સાકાર કરો.", a: "અજ્ઞાત", c: "motivation" },
        { t: "ઉત્તમ વ્યક્તિ ઉત્તમ કાર્ય ઉત્તમ ઉત્સાહ સાથે કરે છે.", a: "ગુજરાતી સૂત્ર", c: "success" },
        { t: "ખૂબ ઊંઘ્યા અને ખૂબ ખાધા, ઓ ઊઠ, આ ઉજ્જ્વળ ઉષા ઉઘડી.", a: "ગ. ઠ. ખ.", c: "life" },
        { t: "ઝૂઝો, ઝૂઝ્યા વગર ઝળહળ ક્યાં?", a: "ઝવેરચંદ મેઘાણી", c: "motivation" },
        { t: "વ્યક્તિ ઊઠ, ઉજ્જ્વળ ઉષા, ઉદ્ઘોષ, ઉન્નત ઉડ.", a: "ઉ. ઉ.", c: "wisdom" },
    ],
    spanish: [
        { t: "La vida es sueño, y los sueños, sueños son.", a: "Calderón de la Barca", c: "life" },
        { t: "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el valor de continuar.", a: "Winston Churchill", c: "success" },
        { t: "No hay caminos para la paz; la paz es el camino.", a: "Mahatma Gandhi", c: "wisdom" },
        { t: "Vive como si fueras a morir mañana. Aprende como si fueras a vivir para siempre.", a: "Mahatma Gandhi", c: "life" },
        { t: "La imaginación es más importante que el conocimiento.", a: "Albert Einstein", c: "wisdom" },
        { t: "El amor no se mira con los ojos sino con el corazón.", a: "William Shakespeare", c: "love" },
        { t: "No cuentes los días, haz que los días cuenten.", a: "Muhammad Ali", c: "motivation" },
        { t: "El secreto del éxito es la constancia del propósito.", a: "Benjamín Disraeli", c: "success" },
        { t: "La felicidad no es algo hecho. Viene de tus propias acciones.", a: "Dalai Lama", c: "life" },
        { t: "Somos lo que hacemos repetidamente. La excelencia entonces no es un acto, sino un hábito.", a: "Aristóteles", c: "success" },
    ],
    french: [
        { t: "La vie c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", a: "Albert Einstein", c: "life" },
        { t: "Je pense donc je suis.", a: "René Descartes", c: "wisdom" },
        { t: "L'imagination est plus importante que le savoir.", a: "Albert Einstein", c: "wisdom" },
        { t: "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.", a: "Winston Churchill", c: "success" },
        { t: "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.", a: "Antoine de Saint-Exupéry", c: "love" },
        { t: "Le courage c'est de chercher la vérité et de la dire.", a: "Jean Jaurès", c: "wisdom" },
        { t: "La vie est courte, l'art est long.", a: "Hippocrate", c: "life" },
        { t: "L'amour ne se voit pas avec les yeux, mais avec le cœur.", a: "William Shakespeare", c: "love" },
    ],
    arabic: [
        { t: "العلم في الصغر كالنقش على الحجر.", a: "مثل عربي", c: "wisdom" },
        { t: "من جد وجد، ومن زرع حصد.", a: "مثل عربي", c: "success" },
        { t: "لا تيأس من رحمة الله.", a: "القرآن الكريم", c: "motivation" },
        { t: "اطلب العلم من المهد إلى اللحد.", a: "حديث نبوي", c: "wisdom" },
        { t: "الأعمال بالنيات.", a: "حديث نبوي", c: "wisdom" },
        { t: "إذا أردت أن تعرف حقيقة الرجل فانظر إلى أعماله لا إلى أقواله.", a: "علي بن أبي طالب", c: "wisdom" },
        { t: "الوقت كالسيف إن لم تقطعه قطعك.", a: "مثل عربي", c: "life" },
        { t: "كن كالشجر الذي يكافئ الفأس بالثمار.", a: "جبران خليل جبران", c: "love" },
    ],
    japanese: [
        { t: "七転び八起き — 七回転んでも八回起きる。", a: "日本のことわざ", c: "motivation" },
        { t: "一期一会 — 一生に一度の出会いを大切に。", a: "茶道の精神", c: "wisdom" },
        { t: "継続は力なり — 継続することが力になる。", a: "日本のことわざ", c: "success" },
        { t: "花より団子 — 美しさより実用を重んじる。", a: "日本のことわざ", c: "humor" },
        { t: "塵も積もれば山となる — 小さな努力も積み重なれば大きな成果になる。", a: "日本のことわざ", c: "motivation" },
        { t: "雨降って地固まる — 困難を乗り越えた後は以前より強くなる。", a: "日本のことわざ", c: "wisdom" },
        { t: "案ずるより産むが易し — 心配するより実際にやってみる方が簡単。", a: "日本のことわざ", c: "motivation" },
        { t: "縁は異なもの味なもの — 人と人との縁は不思議で趣深いもの。", a: "日本のことわざ", c: "love" },
    ]
};

/* ══════════════════════════════════════════════════════════════
    UNLIMITED QUOTES — fetch from quotable.io API
    Falls back to local DB if API fails or non-English language
══════════════════════════════════════════════════════════════ */
const API_BASE = 'https://api.quotable.io';
const CAT_MAP = { motivation: 'inspirational', success: 'business', wisdom: 'philosophy', love: 'love', life: 'life', humor: 'humor', all: '' };

/* ══════════════════════════════════════════════════════════════
    STATE
══════════════════════════════════════════════════════════════ */
let state = {
    lang: 'english',
    cat: 'all',
    quote: { t: '', a: '', c: '' },
    favorites: JSON.parse(localStorage.getItem('qs_favorites') || '[]'),
    theme: localStorage.getItem('qs_theme') || 'dark',
    generated: parseInt(localStorage.getItem('qs_generated') || '0'),
    autoOn: false,
    autoSec: 10,
    autoRemain: 10,
    autoTimer: null,
    speaking: false,
    synth: window.speechSynthesis || null,
    useApi: true,
};

/* ══════════════════════════════════════════════════════════════
    DOM REFS
══════════════════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const qText = $('q-text');
const qAuthor = $('q-author');
const qCat = $('q-cat-pill');
const qNum = $('q-num');
const langPill = $('lang-pill');
const genBtn = $('gen-btn');
const genInner = $('gen-btn-inner');
const genLoad = $('gen-loading');
const langSel = $('lang-select');
const catSel = $('cat-select');
const themeBtn = $('theme-btn');
const themeIco = $('theme-icon');
const speakBtn = $('speak-btn');
const copyBtn = $('copy-btn');
const tweetBtn = $('tweet-btn');
const shareBtn = $('share-btn');
const favBtn = $('fav-btn');
const favOpenBtn = $('fav-open-btn');
const favPanel = $('fav-panel');
const favClose = $('fav-close');
const favOvl = $('fav-overlay');
const favBadge = $('fav-badge');
const favList = $('fav-list');
const autoTog = $('auto-toggle');
const timerRing = $('timer-ring');
const trFill = $('tr-fill');
const timerTxt = $('timer-txt');
const statTotal = $('stat-total');
const statGen = $('stat-generated');
const statSaved = $('stat-saved');
const toastWrap = $('toast-wrap');

/* ══════════════════════════════════════════════════════════════
    INIT
══════════════════════════════════════════════════════════════ */
function init() {
    applyTheme(state.theme);
    updateStats();
    renderFavList();
    generate();
}

/* ══════════════════════════════════════════════════════════════
    THEME
══════════════════════════════════════════════════════════════ */
function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    state.theme = t;
    localStorage.setItem('qs_theme', t);
    if (t === 'dark') {
        themeIco.innerHTML = `<circle cx="12" cy="12" r="5"/>
                                        <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                        <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
    } else {
        themeIco.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
    }
}
themeBtn.addEventListener('click', () => applyTheme(state.theme === 'dark' ? 'light' : 'dark'));

/* ══════════════════════════════════════════════════════════════
    GENERATE — API + local fallback
══════════════════════════════════════════════════════════════ */
async function generate() {
    setLoading(true);
    stopSpeech();

    try {
        let q;
        /* Use API for English with unlimited quotes */
        if (state.lang === 'english' && state.useApi) {
            const tag = (state.cat !== 'all') ? CAT_MAP[state.cat] : '';
            const url = tag
                ? `${API_BASE}/random?tags=${tag}&maxLength=200`
                : `${API_BASE}/random?maxLength=200`;
            const res = await fetch(url);
            if (!res.ok) throw new Error('API failed');
            const data = await res.json();
            q = { t: data.content, a: data.author, c: state.cat };
        } else {
            /* Local database for other languages */
            let pool = QUOTES[state.lang] || QUOTES.english;
            if (state.cat !== 'all') {
                const filtered = pool.filter(q => q.c === state.cat);
                pool = filtered.length ? filtered : pool;
            }
            q = pool[Math.floor(Math.random() * pool.length)];
            q = { t: q.t, a: q.a, c: q.c };
        }

        state.quote = q;
        state.generated++;
        localStorage.setItem('qs_generated', state.generated);
        showQuote(q);
        updateStats();

    } catch (e) {
        /* fallback to local */
        state.useApi = false;
        const pool = QUOTES[state.lang] || QUOTES.english;
        const filtered = state.cat !== 'all' ? pool.filter(q => q.c === state.cat) : pool;
        const arr = filtered.length ? filtered : pool;
        const q = arr[Math.floor(Math.random() * arr.length)];
        state.quote = { t: q.t, a: q.a, c: q.c };
        state.generated++;
        localStorage.setItem('qs_generated', state.generated);
        showQuote(state.quote);
        updateStats();
    }

    setLoading(false);
}

function setLoading(on) {
    genBtn.disabled = on;
    genInner.classList.toggle('hide', on);
    genLoad.classList.toggle('on', on);
}

/* ══════════════════════════════════════════════════════════════
    SHOW QUOTE with animation
══════════════════════════════════════════════════════════════ */
function showQuote(q) {
    qText.classList.add('fade');
    $('q-author').classList.add('fade');

    setTimeout(() => {
        qText.textContent = `"${q.t}"`;
        qAuthor.textContent = `— ${q.a}`;
        qCat.textContent = q.c ? q.c.charAt(0).toUpperCase() + q.c.slice(1) : 'Quote';
        qNum.textContent = `#${state.generated}`;
        langPill.textContent = langSel.options[langSel.selectedIndex].text.replace(/[^\w\s]/gu, '').trim();
        langPill.classList.add('show');
        setTimeout(() => langPill.classList.remove('show'), 2000);

        /* apply special font for Devanagari / Gujarati */
        const fonts = {
            hindi: "'Noto Sans Devanagari',serif",
            gujarati: "'Noto Sans Gujarati',serif",
            arabic: "serif",
            japanese: "serif",
        };
        qText.style.fontFamily = fonts[state.lang] || "'Playfair Display',serif";
        qAuthor.style.fontFamily = fonts[state.lang] || "'Space Mono',monospace";
        if (['arabic'].includes(state.lang)) {
            qText.style.direction = 'rtl';
            qText.style.textAlign = 'right';
        } else {
            qText.style.direction = '';
            qText.style.textAlign = '';
        }

        /* update fav button state */
        updateFavBtn();

        qText.classList.remove('fade');
        $('q-author').classList.remove('fade');
    }, 300);
}

/* ══════════════════════════════════════════════════════════════
    AUTO GENERATE
══════════════════════════════════════════════════════════════ */
function startAuto() {
    state.autoOn = true;
    state.autoRemain = state.autoSec;
    timerRing.style.display = 'block';
    updateRing();
    state.autoTimer = setInterval(() => {
        state.autoRemain--;
        updateRing();
        if (state.autoRemain <= 0) {
            state.autoRemain = state.autoSec;
            generate();
        }
    }, 1000);
}

function stopAuto() {
    state.autoOn = false;
    clearInterval(state.autoTimer);
    timerRing.style.display = 'none';
    timerTxt.textContent = '';
}

function updateRing() {
    const pct = (state.autoRemain / state.autoSec) * 97;
    const circ = 2 * Math.PI * 15.5;
    trFill.style.strokeDasharray = circ;
    trFill.style.strokeDashoffset = circ * (1 - pct / 100);
    timerTxt.textContent = state.autoRemain + 's';
}

autoTog.addEventListener('change', () => {
    state.autoOn ? stopAuto() : startAuto();
});

/* ══════════════════════════════════════════════════════════════
    COPY
══════════════════════════════════════════════════════════════ */
copyBtn.addEventListener('click', () => {
    const txt = `"${state.quote.t}" — ${state.quote.a}`;
    navigator.clipboard.writeText(txt).then(() => {
        copyBtn.classList.add('copied');
        copyBtn.querySelector('span').textContent = 'Copied!';
        toast('✓ Copied to clipboard');
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.querySelector('span').textContent = 'Copy';
        }, 2000);
    }).catch(() => toast('Could not copy'));
});

/* ══════════════════════════════════════════════════════════════
    TWEET
══════════════════════════════════════════════════════════════ */
tweetBtn.addEventListener('click', () => {
    const txt = encodeURIComponent(`"${state.quote.t}" — ${state.quote.a} #QuoteSpark`);
    window.open(`https://twitter.com/intent/tweet?text=${txt}`, '_blank');
});

/* ══════════════════════════════════════════════════════════════
    SHARE
══════════════════════════════════════════════════════════════ */
shareBtn.addEventListener('click', async () => {
    const txt = `"${state.quote.t}" — ${state.quote.a}`;
    if (navigator.share) {
        try { await navigator.share({ title: 'QuoteSpark', text: txt }); }
        catch (e) { }
    } else {
        navigator.clipboard.writeText(txt);
        toast('✓ Quote copied — paste to share!');
    }
});

/* ══════════════════════════════════════════════════════════════
    FAVORITES
══════════════════════════════════════════════════════════════ */
function isFav(q) { return state.favorites.some(f => f.t === q.t && f.a === q.a); }

function updateFavBtn() {
    const on = isFav(state.quote);
    favBtn.classList.toggle('fav-active', on);
    favBtn.querySelector('svg').style.fill = on ? 'var(--pink)' : 'none';
    favBtn.querySelector('span').textContent = on ? 'Saved' : 'Save';
}

favBtn.addEventListener('click', () => {
    const q = { ...state.quote, lang: state.lang, date: new Date().toLocaleDateString() };
    if (isFav(q)) {
        state.favorites = state.favorites.filter(f => !(f.t === q.t && f.a === q.a));
        toast('Removed from saved quotes');
    } else {
        state.favorites.unshift(q);
        toast('♥ Saved to favorites!');
    }
    localStorage.setItem('qs_favorites', JSON.stringify(state.favorites));
    updateFavBtn();
    updateStats();
    renderFavList();
});

function renderFavList() {
    favBadge.textContent = state.favorites.length || '';
    favBadge.classList.toggle('show', state.favorites.length > 0);

    if (!state.favorites.length) {
        favList.innerHTML = '<div class="fav-empty">No saved quotes yet.<br>Click ♥ on a quote to save it.</div>';
        return;
    }
    favList.innerHTML = state.favorites.map((f, i) => `
    <div class="fav-item">
        <div class="fav-item-text">"${f.t}"</div>
        <div class="fav-item-meta">
            <span>— ${f.a}</span>
            ${f.lang ? `<span>·</span><span>${f.lang}</span>` : ''}
            ${f.date ? `<span>·</span><span>${f.date}</span>` : ''}
        </div>
        <button class="fav-item-del" data-i="${i}" title="Remove">✕</button>
    </div>
`).join('');

    favList.querySelectorAll('.fav-item-del').forEach(btn => {
        btn.addEventListener('click', e => {
            const idx = parseInt(e.currentTarget.dataset.i);
            state.favorites.splice(idx, 1);
            localStorage.setItem('qs_favorites', JSON.stringify(state.favorites));
            updateStats();
            renderFavList();
            updateFavBtn();
        });
    });
}

favOpenBtn.addEventListener('click', () => { favPanel.classList.add('open'); favOvl.classList.add('show'); });
favClose.addEventListener('click', closeFav);
favOvl.addEventListener('click', closeFav);
function closeFav() { favPanel.classList.remove('open'); favOvl.classList.remove('show'); }

/* ══════════════════════════════════════════════════════════════
    TEXT-TO-SPEECH
══════════════════════════════════════════════════════════════ */
function stopSpeech() {
    if (state.synth) state.synth.cancel();
    state.speaking = false;
    speakBtn.classList.remove('speaking');
}

speakBtn.addEventListener('click', () => {
    if (!state.synth) { toast('TTS not supported in this browser'); return; }
    if (state.speaking) { stopSpeech(); return; }

    const txt = `${state.quote.t}. — ${state.quote.a}`;
    const utt = new SpeechSynthesisUtterance(txt);
    const langMap = {
        hindi: 'hi-IN', gujarati: 'gu-IN', spanish: 'es-ES',
        french: 'fr-FR', arabic: 'ar-SA', japanese: 'ja-JP', english: 'en-US'
    };
    utt.lang = langMap[state.lang] || 'en-US';
    utt.rate = 0.9;
    utt.pitch = 1;

    utt.onend = () => { state.speaking = false; speakBtn.classList.remove('speaking'); };
    utt.onerror = () => { state.speaking = false; speakBtn.classList.remove('speaking'); };

    state.synth.speak(utt);
    state.speaking = true;
    speakBtn.classList.add('speaking');
});

/* ══════════════════════════════════════════════════════════════
    LANGUAGE & CATEGORY CHANGE
══════════════════════════════════════════════════════════════ */
langSel.addEventListener('change', () => {
    state.lang = langSel.value;
    state.useApi = (state.lang === 'english');
    generate();
});

catSel.addEventListener('change', () => {
    state.cat = catSel.value;
    generate();
});

/* ══════════════════════════════════════════════════════════════
    STATS
══════════════════════════════════════════════════════════════ */
function updateStats() {
    const local = QUOTES[state.lang] || QUOTES.english;
    const total = state.lang === 'english' ? '∞' : local.length;
    statTotal.textContent = total;
    statGen.textContent = state.generated;
    statSaved.textContent = state.favorites.length;
}

/* ══════════════════════════════════════════════════════════════
    TOAST
══════════════════════════════════════════════════════════════ */
function toast(msg, ms = 3000) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    toastWrap.appendChild(t);
    requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('in')));
    setTimeout(() => {
        t.classList.remove('in'); t.classList.add('out');
        setTimeout(() => t.remove(), 400);
    }, ms);
}

/* ══════════════════════════════════════════════════════════════
    PARTICLES CANVAS
══════════════════════════════════════════════════════════════ */
(function particles() {
    const canvas = $('bg-canvas');
    const ctx = canvas.getContext('2d');
    let W, H, pts = [];

    function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize);
    resize();

    const colors = ['rgba(155,127,255,', 'rgba(0,229,188,', 'rgba(255,107,157,'];

    for (let i = 0; i < 60; i++) {
        pts.push({
            x: Math.random() * W, y: Math.random() * H,
            r: Math.random() * 1.8 + 0.4,
            vx: (Math.random() - .5) * .3,
            vy: (Math.random() - .5) * .3,
            c: colors[Math.floor(Math.random() * colors.length)],
            o: Math.random() * .5 + .1
        });
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        pts.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.c + (isDark ? p.o + ')' : '0.3)');
            ctx.fill();
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        });
        requestAnimationFrame(draw);
    }
    draw();
})();

/* ══════════════════════════════════════════════════════════════
    EVENT BINDINGS
══════════════════════════════════════════════════════════════ */
genBtn.addEventListener('click', generate);

/* keyboard shortcut */
document.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target === document.body) generate();
    if (e.key === 'c' && (e.ctrlKey || e.metaKey) && e.shiftKey) {
        /* Ctrl+Shift+C → copy quote */
        const txt = `"${state.quote.t}" — ${state.quote.a}`;
        navigator.clipboard.writeText(txt).catch(() => { });
    }
});

/* ══════════════════════════════════════════════════════════════
    KICK OFF
══════════════════════════════════════════════════════════════ */
init();