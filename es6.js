this.languages = document.querySelectorAll('#languages div');
for (let i = 0; i < this.languages.length; i += 1) {
    const lang = this.languages[i].getAttribute('data-lang');
    const level = this.languages[i].getAttribute('data-level');
    const newDOM = '<div style="height: ' + level + '%">' +
        '<p class="language-level">' + level + '%</p>' +
        '<p class="language-name">' + lang + '</p>' +
        '</div>';
    this.languages[i].insertAdjacentHTML('beforeend', newDOM);
}