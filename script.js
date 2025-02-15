document.addEventListener('DOMContentLoaded', function () {
    var videoContainer = document.getElementById('videoContainer');
    var videoFrame = document.getElementById('videoFrame');
    var closeButton = document.getElementById('close');
    var prevButton = document.getElementById('prev');
    var nextButton = document.getElementById('next');

    var episodeBlocks = [
        {
            block: document.getElementById('block1'),
            episodes: [
                "https://www.youtube.com/embed/JM-wGk--rhU?si=iO8kdAeAmueH03H0",
                "https://www.youtube.com/embed/Vc4D8yqC2FU?si=4c56zhwHAtpJkCLr",
                "https://www.youtube.com/embed/T7vtbNaLHKY?si=4F89QzUyYIzyZHum",
                "https://www.youtube.com/embed/vYcxy_N-Hx0?si=hQJyQRSSdk_ePjaR",
                "https://www.youtube.com/embed/6mT79ku9HzY?si=1L7aqEWge8wZLmxp",
                "https://www.youtube.com/embed/cRN2auq7kpU?si=vb7kdMMCAbPXpo6g",
                "https://www.youtube.com/embed/-JaRSp1rn78?si=oQHcTEpQ_OEGhpXY",
                "https://www.youtube.com/embed/NbB1Tc3pWG0?si=bqaP2rWkoSmt0uhu",
                "https://www.youtube.com/embed/45pNRYpKXiM?si=58ptfWLW26rWvCEc",
                "https://www.youtube.com/embed/6AUDNQpr6xg?si=6bKXIrwQkuV-XrsU",
                "https://www.youtube.com/embed/8BO5ll-7mn4?si=eq4RNXGgdlaqxxxd",
                "https://www.youtube.com/embed/sn3brJCDdog?si=s_Bo99I3MYoiwcyf",
                "https://www.youtube.com/embed/jlutE_k-RZg?si=gRImZXKaPyraknDH",
                "https://www.youtube.com/embed/v2rOm8NPviU?si=00nLzwuw0UTR3SkB",
                "https://www.youtube.com/embed/xkrAWwIaaUw?si=chPbXxGAcC1TSy3z",
                "https://www.youtube.com/embed/ObEumn5I260?si=T_NRGDYxud9aLHiO",
                "https://www.youtube.com/embed/_K5YW0eOq_M?si=e4GhOffsK3Sgje52",
                "https://www.youtube.com/embed/ODPlQjz-B2I?si=LJ-Z02fH7Xehk_LA",
                "https://www.youtube.com/embed/BhcdBPsmIgU?si=_z8NM9zfY9KH92l4",
                "https://www.youtube.com/embed/iziznGx7D_4?si=iX2assXozFbpoy_l",
                "https://www.youtube.com/embed/AGxunnK8pWg?si=qzEAOI6U_80k6sQ4",
                "https://www.youtube.com/embed/4qr9FxttDaw?si=cPHxKzfwOPebxs6k",
                "https://www.youtube.com/embed/8xWcfma_BYE?si=sNrSaL4zUG8k9om0",
                "https://www.youtube.com/embed/FpswaxF-38A?si=gbaPnVgss_uqJi9I",
                "https://www.youtube.com/embed/7fpB__X4JG4?si=GKO3xudyapbZlb5f",
                "https://www.youtube.com/embed/2jNwnnxjdgQ?si=h_UdF_sXgexUBCJv",
                "https://www.youtube.com/embed/zhkIKcqu_8k?si=ccQDDChlZuylAbeU",
                "https://www.youtube.com/embed/z-8Wto-5Dt8?si=GyMqgSP2o1NrDr1_",
                "https://www.youtube.com/embed/gXwbf65eTgs?si=1Bv49BePfnXBbsHc",
                "https://www.youtube.com/embed/sT0TV0efw6I?si=yCcChhxHiVROsjHc",
            ],
            storageKey: 'currentIndex1'
        },
        {
            block: document.getElementById('block2'),
            episodes: [
                "https://www.youtube.com/embed/ZE22NGUvuL8?si=MiVd1x2mdKBDw9iN",
                "https://www.youtube.com/embed/TCcV9dlARlI?si=6YwJOj11ud-AWXNM",
                "https://www.youtube.com/embed/YVVjKezkmJc?si=l66M47M5C5gsOGbY",
                "https://www.youtube.com/embed/7pMJ9rAgxUU?si=VZ0zzutHWaFXhm2-",
                "https://www.youtube.com/embed/fFeyBRLWt3E?si=0db_iiEUvpEL2eOR",
                "https://www.youtube.com/embed/TXiDkxcQyls?si=CT-OfqmQl2eTKN66",
                "https://www.youtube.com/embed/vTKPUUNFQs4?si=9exLMlWXX-wFKVZ4",
                "https://www.youtube.com/embed/QwNN1e11dN0?si=IavdbR1pLGJzdUnn",
                "https://www.youtube.com/embed/UgAWqq5NIo8?si=tcfWoySGs16FUG-b",
                "https://www.youtube.com/embed/-JvH2iAxR2w?si=tye443T3WTwZ1CO3",
            ],
            storageKey: 'currentIndex2'
        }
    ];

    var currentSeries = null;
    var currentIndex = 0;

    episodeBlocks.forEach(series => {
        var savedIndex = parseInt(localStorage.getItem(series.storageKey)) || 0;

        series.block.addEventListener('click', function () {
            if (currentSeries !== series) {
                currentSeries = series;
                currentIndex = savedIndex;
            }

            // Скрываем все блоки при открытии видео
            episodeBlocks.forEach(s => s.block.classList.add('hidden-text'));

            // Анимация раскрытия
            series.block.classList.add('expanded');

            setTimeout(() => {
                series.block.classList.add('hidden'); // Прячем блок после анимации
                loadVideo(currentIndex);
                videoContainer.style.display = 'block';
                closeButton.style.display = 'block'; // Показываем кнопку "Закрыть"
                prevButton.style.display = 'inline-block'; // Показываем кнопку "Назад"
                nextButton.style.display = 'inline-block'; // Показываем кнопку "Вперед"
            }, 500);
        });
    });

    // Закрытие видео
    closeButton.addEventListener('click', function () {
        videoContainer.style.display = 'none';
        videoFrame.src = "";

        // Скрываем кнопки управления
        closeButton.style.display = 'none';
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';

        // Показываем блоки сериалов снова
        episodeBlocks.forEach(series => {
            series.block.classList.remove('hidden', 'expanded', 'hidden-text');
        });
    });

    // Функция загрузки видео
    function loadVideo(index) {
        if (currentSeries) {
            videoFrame.src = currentSeries.episodes[index];
            localStorage.setItem(currentSeries.storageKey, index); // Запоминаем текущую серию
        }
    }

    // Кнопка "Назад"
    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            loadVideo(currentIndex);
        }
    });

    // Кнопка "Вперед"
    nextButton.addEventListener('click', function () {
        if (currentIndex < currentSeries.episodes.length - 1) {
            currentIndex++;
            loadVideo(currentIndex);
        }
    });
});
