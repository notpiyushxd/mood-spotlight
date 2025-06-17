const nameInput = document.getElementById('nameInput');
const namePreview = document.getElementById('namePreview');
const happyBtn = document.getElementById('happyBtn');
const stressedBtn = document.getElementById('stressedBtn');
const chillBtn = document.getElementById('chillBtn');
const analysisText = document.getElementById('analysisText');

const greetingEl = document.getElementById('greeting');
const quoteEl = document.getElementById('quote');
const suggestionEl = document.getElementById('suggestion');
const redLight = document.querySelector('.light.red');
const yellowLight = document.querySelector('.light.yellow');
const greenLight = document.querySelector('.light.green');

const quotes = {
    happy: "Keep shining! Your happiness is a beacon to others.",
    stressed: "Take a deep breath. This too shall pass. You've got this!",
    chill: "Go with the flow. Enjoy the calm and ride the gentle waves."
};

const suggestions = {
    happy: "Try listening to some upbeat pop music! 🎶",
    stressed: "Perhaps some calming instrumental music? 🧘",
    chill: "How about some lo-fi beats to maintain the vibe?🎧"
};

if (nameInput) {
    nameInput.addEventListener('input', () => {
        namePreview.textContent = nameInput.value ? `Hello, ${nameInput.value}!` : '';
    });
}

function handleMoodSelection(mood) {
    const name = nameInput ? nameInput.value.trim() : 'Friend';
    localStorage.setItem('userName', name || 'Friend');
    localStorage.setItem('userMood', mood);

    if (analysisText) {
        analysisText.textContent = "Analyzing your vibe...";
    }

    setTimeout(() => {
        window.location.href = 'stoplight.html';
    }, 1500);
}

if (happyBtn) {
    happyBtn.addEventListener('click', () => handleMoodSelection('happy'));
}
if (stressedBtn) {
    stressedBtn.addEventListener('click', () => handleMoodSelection('stressed'));
}
if (chillBtn) {
    chillBtn.addEventListener('click', () => handleMoodSelection('chill'));
}

if (window.location.pathname.endsWith('stoplight.html')) {
    const userName = localStorage.getItem('userName') || 'Friend';
    const userMood = localStorage.getItem('userMood') || 'chill';

    if (greetingEl) {
        greetingEl.textContent = `Hey ${userName}, you’re feeling ${userMood}!`;
    }

    if (quoteEl) {
        quoteEl.textContent = quotes[userMood];
    }

    if (suggestionEl) {
        suggestionEl.textContent = suggestions[userMood];
    }

    document.body.classList.add(`${userMood}-bg`);

    if (userMood === 'happy' && greenLight) {
        greenLight.classList.add('glow');
    } else if (userMood === 'stressed' && redLight) {
        redLight.classList.add('glow');
    } else if (userMood === 'chill' && yellowLight) {
        yellowLight.classList.add('glow');
    }
}
