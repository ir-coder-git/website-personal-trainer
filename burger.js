const burger = document.querySelector(".burger");

const links = document.querySelectorAll('[data-indexTo]');
const sections = document.querySelectorAll('[data-index]');
const arrow = document.querySelector(".arrow");

let memberSection = undefined;


const activeElements = document.querySelectorAll(".active");

const sectionObjects = [];

class Section {
    constructor(index, rectTop, rectBottom) {
        this.index = index;
        this.rectTop = rectTop;
        this.rectBottom = rectBottom;
    }
}

burger.addEventListener("click", function () {
    for (let i = 0; i < activeElements.length; i++) {
        activeElements[i].classList.toggle("show");
    }

});

function scrollToSection(index) {

    var section = document.querySelector(`[data-index="${index}"]`);

    doScrollTo(section, 1000);
};

arrow.addEventListener("click", function () {
    scrollToSection(2);
});

window.addEventListener("scroll", checkSection);

function setup() {

    links.forEach(element => {

        element.addEventListener("click",
            () => {
                var linkIndex = element.getAttribute('data-indexTo');

                scrollToSection(linkIndex)
            });
    });

    sections.forEach(element => {
        var index = element.getAttribute('data-index');
        var rect = element.getBoundingClientRect();
        var offset = window.pageYOffset;
        var section = new Section(index, rect.top + offset, rect.bottom + offset);
        sectionObjects.push(section);
    })
}


function checkSection() {
    var actualPosition = window.pageYOffset;
    sectionObjects.forEach(element => {
        if (actualPosition >= element.rectTop && actualPosition < element.rectBottom) {

            setHightLight(element.index);
            return; 
        }

    })
}

function setHightLight(index) {

    var link = document.querySelector(`[data-indexTo="${index}"]`);

    if (memberSection == link) {
        return;
    }

    if (memberSection != undefined) {
        memberSection.classList.toggle("highlight");
    }

    memberSection = link;
    memberSection.classList.toggle("highlight");
}


setup();