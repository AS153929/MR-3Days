// Audio Logic using pre-recorded MP3
const audio = new Audio('../../Media/the_last_lesson.mp3');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const statusEl = document.getElementById('status');

// Update status based on events
audio.addEventListener('play', () => {
    statusEl.textContent = '正在朗读 / Playing';
});

audio.addEventListener('pause', () => {
    statusEl.textContent = '已暂停 / Paused';
});

audio.addEventListener('ended', () => {
    statusEl.textContent = '朗读结束 / Finished';
});

audio.addEventListener('error', (e) => {
    console.error('Audio error:', e);
    statusEl.textContent = '音频加载失败 / Error loading audio';
});

playBtn.addEventListener('click', () => {
    audio.play().catch(e => {
        console.error('Play error:', e);
        statusEl.textContent = '播放失败 / Play failed';
    });
});

pauseBtn.addEventListener('click', () => {
    audio.pause();
});

stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    statusEl.textContent = '已停止 / Stopped';
});
