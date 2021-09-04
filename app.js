// image = ["url('img/Capture.PNG')","url('img/clouds.jpg')","url('img/drops.jpg')","url('img/drops2.jpg')","url('img/Itree.jpg')","url('img/leaves.jpg')","url('img/mount.jpg')","url('img/seas.jpg')","url('img/stars.jpg')","url('img/woodgrass.jpg')","url('img/globe.jpg')","url('img/forest.jpg')"]

const banner = document.querySelector('.banner')
const blocks = document.querySelector('.blocks')

for (let i = 0; i < 350; i++) {
    banner.innerHTML += "<div class='blocks'></div>";
    blocks.style.animationDelay = `${i -0.05}s`
}
