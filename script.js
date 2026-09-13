/* ============================================================
   ✏️ قسمت‌های قابل ویرایش - اینجاها رو خودت پر کن
   ============================================================ */

// کارت‌های دلایل (۶ تا)
const REASONS = [
    { emoji: "💌", text: "پرنیان من تو زیباترین دختر روی زمینی!" },
    { emoji: "💌", text: "پرنیان تنها چیزیه که این دنیارو برای من قابل تحمل میکنه!" },
    { emoji: "💌", text: "پرنیان تو پیشی کوچولوی سیاه منی!" },
    { emoji: "💌", text: "تو تنها دلیل ادامه دادن منی!" },
    { emoji: "💌", text: "پرنیان تو دوست داشتنی ترین دختری هستی که تاحالا وجود داشته!" },
    { emoji: "💌", text: "همه امیدم و همه زندگیمی!" },
];

// متن نامه (هرچقدر طولانی! اسکرول می‌شه)
// برای خط جدید از \n استفاده کن
const LETTER_TEXT = `سلام پرنیان کوچولوی ناز من ، امیدوارم حالت همیشه خوب خوب باشه. خواستم بدونی که من خیلی خیلی خیلی دوستت دارم و امیدوارم هرچی زودتر همه مشکلامون حل شه و بتونیم بازم همدیگه رو ببینیم. تو واسم از همه چیز و همه کس مهم تری و من همیشههه فقط به تو فکر میکنم و منتظر هیچی بجز تو نیستم. تو ناز ترین و بامزه ترینی حتی از پیشیا ناز تر و بامزه تر. چشمای تو از چشم های آهو هم قشنگ تره. همونطوری که داشتم نوازشت میکردم و تکرار میکردم الانم باید بهت دوباره بگم ، تو واسه من بهترینی. البته جدیدا حس میکنم دوسم نداری همش غصه میخورمممم ولی خب اشکال نداره یه خودکشی سادست دیگه. کوچک ناز من امیدوارم امسال واست ناز ترین و قشنگ ترین سال باشه و هر روز شاد و خوشحال باشی در کنار من. خودم هستم نمیزارم هیچوقت ناناعت باشی و غصه بخوری. زمان میگذره این سالها میگذره ما هم به آرزوهامون میرسیم. یه خونه بامزه حیاط دار با پمجره های بزرگ توی شمال با دو تا پیشی یدونه نارنجی و یدونه مشکی. هر روز صبح هم چشمامو که باز میکنم صورت ناز و خوشگل تورو میبینم که خورشید زندگیمی و با بودنت به همه چیز روح زندگی بخشیدی. همیشه مراقب خودت باش و هیچوقت به سمت کارای بد و اشتباه کشیده نشو و هروقت خواستی بچه بدی باشی یادت بیاد که یه محرابی هست که خیلی روت حساب باز کرده و تو نباید نا امیدش کنی. هروقت غصه داشتی بدون که من هستم. هروقت کمک خواستی هم بدون که من هستم. لازم نیست منتظر هیچکسی باشی. محراب هست که خودشو فدای تو کنه. البته تو که دوسم ندا- چیز خب داشتم میگفتم... همیشه بخند و خوشحال باش. آب و غذا هم زیاد بخور. جیش و پیپی هم کن اون کلیه ها گناه دارن. البته قبلا هم گفتم اگه گروه خونیمون بهم بخوره کلیه خودمو میدم بهت اشکال نداره ما همه وجودمون تقدیم همسریه. دلم خیلی واسه نوازش کردن و بوسیدنت تنگ شده. دلم میخواد سرتو تو آغوشم بگیرم و فقط نوازشت کنم و به صدای نفس کشیدنت گوش بدم. کاش این فاصله کوفتی زودتر تموم شه و من بتونم باز از اینکه نزدیکتم خوشحال باشم. من و تو دقیقا برای همدیگه ساخته شدیم پرنی کوچولوی من. خودتم خوب میدونی اینو. البته تو که دوس- چیززز داشتم میگفتم... خوشگل ناز من تولدت مبارک باشه. وقتش که برسه یه جشن خیلیییی بزرگ واست میگیرم جوری که همههه بهت حسودی کنن. خودمم با اینکه کلی آدم بد اخلاقیم اون یک روز اینقدر میخندونمت که دلدرد بگیری. چیپس پیاز جعفری من ، خیلی خوشحالم که تو زندگیم دارمت و واقعا این یه معجزه اس که میبینم ینفر اینقدر میتونه کامل و دوست داشتنی باشه. تلاش میکنم و تلاش میکنم تا بالاخره یروز میتونیم درکنار هم از در کنار هم بودن احساس خوشبختی کنیم حتی اگه گشنگی بخوریم. البته من گشنم شه تورو میخورم یوهاهاهاها. چیز یلحظه داشتم میگفتم... آره پرنی ناز من خلاصه که 🙇‍♂️🙇‍♂️🙇‍♂️ ، و ضمنا ببخشید اگه گاهی اذیتت میکنم واقعا کنترل کردن بخش تاریک وجودم به شکل وحشتناکی واسم سخته... ببخشید ناز من. دوستت دارم بازم. تولدت مبارکککک.`;

