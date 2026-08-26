const fenderSource = 'https://shiftline-shared.s3.amazonaws.com/Fender_Twin_73_IR_Pack.zip';
const fenderCabZoneSource = 'https://shiftline-shared.s3.amazonaws.com/Fender_Twin_73_IR_Pack_for_CabZone.zip';
const godsCabSource = 'https://web.archive.org/web/20150325152659/http://www.signalsaudio.com/free/Gods_Cab_1.4.zip';
const celestionSource = 'https://www.celestionplus.com/free-download/';
const shiftBassSource = 'https://shift-line.com/irpackbass';
const shiftGuitarHdSource = 'https://shift-line.com/guitarhdirpack1';
const scienceAmpsSource = 'https://www.scienceamps.com/irs.html';
const pandaSource = 'https://panda-sound.com/product/panda-cabs-free-pack/';
const worshipSource = 'https://worshiptutorials.com/product/acoustic-ir-sample-pack/';
const acousticIrSource = 'https://www.acousticir.ovh/';

const brandVisuals = {
  Aguilar: ['brand-aguilar', 'Aguilar'],
  Ampeg: ['brand-ampeg', 'Ampeg'],
  Celestion: ['brand-celestion', 'Celestion'],
  Diezel: ['brand-diezel', 'Diezel'],
  Eden: ['brand-eden', 'Eden'],
  ENGL: ['brand-engl', 'ENGL'],
  Fender: ['brand-fender', 'Fender'],
  Guild: ['brand-acoustic', 'Guild'],
  Hiwatt: ['brand-hiwatt', 'Hiwatt'],
  Marshall: ['brand-marshall', 'Marshall'],
  Martin: ['brand-acoustic', 'Martin'],
  McPherson: ['brand-acoustic', 'McPherson'],
  'Mesa Boogie': ['brand-mesa', 'Mesa Boogie'],
  Orange: ['brand-orange', 'Orange'],
  Peavey: ['brand-peavey', 'Peavey'],
  'Science Amps': ['brand-science', 'Science'],
  Taylor: ['brand-acoustic', 'Taylor'],
  'Trace Elliot': ['brand-trace', 'Trace Elliot'],
  Vox: ['brand-vox', 'Vox'],
};

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

