(function() {
    var html = document.documentElement;
    var sWidth = html.getBoundingClientRect().width;
    console.log(sWidth);
    html.style.fontSize = sWidth / 15 + 'px';
})();