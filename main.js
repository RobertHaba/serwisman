Vue.component("modal", { template: "#modal-template" });
new Vue({ el: "#price", data: { showPopup: false, scroll: "hidden" }, methods: { stopScroll: function() { document.getElementsByTagName("body")[0].style.overflow = this.scroll } } });
Vue.component("services", { template: "#modal-services" });
var vueServices = new Vue({
    el: "#services2",
    data: { showWindow: false, content: { header: "Usługi dotyczące serwisu laptopów", imgSrc: "./img/picture/laptop-dell.jpg", services: [] } },
    methods: {
        pushLaptop: function() {
            var arr = new Array;
            arr.push({ text: "Analiza problemów" }, { text: "Wymiana uszkodzonej matrycy" }, { text: "Wymiana zawiasów" }, { text: "Wymiana obudowy" }, { text: "Wymiana klawiatury" }, { text: "Wymiana touchpad'a" }, { text: "Wymiana napędu" }, { text: "Wymiana lub naprawa złącz" }, { text: "Wymiana pamięci RAM" }, { text: "Wymiana procesora" }, { text: "Wymiana lub naprawa chłodzenia" }, { text: "Wymiana lub naprawa płyty głównej" }, { text: "Instalacja lub aktualizacja sterowników do laptopa" }, { text: "Instalacja systemu operacyjnego" }, { text: "Instalacja programów" }, { text: "Pierwsza konfiguracja systemu" }, { text: "Przyśpieszenie laptopa" }, { text: "Wymiana lub dołożenie dysku" }, { text: "Odwirusowanie systemu" });
            this.$set(this.content, "services", arr)
        },
        pushTv: function() {
            var arr = new Array;
            arr.push({ text: "wymiana nTVh" }, { text: "wymiana zasilacza" }, { text: "\u015bwietl\u00f3wki do matryc" }, { text: "odwirsuowywanie" }, { text: "odzyskiwanie danych" }, { text: "archiwizacja danych" }, { text: "odzyskiwanie utraconych hase\u0142" }, { text: "reinstalacja systemu operacyjnego / format" }, { text: "partycjonowanie dysk\u00f3w" }, { text: "do\u0142o\u017cenie pami\u0119ci" }, { text: "wymiana klawiatury" }, { text: "aktualizacja oprogramowania" }, { text: "instalacja oprogramowania do ochrony dzieci w internecie" }, { text: "projektowanie i realizacja sieci komputerowych" }, { text: "wymiana z\u0142\u0105cza zasilania" });
            this.$set(this.content, "services", arr)
        },
        pushPhone: function() {
            var arr = new Array;
            arr.push({ text: "wymiana PHONE" }, { text: "wymiana zasilacza" }, { text: "\u015bwietl\u00f3wki do matryc" }, { text: "odwirsuowywanie" }, { text: "odzyskiwanie danych" }, { text: "archiwizacja danych" }, { text: "odzyskiwanie utraconych hase\u0142" }, { text: "reinstalacja systemu operacyjnego / format" }, { text: "partycjonowanie dysk\u00f3w" }, { text: "do\u0142o\u017cenie pami\u0119ci" }, { text: "wymiana klawiatury" }, { text: "aktualizacja oprogramowania" }, { text: "instalacja oprogramowania do ochrony dzieci w internecie" }, { text: "projektowanie i realizacja sieci komputerowych" }, { text: "wymiana z\u0142\u0105cza zasilania" });
            this.$set(this.content, "services", arr)
        },
        pushSystem: function() {
            var arr = new Array;
            arr.push({ text: "wymiana system" }, { text: "wymiana zasilacza" }, { text: "\u015bwietl\u00f3wki do matryc" }, { text: "odwirsuowywanie" }, { text: "odzyskiwanie danych" }, { text: "archiwizacja danych" }, { text: "odzyskiwanie utraconych hase\u0142" }, { text: "reinstalacja systemu operacyjnego / format" }, { text: "partycjonowanie dysk\u00f3w" }, { text: "do\u0142o\u017cenie pami\u0119ci" }, { text: "wymiana klawiatury" }, { text: "aktualizacja oprogramowania" }, { text: "instalacja oprogramowania do ochrony dzieci w internecie" }, { text: "projektowanie i realizacja sieci komputerowych" }, { text: "wymiana z\u0142\u0105cza zasilania" });
            this.$set(this.content, "services", arr)
        },
        pushComputer: function() {
            var arr = new Array;
            arr.push({ text: "wymiana PC" }, { text: "wymiana zasilacza" }, { text: "\u015bwietl\u00f3wki do matryc" }, { text: "odwirsuowywanie" }, { text: "odzyskiwanie danych" }, { text: "archiwizacja danych" }, { text: "odzyskiwanie utraconych hase\u0142" }, { text: "reinstalacja systemu operacyjnego / format" }, { text: "partycjonowanie dysk\u00f3w" }, { text: "do\u0142o\u017cenie pami\u0119ci" }, { text: "wymiana klawiatury" }, { text: "aktualizacja oprogramowania" }, { text: "instalacja oprogramowania do ochrony dzieci w internecie" }, { text: "projektowanie i realizacja sieci komputerowych" }, { text: "wymiana z\u0142\u0105cza zasilania" });
            this.$set(this.content, "services", arr)
        },
        pushOthers: function() {
            var arr = new Array;
            arr.push({ text: "wymiana Other" }, { text: "wymiana zasilacza" }, { text: "\u015bwietl\u00f3wki do matryc" }, { text: "odwirsuowywanie" }, { text: "odzyskiwanie danych" }, { text: "archiwizacja danych" }, { text: "odzyskiwanie utraconych hase\u0142" }, { text: "reinstalacja systemu operacyjnego / format" }, { text: "partycjonowanie dysk\u00f3w" }, { text: "do\u0142o\u017cenie pami\u0119ci" }, { text: "wymiana klawiatury" }, { text: "aktualizacja oprogramowania" }, { text: "instalacja oprogramowania do ochrony dzieci w internecie" }, { text: "projektowanie i realizacja sieci komputerowych" }, { text: "wymiana z\u0142\u0105cza zasilania" });
            this.$set(this.content, "services", arr)
        },
        clickModalMenu: function(el) {
            var modalItems = document.getElementsByClassName("modal-menu-item");
            for (var i = 0; i < modalItems.length; i++) modalItems[i].classList = "bg-c-white modal-menu-item flex-center";
            modalItems[el].classList = "bg-c-orange modal-menu-item flex-center"
        }
    }
});
vueServices.pushLaptop();

