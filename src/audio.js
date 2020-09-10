window.onload = function() {
    //to provide support on legacy browsers
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    // create an instance of the audio context in order to use the Web Audio API
    const audioContext = new AudioContext();

    const audioElement = document.querySelector('audio');
    // pass the track to the audio context
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);

    const playBtn = document.getElementById('play-btn')
    playBtn.addEventListener('click', togglePlay, false);
    
    function togglePlay() {
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        if (this.dataset.playing === 'false') {
            audioElement.play();
            this.dataset.playing = 'true';
        } else if (this.dataset.playing === 'true') {
            audioElement.pause();
            this.dataset.playing = 'false';
        }
    }

}