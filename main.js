/* inscription animation*/

const inscriptionTitles = [...document.querySelectorAll(".front p")];


function showInscription(inscriptionTitle) {
    inscriptionTitles.forEach(inscriptionTitle => inscriptionTitle.classList.toggle("active"))
}
setInterval(showInscription, 1000)


function doScrollTo(element, speed) {
    var rect = element.getBoundingClientRect();
    var startingY = window.pageYOffset;
    var diff = Math.abs(rect.top - startingY);

    var log = 1 / Math.log10(diff);

    doScrolling(rect.top + startingY, log * speed);
}

function doScrolling(elementY, duration) {
    var startingY = window.pageYOffset;
    var diff = elementY - startingY;
    var start;

    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
        if (!start)
            start = timestamp;
        // Elapsed milliseconds since start of scrolling.
        var time = timestamp - start;
        // Get percent of completion in range [0, 1].
        var percent = Math.min(time / duration, 1);

        window.scrollTo(0, startingY + diff * percent);

        // Proceed with animation as long as we wanted it to.
        if (time < duration) {
            window.requestAnimationFrame(step);
        }
    })
}