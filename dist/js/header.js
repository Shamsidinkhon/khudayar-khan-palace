
        const imgs = document.getElementById("imgs");
        const leftBtn = document.getElementById("left");
        const rightBtn = document.getElementById("right");

        const img = document.querySelectorAll("#imgs img");
        
        let idx = 0;

        function changeImage() {
            if (idx > img.length - 1) {
                idx = 0;
            } else if (idx < 0) {
                idx = img.length - 1;
            };

            imgs.style.transform = `translateX(${-idx * 1340}px)`;
        }

        rightBtn.addEventListener('click', function change() {
            idx++;

            changeImage()
            resetInterval()
        });

        leftBtn.addEventListener('click', function change() {
            idx--;

            changeImage()
            resetInterval()
        });
        interval = setInterval(run, 5000);

        function run() {
            idx++;

            changeImage()
        }

        function resetInterval() {
            clearInterval(interval);

            let interval = setInterval(run, 2000);
        }