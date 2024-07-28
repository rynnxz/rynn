    var image = document.getElementById('image');
    let count = 0;
    const clickCount = document.getElementById('score');
    var audio = document.getElementById("musik");
    audio.volume = 0.2;
    audio.play();

    function changeImage() {
        if (image.src.match('before.png')) {
            image.src = 'after.png';
        } else {
            image.src = 'before.png';
        }
        count++;
        clickCount.textContent = count;
    }

    image.addEventListener('mousedown', function() {
        changeImage();
        holdInterval = setInterval(changeImage, 100);
    });

    image.addEventListener('mouseup', function() {
        clearInterval(holdInterval);
    });