function showScroll() { document.getElementsByTagName("body")[0].style.overflow = "auto" }
window.onresize = function() { if (this.innerWidth > 625) document.getElementById("mainNav").style.display = "flex" };

function menu() {
    var menuEl = document.getElementById("mainNav");
    menuEl.style.display = menuEl.style.display == "flex" ? "none" : "flex"
}

function shadowAnim() {
    var section = document.getElementById("services2");
    var boxs = section.getElementsByClassName("tile-con");
    var $jscomp$loop$0 = {};
    $jscomp$loop$0.i = 0;
    for (; $jscomp$loop$0.i < boxs.length; $jscomp$loop$0 = { i: $jscomp$loop$0.i }, $jscomp$loop$0.i++)(function($jscomp$loop$0) { return function(index) { setTimeout(function() { boxs[$jscomp$loop$0.i].className += " shadowAnim" }, $jscomp$loop$0.i * 500) } })($jscomp$loop$0)($jscomp$loop$0.i)
}
window.onload = scrollFunction();

function getDocHeight() { var D = document; return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight) }

function scrollFunction() {
    var topSecAbout = document.getElementById("services").offsetTop;
    var topSecAllegro = document.getElementsByClassName("allegro-sec")[0].offsetTop;
    window.addEventListener("scroll", function showEl() {
        var scrollPosition = window.scrollY;
        if (scrollPosition >= topSecAbout) {
            shadowAnim();
            topSecAbout = getDocHeight()
        }
        if (scrollPosition >= topSecAllegro - 100) {
            countAnim();
            topSecAllegro = getDocHeight()
        }
    })
}

function countAnim() {
    var boxNumber1 = document.getElementsByClassName("count")[0];
    var number1 = 400;
    var zero = 0;
    var boxNumber2 = document.getElementsByClassName("count")[1];
    var number2 = 75;
    var time1 = 2E3 / number1;
    var time2 = 2E3 / number2;
    var allegroSec = document.getElementById("countAction");
    var icons = allegroSec.getElementsByClassName("i-big");
    var helpWidth1 = 0;
    var countInterval = setInterval(function() {
        helpWidth1 += 70 / number1;
        icons[0].style.width = helpWidth1 + "px";
        zero++;
        if (zero == number1) clearInterval(countInterval);
        boxNumber1.innerHTML = zero
    }, time1);
    var helpWidth2 = 0;
    var zero2 = 0;
    var countInterval2 = setInterval(function() {
        helpWidth2 += 70 / number2;
        icons[1].style.width = helpWidth2 + "px";
        zero2++;
        if (zero2 == number2) clearInterval(countInterval2);
        boxNumber2.innerHTML = zero2
    }, time2);
    countAnimFun = undefined
}
smoothScroll = function(element) {
    var scrollTo = document.getElementById(element);
    window.scroll({ behavior: "smooth", left: 0, top: scrollTo.offsetTop - 100 })
};