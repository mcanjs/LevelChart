var languages = document.querySelectorAll('#languages div');
for (var i = 0; i < this.languages.length; i += 1) {
    var lang = this.languages[i].getAttribute('data-lang');
    var level = this.languages[i].getAttribute('data-level');
    var newDOM = '<div style="height: ' + level + '%">' +
        '<p class="language-level">' + level + '%</p>' +
        '<p class="language-name">' + lang + '</p>' +
        '</div>';
    languages[i].insertAdjacentHTML('beforeend', newDOM);
}