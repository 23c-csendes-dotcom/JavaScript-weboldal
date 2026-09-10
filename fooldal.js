const eldenCarousel = document.getElementById('eldenRingCarousel');

    // Amikor a carousel lapoz egyet:
    eldenCarousel.addEventListener('slid.bs.carousel', function (event) {
        // Megkeressük az éppen aktív dia sorszámát (0, 1, 2...)
        const activeIndex = event.to;

        // Összes build elrejtése (d-none osztály hozzáadása)
        document.querySelectorAll('.build-content').forEach(build => {
            build.classList.add('d-none');
        });

        // Csak annak a buildnek a megjelenítése, amelyiknek a száma megegyezik a diával
        const activeBuild = document.getElementById(`build-${activeIndex}`);
        if (activeBuild) {
            activeBuild.classList.remove('d-none');
        }
    });