const sourcePacks = [
  {
    source: celestionSource,
    pack: 'Celestion Cenzo Townshend Free Mix',
    license: 'Free Celestion sample download via mailing-list signup. Use the official source link.',
    imageUrl: './images/marshall-1960ax.jpg',
    entries: [
      ['Celestion', 'Vintage 30 1x12', 'Closed-back 1x12', 'Celestion Vintage 30', ['Cenzo Mix'], [44100, 48000]],
      ['Marshall', '1960 Vintage 4x12', 'Marshall 1960 4x12', 'Celestion Vintage 30', ['SM57', 'R121', 'MD421'], [44100, 48000]],
      ['Vox', 'AC30 Blue 2x12', 'Vox AC30 2x12', 'Celestion Blue', ['SM57', 'R121'], [44100, 48000]],
      ['Orange', 'PPC412 V30', 'Orange PPC412 4x12', 'Celestion Vintage 30', ['SM57', 'MD421'], [44100, 48000]],
    ],
  },
  {
    source: shiftGuitarHdSource,
    pack: 'Shift Line Guitar HD IR Pack 1 Free',
    license: 'Free pack from Shift Line. WAV 24-bit 48 kHz source page.',
    imageUrl: './images/marshall-1960ax.jpg',
    entries: [
      ['Marshall', 'JCM800 4x12', 'British 4x12', 'Celestion Greenback G12M', ['SM57', 'R121'], [48000]],
      ['Fender', 'Deluxe Reverb 1x12', 'American open-back 1x12', 'Jensen style 12"', ['SM57', 'Condenser'], [48000]],
      ['Vox', 'AC30 Top Boost 2x12', 'British open-back 2x12', 'Celestion Blue', ['SM57', 'Ribbon'], [48000]],
      ['Hiwatt', 'DR103 4x12', 'Hiwatt-style 4x12', 'Fane style speaker', ['SM57', 'MD421'], [48000]],
    ],
  },
  {
    source: scienceAmpsSource,
    pack: 'Science Amps Free IRs',
    license: 'Free downloads from Science Amps for their guitar and bass cabinets.',
    imageUrl: './images/mesa-oversized-4x12.jpg',
    entries: [
      ['Science Amps', 'Mother 4x12', 'Science Mother 4x12', 'WGS / Eminence style mix', ['SM57', 'R121', 'Mix'], [44100, 48000]],
      ['Science Amps', 'Street Sweeper 2x12', 'Science 2x12', 'British ceramic speakers', ['SM57', 'MD421'], [44100, 48000]],
      ['Science Amps', 'Decolonizer Bass 2x15', 'Science bass 2x15', '15 inch bass drivers', ['D112', 'RE20'], [44100, 48000]],
    ],
  },
  {
    source: pandaSource,
    pack: 'Panda Cabs Free Pack',
    license: 'Free pack from Panda Sound. Includes mix-ready guitar/bass cabinet IR formats.',
    imageUrl: './images/mesa-oversized-4x12.jpg',
    entries: [
      ['Mesa Boogie', 'Dual Rectifier V30 4x12', 'Modern 4x12', 'Celestion Vintage 30', ['SM57', 'MD421', 'Mix'], [44100, 48000]],
      ['Peavey', '5150 4x12', 'High gain 4x12', 'Sheffield / V30 style', ['SM57', 'R121'], [44100, 48000]],
      ['ENGL', 'Pro V30 4x12', 'ENGL Pro 4x12', 'Celestion Vintage 30', ['SM57', 'MD421'], [44100, 48000]],
      ['Diezel', 'Rear Loaded 4x12', 'Diezel 4x12', 'Celestion Vintage 30', ['SM57', 'Mix'], [44100, 48000]],
    ],
  },
  {
    source: shiftBassSource,
    pack: 'Shift Line Bass IR Pack',
    license: 'Free Shift Line bass pack. Mono 24-bit 48 kHz WAV, 1000 samples according to source page.',
    imageUrl: './images/mesa-oversized-4x12.jpg',
    entries: [
      ['Ampeg', 'SVT 8x10', 'Sealed bass 8x10', '10 inch bass drivers', ['RE20', 'D112', 'Mix'], [48000]],
      ['Ampeg', 'B15 1x15', 'Fliptop 1x15', '15 inch bass driver', ['D112', 'Condenser'], [48000]],
      ['Aguilar', 'DB 4x10', 'Modern bass 4x10', '10 inch bass drivers', ['RE20', 'D112'], [48000]],
      ['Eden', 'D410XLT', 'Hi-fi bass 4x10', '10 inch bass drivers', ['RE20', 'D112'], [48000]],
      ['Trace Elliot', '4x10 Bass', 'British bass 4x10', '10 inch bass drivers', ['RE20', 'Mix'], [48000]],
    ],
  },
  {
    source: worshipSource,
    pack: 'Worship Tutorials Acoustic IR Sample Pack',
    license: 'Free acoustic sample pack. Official product page may require checkout.',
    imageUrl: './images/fender-twin-reverb.jpg',
    entries: [
      ['Martin', 'D-35 Acoustic Body', 'Dreadnought acoustic body', 'Acoustic guitar resonance', ['UST', 'LR Baggs', 'Fishman'], [44100, 48000]],
      ['Taylor', '816ce Acoustic Body', 'Grand Symphony acoustic body', 'Acoustic guitar resonance', ['UST', 'LR Baggs', 'Fishman'], [44100, 48000]],
      ['McPherson', 'Camrielle Acoustic Body', 'Boutique acoustic body', 'Acoustic guitar resonance', ['UST', 'LR Baggs', 'Fishman'], [44100, 48000]],
    ],
  },
  {
    source: acousticIrSource,
    pack: 'AcousticIR Community Library',
    license: 'Community acoustic IR library. Use source page for download and attribution details.',
    imageUrl: './images/fender-twin-reverb.jpg',
    entries: [
      ['Taylor', '414ce Acoustic Body', 'Grand Auditorium acoustic body', 'Acoustic guitar resonance', ['Barbera', 'Fishman', 'Piezo'], [44100, 48000]],
      ['Martin', 'OM Acoustic Body', 'Orchestra Model acoustic body', 'Acoustic guitar resonance', ['Piezo', 'Soundboard'], [44100, 48000]],
      ['Guild', 'Dreadnought Acoustic Body', 'Dreadnought acoustic body', 'Acoustic guitar resonance', ['Piezo', 'Magnetic'], [44100, 48000]],
    ],
  },
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
        brand: 'Marshall',
        ampFamily: 'BG412S V30 / DV-77',
        cabinet: 'Modified Behringer BG412S 4x12',
        speaker: index % 2 ? 'Eminence DV-77' : 'Celestion Vintage 30',
        mic: index % 2 ? 'SM57 close' : 'SM57 / e606 blend',
        tone: index % 2 ? 'Lead' : 'Tight rhythm',
        sampleRate,
        samples: sampleRate === 44100 ? 1024 : 2048,
        imageUrl: './images/marshall-1960ax.jpg',
        source: '#',
        license: 'Fonte original ainda em revisao. Este item fica apenas como referencia ate a origem ser confirmada.',
      }),
    ),
  ),
  ...sourcePacks.flatMap((pack) => expandSourcePack(pack)),
];

