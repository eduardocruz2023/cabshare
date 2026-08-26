const fenderSource = 'https://shiftline-shared.s3.amazonaws.com/Fender_Twin_73_IR_Pack.zip';
const fenderCabZoneSource = 'https://shiftline-shared.s3.amazonaws.com/Fender_Twin_73_IR_Pack_for_CabZone.zip';
const godsCabSource = 'https://web.archive.org/web/20150325152659/http://www.signalsaudio.com/free/Gods_Cab_1.4.zip';

const fenderNames = [
  ['01 Twin73 dome edge L19', 'Lomo 19A19', 'Clean body'],
  ['02 Twin73 dome edge e609', 'Sennheiser e906', 'Soft overdrive'],
  ['03 Twin73 center L19', 'Lomo 19A19', 'Bright clean'],
  ['04 Twin73 center e609', 'Sennheiser e906', 'Cutting clean'],
  ['05 Twin73 cone20 L19', 'Lomo 19A19', 'Balanced clean'],
  ['06 Twin73 cone20 e609', 'Sennheiser e906', 'Focused crunch'],
  ['07 Twin73 cone L19', 'Lomo 19A19', 'Fat drive'],
  ['08 Twin73 cone e609', 'Sennheiser e906', 'Tight drive'],
  ['09 Twin73 cab plusback L19', 'Lomo 19A19', 'Open-back body'],
  ['10 Twin73 dome edge plusback e609', 'Sennheiser e906', 'Blues clean'],
];

const jesterBrutal = [
  'Cookie Monster',
  'Darth Genocider',
  'Kitten Slayer',
  'Kaiju Tamer',
  'Iceburn Suicide',
  'Vertical Lip Stabber',
  'Manslaughter Joe',
  'Big Bubba',
  'October 32th',
  'Wumbo',
  'World Collider',
  'Cannibal Choir',
];

const catalog = [
  ...fenderNames.flatMap(([name, mic, tone], index) => [
    ir({
      id: `fender-${index}-48`,
      name,
      pack: 'Shift Line Fender Twin 73 IR Pack',
      brand: 'Fender',
      ampFamily: 'Twin 73 Silverface',
      cabinet: '2x12 open back combo',
      speaker: 'JBL D120F',
      mic,
      tone,
      sampleRate: 48000,
      samples: 1000,
      imageUrl: './images/fender-twin-reverb.jpg',
      source: fenderSource,
      license: 'Free download from Shift Line. Commercial redistribution requires permission.',
    }),
    ir({
      id: `fender-cabzone-${index}-48`,
      name: `${name} CabZone`,
      pack: 'Shift Line Fender Twin 73 CabZone-ready Pack',
      brand: 'Fender',
      ampFamily: 'Twin 73 Silverface',
      cabinet: '2x12 open back combo',
      speaker: 'JBL D120F',
      mic,
      tone: `${tone} / CabZone layout`,
      sampleRate: 48000,
      samples: 1000,
      imageUrl: './images/fender-twin-reverb.jpg',
      source: fenderCabZoneSource,
      license: 'Free download from Shift Line. Commercial redistribution requires permission.',
    }),
  ]),
  ...[44100, 48000, 96000].flatMap((sampleRate) =>
    ['SM57', 'MD421', 'C414', 'NT5', 'SM7B', 'U87'].map((mic, index) =>
      ir({
        id: `godscab-${sampleRate}-${mic}`,
        name: `God's Cab Mesa OS ${mic}`,
        pack: "God's Cab 1.4",
        brand: 'Mesa Boogie',
        ampFamily: 'Oversized Rectifier 4x12',
        cabinet: 'Mesa Boogie Oversized 4x12',
        speaker: 'Celestion Vintage 30',
        mic,
        tone: index % 2 === 0 ? 'Modern rhythm' : 'Lead / mix-ready',
        sampleRate,
        samples: sampleRate === 44100 ? 1024 : 2048,
        imageUrl: './images/mesa-oversized-4x12.jpg',
        source: godsCabSource,
        license: 'Free archive download. Verify redistribution terms before mirroring files publicly.',
      }),
    ),
  ),
  ...[44100, 48000].flatMap((sampleRate) =>
    jesterBrutal.map((name, index) =>
      ir({
        id: `jester-${sampleRate}-${index}`,
        name,
        pack: "Jester's Brutal Pack",
        brand: 'Modern high gain',
        ampFamily: 'BG412S V30 / DV-77',
        cabinet: 'Modified Behringer BG412S 4x12',
        speaker: index % 2 ? 'Eminence DV-77' : 'Celestion Vintage 30',
        mic: index % 2 ? 'SM57 close' : 'SM57 / e606 blend',
        tone: index % 2 ? 'Lead' : 'Tight rhythm',
        sampleRate,
        samples: sampleRate === 44100 ? 1024 : 2048,
        imageUrl: './images/marshall-1960ax.jpg',
        source: '#',
        license: 'Local prepared pack. Add original download source before public mirroring.',
      }),
    ),
  ),
];

