'use strict';
const menu = document.querySelector('.menu-toggle');
menu?.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  document.querySelector('#navigation').classList.toggle('open', !expanded);
});
const grid = document.querySelector('#publication-grid');
if (grid) {
  const cards = [...grid.querySelectorAll('.publication')];
  const buttons = [...document.querySelectorAll('[data-mode]')];
  const search = document.querySelector('#publication-search');
  let mode = new URLSearchParams(location.search).get('view') === 'all' ? 'all' : 'selected';
  function update() {
    const query = search.value.trim().toLocaleLowerCase('en');
    let shown = 0;
    cards.forEach(card => {
      const matches = (mode === 'all' || card.dataset.selected === 'true') && card.dataset.search.toLocaleLowerCase('en').includes(query);
      card.hidden = !matches; if (matches) shown++;
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === mode)));
    document.querySelector('.result-count').textContent = `${shown} ${shown === 1 ? 'publication' : 'publications'} · ${mode === 'all' ? 'Complete collection: articles and chapters' : 'Selected work'}`;
    document.querySelector('.no-results').hidden = shown !== 0;
  }
  buttons.forEach(button => button.addEventListener('click', () => { mode = button.dataset.mode; update(); }));
  search.addEventListener('input', update);
  update();
}