// پیام صفحه‌ی جشن (بعد از فوت شمع‌ها)
const CELEBRATION_TITLE = "تولدت مبارک دختر کوچولوی من!";
const CELEBRATION_MESSAGE = "همه زندگیمی 💕";

// پیام صفحه‌ی پایانی
const FINALE_TITLE = "همه‌ش برای تو بود";
const FINALE_TEXT = "مرسی که هستی 🌙";

/* ============================================================
   پایان قسمت‌های قابل ویرایش
   ============================================================ */

// صبر می‌کنیم HTML کامل لود بشه
document.addEventListener('DOMContentLoaded', function() {
    try {
        initApp();
    } catch (error) {
        console.error('خطا در اجرای سایت:', error);
        alert('یه مشکلی پیش اومد. کنسول مرورگر رو چک کن.');
    }
});

function initApp() {
    // گرفتن همه‌ی عناصر
    const scenes = {
        intro: document.getElementById('scene-intro'),
        reasons: document.getElementById('scene-reasons'),
        letter: document.getElementById('scene-letter'),
        cake: document.getElementById('scene-cake'),
        celebration: document.getElementById('scene-celebration'),
        finale: document.getElementById('scene-finale'),
    };
    
    const btnStart = document.getElementById('btn-start');
    const cardsGrid = document.getElementById('cards-grid');
    const btnToLetter = document.getElementById('btn-to-letter');
    const envelope = document.getElementById('envelope');
    const letterContent = document.getElementById('letter-content');
    const letterText = document.getElementById('letter-text');
    const btnSkipTyping = document.getElementById('btn-skip-typing');
    const btnToCake = document.getElementById('btn-to-cake');
    const candlesContainer = document.getElementById('candles');
    const candlesCounter = document.getElementById('candles-counter');
    const celebrationTitle = document.getElementById('celebration-title');
    const celebrationMessage = document.getElementById('celebration-message');
    const btnToFinale = document.getElementById('btn-to-finale');
    const finaleTitle = document.getElementById('finale-title');
    const finaleText = document.getElementById('finale-text');
    const btnRestart = document.getElementById('btn-restart');
    const btnMusic = document.getElementById('btn-music');
    const balloonsContainer = document.getElementById('balloons');
    
    // متغیرهای وضعیت
    let flippedCount = 0;
    let typingInterval = null;
    let audio = null;
    let audioPlaying = false;
    
    // ساخت کارت‌های دلایل
    REASONS.forEach((reason, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-front">${reason.emoji}</div>
                <div class="card-face card-back">${reason.text}</div>
            </div>
        `;
        card.addEventListener('click', function() {
            if (!card.classList.contains('flipped')) {
                card.classList.add('flipped');
                flippedCount++;
                if (flippedCount === REASONS.length) {
                    btnToLetter.classList.remove('btn-disabled');
                    btnToLetter.disabled = false;
                }
            }
        });
        cardsGrid.appendChild(card);
    });
    
    // ساخت شمع‌ها (۵ تا)
    const totalCandles = 5;
    let remainingCandles = totalCandles;
    
    for (let i = 0; i < totalCandles; i++) {
        const candle = document.createElement('div');
        candle.className = 'candle';
        candle.innerHTML = `
            <div class="flame"></div>
            <div class="candle-stick"></div>
        `;
        candle.addEventListener('click', function() {
            if (!candle.classList.contains('out')) {
                candle.classList.add('out');
                remainingCandles--;
                if (remainingCandles > 0) {
                    candlesCounter.textContent = `${remainingCandles} شمع باقی مونده`;
                } else {
                    candlesCounter.textContent = 'همه خاموش شد! ✨';
                    setTimeout(() => {
                        showScene('celebration');
                        launchConfetti();
                        createBalloons();
                    }, 800);
                }
            }
        });
        candlesContainer.appendChild(candle);
    }
    
    // تابع تغییر صحنه
    function showScene(sceneName) {
        Object.keys(scenes).forEach(key => {
            scenes[key].classList.remove('active');
        });
        if (scenes[sceneName]) {
            scenes[sceneName].classList.add('active');
        }
    }
    
    // شروع آهنگ
    function startAudio() {
        if (audio) return;
        audio = new Audio('assets/song.mp3');
        audio.loop = true;
        audio.volume = 0.5;
        audio.play().then(() => {
            audioPlaying = true;
            btnMusic.classList.remove('hidden');
        }).catch(() => {
            // آهنگ نیست یا مشکل داره، مشکلی نیست
            console.log('آهنگ پخش نشد (فایل نیست یا مشکلی داره)');
        });
    }
    
    // کنترل آهنگ
    btnMusic.addEventListener('click', function() {
        if (audioPlaying) {
            audio.pause();
            btnMusic.textContent = '🔇';
            audioPlaying = false;
        } else {
            audio.play();
            btnMusic.textContent = '🔊';
            audioPlaying = true;
        }
    });
    
    // تایپ متن نامه
    function typeLetter(skipAnimation) {
        letterContent.classList.remove('hidden');
        
        if (skipAnimation) {
            letterText.textContent = LETTER_TEXT;
            btnSkipTyping.classList.add('hidden');
            btnToCake.classList.remove('hidden');
            return;
        }
        
        letterText.textContent = '';
        let charIndex = 0;
        typingInterval = setInterval(() => {
            if (charIndex < LETTER_TEXT.length) {
                letterText.textContent += LETTER_TEXT[charIndex];
                charIndex++;
                // اسکرول خودکار
                letterText.scrollTop = letterText.scrollHeight;
            } else {
                clearInterval(typingInterval);
                btnSkipTyping.classList.add('hidden');
                btnToCake.classList.remove('hidden');
            }
        }, 40);
    }
    
    // کانفتی
    function launchConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const colors = ['#FFD700', '#FF6B9D', '#8BBD6F', '#A8D4E6', '#C9A876', '#FF8FAB', '#E8A87C', '#B5A8E8', '#FFFFFF'];
        const pieces = [];
        
        for (let i = 0; i < 200; i++) {
            pieces.push({
                x: Math.random() * canvas.width,
                y: -20 - Math.random() * 200,
                w: 8 + Math.random() * 8,
                h: 4 + Math.random() * 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                vy: 2 + Math.random() * 3,
                vx: (Math.random() - 0.5) * 3,
                rot: Math.random() * Math.PI * 2,
                vr: (Math.random() - 0.5) * 0.2,
            });
        }
        
        let frame = 0;
        const maxFrames = 240;
        
        function animate() {
            if (frame >= maxFrames) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                return;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pieces.forEach(p => {
                p.y += p.vy;
                p.x += p.vx;
                p.rot += p.vr;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
                ctx.restore();
            });
            frame++;
            requestAnimationFrame(animate);
        }
        animate();
    }
    
    // بادکنک‌ها
    function createBalloons() {
        const colors = ['#FF6B9D', '#F4C669', '#8BBD6F', '#A8D4E6', '#E8A87C', '#B5A8E8', '#FF8FAB', '#FFD700', '#FFA3B5'];
        for (let i = 0; i < 22; i++) {
            setTimeout(() => {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                balloon.style.left = Math.random() * 100 + '%';
                balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
                balloon.style.animationDuration = (4 + Math.random() * 3) + 's';
                balloon.style.setProperty('--drift', (Math.random() - 0.5) * 100 + 'px');
                balloonsContainer.appendChild(balloon);
                setTimeout(() => balloon.remove(), 8000);
            }, i * 200);
        }
    }
    
    // ===== Event Listeners =====
    
    btnStart.addEventListener('click', function() {
        startAudio();
        showScene('reasons');
    });
    
    btnToLetter.addEventListener('click', function() {
        if (!btnToLetter.disabled) {
            showScene('letter');
        }
    });
    
    envelope.addEventListener('click', function() {
        if (!envelope.classList.contains('opened')) {
            envelope.classList.add('opened');
            setTimeout(() => typeLetter(false), 800);
        }
    });
    
    btnSkipTyping.addEventListener('click', function() {
        if (typingInterval) {
            clearInterval(typingInterval);
            typingInterval = null;
        }
        typeLetter(true);
    });
    
    btnToCake.addEventListener('click', function() {
        showScene('cake');
    });
    
    btnToFinale.addEventListener('click', function() {
        showScene('finale');
    });
    
    btnRestart.addEventListener('click', function() {
        // ریست کردن
        flippedCount = 0;
        remainingCandles = totalCandles;
        document.querySelectorAll('.card').forEach(c => c.classList.remove('flipped'));
        document.querySelectorAll('.candle').forEach(c => c.classList.remove('out'));
        btnToLetter.classList.add('btn-disabled');
        btnToLetter.disabled = true;
        candlesCounter.textContent = `${totalCandles} شمع باقی مونده`;
        envelope.classList.remove('opened');
        letterContent.classList.add('hidden');
        btnToCake.classList.add('hidden');
        btnSkipTyping.classList.remove('hidden');
        letterText.textContent = '';
        showScene('intro');
    });
    
    // تنظیم متن‌های قابل ویرایش
    celebrationTitle.textContent = CELEBRATION_TITLE;
    celebrationMessage.textContent = CELEBRATION_MESSAGE;
    finaleTitle.textContent = FINALE_TITLE;
    finaleText.textContent = FINALE_TEXT;
    
    // ری‌سایز کانواس کانفتی
    window.addEventListener('resize', function() {
        const canvas = document.getElementById('confetti-canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}