const els = {
  total: document.querySelector('#totalCount'),
  q: document.querySelector('#q'),
  instrument: document.querySelector('#instrument'),
  sampleRate: document.querySelector('#sampleRate'),
  amp: document.querySelector('#amp'),
  status: document.querySelector('#status'),
  results: document.querySelector('#results'),
};

els.total.textContent = String(catalog.length);
fillSelect(els.instrument, ['Todos', ...unique(catalog.map((item) => item.instrument))], 'Todos');
fillSelect(els.sampleRate, ['Todos', ...unique(catalog.map((item) => formatSampleRate(item.sampleRate)))], 'Todos');
fillSelect(els.amp, ['Todos', ...unique(catalog.map((item) => item.ampFamily))], 'Todos os amps');

document.querySelector('#filters').addEventListener('input', render);
document.querySelector('#filters').addEventListener('change', render);
render();

function ir(input) {
  return {
    instrument: 'Guitarra',
    bitDepth: 24,
    downloads: 0,
    ...input,
  };
}

function fillSelect(select, values, allLabel) {
  select.innerHTML = values
    .map((value) => `<option value="${escapeHtml(value)}">${value === 'Todos' ? allLabel : escapeHtml(value)}</option>`)
    .join('');
}

function render() {
  const query = els.q.value.trim().toLowerCase();
  const instrument = els.instrument.value;
  const sampleRate = els.sampleRate.value;
  const amp = els.amp.value;
  const hasFilter = Boolean(query || instrument !== 'Todos' || sampleRate !== 'Todos' || amp !== 'Todos');

  if (!hasFilter) {
    els.status.textContent = 'Escolha um filtro para carregar os IRs.';
    els.results.innerHTML = emptyState();
    return;
  }

  const rows = catalog.filter((item) => {
    const haystack = `${item.name} ${item.pack} ${item.brand} ${item.ampFamily} ${item.cabinet} ${item.speaker} ${item.tone}`.toLowerCase();
    return (
      (!query || haystack.includes(query)) &&
      (instrument === 'Todos' || item.instrument === instrument) &&
      (sampleRate === 'Todos' || formatSampleRate(item.sampleRate) === sampleRate) &&
      (amp === 'Todos' || item.ampFamily === amp)
    );
  });

  els.status.textContent = `${rows.length} IRs encontrados`;
  if (!rows.length) {
    els.results.innerHTML = emptyState('Nenhum IR encontrado com esses filtros.');
    return;
  }

  const groups = rows.reduce((acc, item) => {
    const key = `${item.instrument} / ${item.brand} / ${item.ampFamily} / ${formatSampleRate(item.sampleRate)}`;
    acc[key] ||= [];
    acc[key].push(item);
    return acc;
  }, {});

  els.results.innerHTML = Object.entries(groups)
    .map(
      ([group, items]) => `
        <section class="group">
          <div class="group-title">
            <h3>${escapeHtml(group)}</h3>
            <span>${items.length} IRs</span>
          </div>
          <div class="cards">${items.map(card).join('')}</div>
        </section>
      `,
    )
    .join('');
}

function card(item) {
  return `
    <article class="card">
      <img src="${item.imageUrl}" alt="${escapeHtml(`${item.brand} ${item.cabinet}`)}" />
      <div class="card-body">
        <div class="card-top">
          <div>
            <p class="brand">${escapeHtml(item.brand)}</p>
            <h4>${escapeHtml(item.name)}</h4>
          </div>
          <span class="rate">${formatSampleRate(item.sampleRate)}</span>
        </div>
        <dl class="specs">
          <div><dt>Amp</dt><dd>${escapeHtml(item.ampFamily)}</dd></div>
          <div><dt>Cab</dt><dd>${escapeHtml(item.cabinet)}</dd></div>
          <div><dt>Speaker</dt><dd>${escapeHtml(item.speaker)}</dd></div>
          <div><dt>Mic</dt><dd>${escapeHtml(item.mic)}</dd></div>
        </dl>
        <div class="card-foot">
          <p>${item.bitDepth}-bit / ${item.samples} samples</p>
          <a href="${item.source}" target="_blank" rel="noopener">${item.source === '#' ? 'Catalogado' : 'Fonte oficial'}</a>
        </div>
        <p class="license">${escapeHtml(item.license)}</p>
      </div>
    </article>
  `;
}

function emptyState(text = 'Escolha um filtro para ver os IRs.') {
  return `<div class="empty"><strong>${escapeHtml(text)}</strong><p>O catalogo so renderiza resultados apos uma selecao para manter a pagina leve.</p></div>`;
}

function unique(values) {
  return Array.from(new Set(values)).sort();
}

function formatSampleRate(rate) {
  if (rate === 44100) return '44.1 kHz';
  if (rate === 48000) return '48 kHz';
  if (rate === 96000) return '96 kHz';
  return `${rate} Hz`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
