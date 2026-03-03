lucide.createIcons();

fetch('https://api.github.com/repos/raigenlabs/openQR')
    .then(res => res.json())
    .then(data => {
        document.getElementById('starCount').textContent =
            data.stargazers_count >= 1000
                ? (data.stargazers_count / 1000).toFixed(1) + 'k'
                : data.stargazers_count;
    })
    .catch(() => {
        document.getElementById('starCount').textContent = '0';
    });

let currentData = '';
let currentColor = '#f0f0f0';
let currentDotStyle = 'rounded';
let currentLogoSrc = null;
let qrCodeInstance = null;

const morphBox = document.getElementById('morphBox');
const pillRow = document.getElementById('pillRow');
const pillInput = document.getElementById('pillInput');
const pillBtn = document.getElementById('pillBtn');
const qrLayout = document.getElementById('qrLayout');
const qrWrap = document.getElementById('qrWrap');
const qrPlaceholder = document.getElementById('qrPlaceholder');
const qrCodeEl = document.getElementById('qrCodeEl');
const qrEditInput = document.getElementById('qrEditInput');
const qrEditGo = document.getElementById('qrEditGo');
const logoBtn = document.getElementById('logoBtn');
const logoFileInput = document.getElementById('logoFileInput');
const logoBadge = document.getElementById('logoBadge');
const logoPreview = document.getElementById('logoPreview');
const colorBtn = document.getElementById('colorBtn');
const colorPopover = document.getElementById('colorPopover');
const customColorPicker = document.getElementById('customColorPicker');
const dotBtn = document.getElementById('dotBtn');
const dotPopover = document.getElementById('dotPopover');
const downloadBtn = document.getElementById('downloadBtn');

function expand(val) {
    currentData = val.trim();
    if (!currentData) return;
    pillRow.classList.add('hidden');
    morphBox.classList.remove('state-pill');
    morphBox.classList.add('state-expanded');
    setTimeout(() => {
        qrLayout.classList.add('visible');
        qrEditInput.value = currentData;
        renderQR();
    }, 420);
}

function renderQR() {
    if (!currentData) return;
    qrPlaceholder.style.display = 'none';
    qrCodeEl.style.display = 'flex';
    qrCodeEl.innerHTML = '';
    qrWrap.classList.add('generating');

    const opts = {
        width: 280, height: 280, type: 'canvas', data: currentData,
        dotsOptions: { color: currentColor, type: currentDotStyle },
        cornersSquareOptions: { color: currentColor, type: 'extra-rounded' },
        cornersDotOptions: { color: currentColor, type: 'dot' },
        backgroundOptions: { color: 'transparent' },
        qrOptions: { errorCorrectionLevel: currentLogoSrc ? 'H' : 'M' }
    };
    if (currentLogoSrc) {
        opts.image = currentLogoSrc;
        opts.imageOptions = { crossOrigin: 'anonymous', margin: 6, imageSize: 0.28 };
    }
    qrCodeInstance = new QRCodeStyling(opts);
    qrCodeInstance.append(qrCodeEl);
    setTimeout(() => qrWrap.classList.remove('generating'), 600);
}

function handleGenerate() {
    const val = pillInput.value;
    if (!val.trim()) { pillInput.focus(); return; }
    expand(val);
}
pillBtn.addEventListener('click', handleGenerate);
pillInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleGenerate(); });
setTimeout(() => pillInput.focus(), 600);

function handleQRUpdate() {
    const val = qrEditInput.value.trim();
    if (!val) return;
    currentData = val; renderQR();
}
qrEditGo.addEventListener('click', handleQRUpdate);
qrEditInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleQRUpdate(); });
qrEditInput.addEventListener('input', () => {
    clearTimeout(qrEditInput._d);
    qrEditInput._d = setTimeout(handleQRUpdate, 700);
});

logoFileInput.addEventListener('change', e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        currentLogoSrc = ev.target.result;
        logoPreview.src = currentLogoSrc;
        logoBadge.style.display = 'block';
        logoBtn.classList.add('active');
        if (currentData) renderQR();
    };
    reader.readAsDataURL(file);
});

let colorOpen = false, dotOpen = false;

colorBtn.addEventListener('click', e => {
    e.stopPropagation();
    colorOpen = !colorOpen;
    colorPopover.classList.toggle('open', colorOpen);
    colorBtn.classList.toggle('active', colorOpen);
    dotPopover.classList.remove('open'); dotOpen = false; dotBtn.classList.remove('active');
});
document.querySelectorAll('.swatch').forEach(sw => {
    sw.addEventListener('click', () => {
        currentColor = sw.dataset.color;
        customColorPicker.value = currentColor;
        document.querySelectorAll('.swatch').forEach(s => s.classList.remove('sel'));
        sw.classList.add('sel');
        if (currentData) renderQR();
    });
});
customColorPicker.addEventListener('input', e => {
    currentColor = e.target.value;
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('sel'));
    if (currentData) renderQR();
});

dotBtn.addEventListener('click', e => {
    e.stopPropagation();
    dotOpen = !dotOpen;
    dotPopover.classList.toggle('open', dotOpen);
    dotBtn.classList.toggle('active', dotOpen);
    colorPopover.classList.remove('open'); colorOpen = false; colorBtn.classList.remove('active');
});
document.querySelectorAll('.dot-opt').forEach(opt => {
    opt.addEventListener('click', () => {
        currentDotStyle = opt.dataset.style;
        document.querySelectorAll('.dot-opt').forEach(o => o.classList.remove('sel'));
        opt.classList.add('sel');
        dotPopover.classList.remove('open'); dotOpen = false; dotBtn.classList.remove('active');
        if (currentData) renderQR();
    });
});

downloadBtn.addEventListener('click', () => {
    if (!qrCodeInstance) return;
    downloadBtn.classList.add('active');
    qrCodeInstance.download({ name: 'openqr', extension: 'png' });
    setTimeout(() => downloadBtn.classList.remove('active'), 800);
});

document.addEventListener('click', e => {
    if (!colorBtn.contains(e.target) && !colorPopover.contains(e.target)) {
        colorPopover.classList.remove('open'); colorOpen = false; colorBtn.classList.remove('active');
    }
    if (!dotBtn.contains(e.target) && !dotPopover.contains(e.target)) {
        dotPopover.classList.remove('open'); dotOpen = false; dotBtn.classList.remove('active');
    }
});