const els = {
  total: document.querySelector('#totalCount'),
  q: document.querySelector('#q'),
  instrument: document.querySelector('#instrument'),
  brand: document.querySelector('#brand'),
  sampleRate: document.querySelector('#sampleRate'),
  amp: document.querySelector('#amp'),
  status: document.querySelector('#status'),
  results: document.querySelector('#results'),
};

els.total.textContent = String(catalog.length);
fillSelect(els.instrument, ['Todos', ...unique(catalog.map((item) => item.instrument))], 'Todos');
fillSelect(els.brand, ['Todos', ...unique(catalog.map((item) => item.brand))], 'Todas as marcas');
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

function expandSourcePack(pack) {
  return pack.entries.flatMap(([brand, ampFamily, cabinet, speaker, mics, rates]) =>
    rates.flatMap((sampleRate) =>
      mics.map((mic) =>
        ir({
          id: `${slug(pack.pack)}-${slug(brand)}-${slug(ampFamily)}-${slug(mic)}-${sampleRate}`,
          name: `${ampFamily} ${mic}`,
          pack: pack.pack,
          brand,
          ampFamily,
          cabinet,
          speaker,
          mic,
          tone: brand === 'Ampeg' || brand === 'Aguilar' || brand === 'Eden' || brand === 'Trace Elliot' ? 'Bass cabinet' : brand === 'Taylor' || brand === 'Martin' || brand === 'McPherson' || brand === 'Guild' ? 'Acoustic body match' : 'Curated cab capture',
          sampleRate,
          samples: sampleRate === 44100 ? 1024 : 2048,
          imageUrl: pack.imageUrl,
          source: pack.source,
          license: pack.license,
          instrument: brand === 'Ampeg' || brand === 'Aguilar' || brand === 'Eden' || brand === 'Trace Elliot' ? 'Baixo' : brand === 'Taylor' || brand === 'Martin' || brand === 'McPherson' || brand === 'Guild' ? 'Violao' : 'Guitarra',
        }),
      ),
    ),
  );
}

function slug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function fillSelect(select, values, allLabel) {
  select.innerHTML = values
    .map((value) => `<option value="${escapeHtml(value)}">${value === 'Todos' ? allLabel : escapeHtml(value)}</option>`)
    .join('');
}

function render() {
  const query = els.q.value.trim().toLowerCase();
  const instrument = els.instrument.value;
  const brand = els.brand.value;
  const sampleRate = els.sampleRate.value;
  const amp = els.amp.value;
  const hasFilter = Boolean(query || instrument !== 'Todos' || brand !== 'Todos' || sampleRate !== 'Todos' || amp !== 'Todos');

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
      (brand === 'Todos' || item.brand === brand) &&
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
  const [visualClass, visualLabel] = brandVisuals[item.brand] || ['brand-default', item.brand];
  const sourceAction =
    item.source === '#'
      ? '<span class="pending-source">Fonte em revisao</span>'
      : `<a href="${item.source}" target="_blank" rel="noopener">Fonte oficial</a>`;
  return `
    <article class="card">
      <div class="brand-art ${visualClass}" role="img" aria-label="${escapeHtml(`${item.brand} ${item.cabinet}`)}">
        <span>${escapeHtml(visualLabel)}</span>
      </div>
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
          ${sourceAction}
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
