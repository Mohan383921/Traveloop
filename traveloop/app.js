const navMap = {
  home: 'home',
  chat: 'home',
  map: 'map',
  budget: 'map',
  trips: 'trips',
  profile: 'profile'
};

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.screen-tab').forEach(t => t.classList.remove('active'));

  const s = document.getElementById('screen-' + name);
  if (s) s.classList.add('active');

  const navKey = navMap[name];
  if (navKey) {
    const nb = document.getElementById('nav-' + navKey);
    if (nb) nb.classList.add('active');
  }

  const tab = document.getElementById('tab-' + name);
  if (tab) tab.classList.add('active');
}

document.querySelectorAll('.day-tab').forEach(t => {
  t.addEventListener('click', function () {
    document.querySelectorAll('.day-tab').forEach(x => x.classList.remove('active'));
    this.classList.add('active');
  });
});

document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('click', function () {
    this.classList.toggle('active');
    this.classList.toggle('inactive');
  });
});
