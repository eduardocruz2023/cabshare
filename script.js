const fenderSource = 'https://shiftline-shared.s3.amazonaws.com/Fender_Twin_73_IR_Pack.zip';
const fenderCabZoneSource = 'https://shiftline-shared.s3.amazonaws.com/Fender_Twin_73_IR_Pack_for_CabZone.zip';
const godsCabSource = 'https://web.archive.org/web/20150325152659/http://www.signalsaudio.com/free/Gods_Cab_1.4.zip';
const celestionSource = 'https://www.celestionplus.com/free-download/';
const shiftBassSource = 'https://shift-line.com/irpackbass';
const shiftBassDownload = 'https://shiftline-shared.s3.amazonaws.com/Shift_Line_Bass_IR_Pack.zip';
const shiftGuitarHdSource = 'https://shift-line.com/guitarhdirpack1';
const scienceAmpsSource = 'https://www.scienceamps.com/irs.html';
const pandaSource = 'https://panda-sound.com/product/panda-cabs-free-pack/';
const worshipSource = 'https://worshiptutorials.com/product/acoustic-ir-sample-pack/';
const acousticIrSource = 'https://www.acousticir.ovh/';
const originEffectsSource = 'https://origineffects.com/product/ir-cab-library/';
const line6AllureSource = 'https://line6.com/allure/';
const redwirezSource = 'https://redwirez.com/pages/the-marshall-1960a-ir-pack';
const mlSoundLabSource = 'https://ml-sound-lab.com/pages/free-premium-ir';
const forwardAudioSource = 'https://www.forward-audio.com/downloads';
const darwinsCatSource = 'https://darwinscat.com/sound-utils/cabinet-ir-utility';
const ggwpBassSource = 'https://ggwptech.com/free-bass-cab-impulse-response-library';
const jesterBrutalSource = 'https://www.jester-dyne-productions.com/brutal-ir-pack/';
const jesterBrutalDownload = 'https://www.jester-dyne-productions.com/content/files/2023/04/JestersBrutalPack_1.0.zip';
const djammincabsSource = 'https://zystrix.com/djammincabs.htm';
const djamminGuitarDownload = 'https://zystrix.com/Djammincabs%20100%20Free%20Guitar%20IR%20Cabs.zip';
const djamminBassDownload = 'https://zystrix.com/Djammincabs%20100%20Free%20Bass%20IR%20Cabs.zip';

const brandVisuals = {
  Aguilar: ['brand-aguilar', 'Aguilar'],
  Ampeg: ['brand-ampeg', 'Ampeg'],
  Bogner: ['brand-bogner', 'Bogner'],
  Celestion: ['brand-celestion', 'Celestion'],
  Diezel: ['brand-diezel', 'Diezel'],
  Djammincabs: ['brand-djammin', 'Djammincabs'],
  Eden: ['brand-eden', 'Eden'],
  ENGL: ['brand-engl', 'ENGL'],
  Fender: ['brand-fender', 'Fender'],
  Friedman: ['brand-friedman', 'Friedman'],
  'Gallien-Krueger': ['brand-gk', 'Gallien-Krueger'],
  Gibson: ['brand-acoustic', 'Gibson'],
  Hartke: ['brand-hartke', 'Hartke'],
  Guild: ['brand-acoustic', 'Guild'],
  Hiwatt: ['brand-hiwatt', 'Hiwatt'],
  'Line 6': ['brand-line6', 'Line 6'],
  Magnatone: ['brand-magnatone', 'Magnatone'],
  Markbass: ['brand-markbass', 'Markbass'],
  Marshall: ['brand-marshall', 'Marshall'],
  Martin: ['brand-acoustic', 'Martin'],
  Matchless: ['brand-matchless', 'Matchless'],
  McPherson: ['brand-acoustic', 'McPherson'],
  'Mesa Boogie': ['brand-mesa', 'Mesa Boogie'],
  Orange: ['brand-orange', 'Orange'],
  Peavey: ['brand-peavey', 'Peavey'],
  'Science Amps': ['brand-science', 'Science'],
  Silvertone: ['brand-silvertone', 'Silvertone'],
  Supro: ['brand-supro', 'Supro'],
  Taylor: ['brand-acoustic', 'Taylor'],
  'Trace Elliot': ['brand-trace', 'Trace Elliot'],
  Vox: ['brand-vox', 'Vox'],
  Yamaha: ['brand-acoustic', 'Yamaha'],
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

const djamminGuitarCabs = Array.from({ length: 100 }, (_, index) => `Guitar Cab ${String(index + 1).padStart(3, '0')}`);
const djamminBassCabs = Array.from({ length: 100 }, (_, index) => `Bass Cab ${String(index + 1).padStart(3, '0')}`);

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
    downloadUrl: shiftBassDownload,
    pack: 'Shift Line Bass IR Pack',
    license: 'Free Shift Line bass pack com ZIP direto. Mono 24-bit 48 kHz WAV, 1000 samples according to source page.',
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
    source: djammincabsSource,
    downloadUrl: djamminGuitarDownload,
    pack: 'Djammincabs 100 Free Guitar IR Cabs',
    license: 'Pacote gratuito com 100 IRs de guitarra em WAV mono 48 kHz / 24-bit PCM, conforme a pagina do autor.',
    imageUrl: './images/marshall-1960ax.jpg',
    entries: djamminGuitarCabs.map((name) => [
      'Djammincabs',
      name,
      'Synthetic guitar cabinet IR',
      'Designed cabinet curve',
      ['Direct WAV pack'],
      [48000],
    ]),
  },
  {
    source: djammincabsSource,
    downloadUrl: djamminBassDownload,
    pack: 'Djammincabs 100 Free Bass IR Cabs',
    license: 'Pacote gratuito com 100 IRs de baixo em WAV mono 48 kHz / 24-bit PCM, conforme a pagina do autor.',
    imageUrl: './images/mesa-oversized-4x12.jpg',
    entries: djamminBassCabs.map((name) => [
      'Djammincabs',
      name,
      'Synthetic bass cabinet IR',
      'Designed bass cabinet curve',
      ['Direct WAV pack'],
      [48000],
    ]),
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
  {
    source: originEffectsSource,
    pack: 'Origin Effects IR Cab Library',
    license: 'Free vintage cabinet library from Origin Effects. Source page lists 163 WAV files, 24-bit, 44.1/48/96 kHz.',
    imageUrl: './images/fender-twin-reverb.jpg',
    entries: [
      ['Fender', 'Brown Deluxe 1x12', 'Fender Brown Deluxe combo', 'Oxford / Jensen style 12"', ['SM57', 'R121', 'Room'], [44100, 48000, 96000]],
      ['Fender', 'Black Panel 2x12', 'American open-back 2x12', 'Jensen C12N style', ['SM57', 'Condenser', 'Mix'], [44100, 48000, 96000]],
      ['Fender', 'Tweed 4x10', 'American tweed 4x10', 'Jensen P10R style', ['SM57', 'Ribbon', 'Mix'], [44100, 48000, 96000]],
      ['Marshall', 'Plexi 4x12', 'British basketweave 4x12', 'Celestion Greenback', ['SM57', 'R121', 'Mix'], [44100, 48000, 96000]],
      ['Marshall', 'Bluesbreaker 2x12', 'British open-back 2x12', 'Celestion Alnico', ['SM57', 'Ribbon', 'Room'], [44100, 48000, 96000]],
      ['Vox', 'AC30 Alnico 2x12', 'Vox open-back 2x12', 'Celestion Blue', ['SM57', 'R121', 'Room'], [44100, 48000, 96000]],
      ['Magnatone', '213 Troubadour 1x12', 'Magnatone combo cab', 'Oxford style 12"', ['SM57', 'Condenser', 'Room'], [44100, 48000, 96000]],
      ['Supro', 'Thunderbolt 1x15', 'Vintage 1x15 combo', 'Jensen style 15"', ['SM57', 'Ribbon'], [44100, 48000, 96000]],
      ['Silvertone', 'Twin Twelve 2x12', 'Vintage 2x12 combo', 'Jensen style pair', ['SM57', 'Condenser'], [44100, 48000, 96000]],
    ],
  },
  {
    source: line6AllureSource,
    pack: 'Line 6 Allure Free IR Pack',
    license: 'Free Allure IR pack from Line 6 via signup. Use official source link.',
    imageUrl: './images/mesa-oversized-4x12.jpg',
    entries: [
      ['Fender', '59 Tweed P10N', 'Tweed 4x10 style cab', 'Jensen P10N style', ['Allure Dynamic'], [48000]],
      ['Vox', '64 A30 G12', 'Vox AC30 style 2x12', 'Celestion G12 style', ['Allure Dynamic'], [48000]],
      ['Fender', '64 US Deluxe P12N', 'Deluxe Reverb style 1x12', 'Jensen P12N style', ['Allure Dynamic'], [48000]],
      ['Marshall', '67 Brit Greenback', 'British 4x12 style cab', 'Celestion Greenback', ['Allure Dynamic'], [48000]],
      ['Hiwatt', '70s WhoWatt 100', 'Hiwatt 4x12 style cab', 'Fane style speaker', ['Allure Dynamic'], [48000]],
      ['Mesa Boogie', '90s Cali V30', 'California 4x12 style cab', 'Celestion Vintage 30', ['Allure Dynamic'], [48000]],
    ],
  },
  {
    source: redwirezSource,
    pack: 'Redwirez Free Marshall 1960A IRs',
    license: 'Free Redwirez Marshall 1960 sample pack via newsletter signup. Use official source link.',
    imageUrl: './images/marshall-1960ax.jpg',
    entries: [
      ['Marshall', '1960A G12M25 Cap', 'Marshall 1960A 4x12', 'Celestion G12M Greenback', ['SM57 cap', 'MD421 cap', 'R121 cap', 'U87 cap'], [44100, 48000, 96000]],
      ['Marshall', '1960A G12M25 Cap Edge', 'Marshall 1960A 4x12', 'Celestion G12M Greenback', ['SM57 cap edge', 'MD421 cap edge', 'R121 cap edge'], [44100, 48000, 96000]],
      ['Marshall', '1960A G12M25 Cone', 'Marshall 1960A 4x12', 'Celestion G12M Greenback', ['SM57 cone', 'MD421 cone', 'R121 cone'], [44100, 48000, 96000]],
      ['Marshall', '1960A G12M25 Room', 'Marshall 1960A 4x12', 'Celestion G12M Greenback', ['Room', 'Ambient', 'Mix'], [44100, 48000, 96000]],
    ],
  },
  {
    source: mlSoundLabSource,
    pack: 'ML Sound Lab Free Premium IR',
    license: 'Free ML Sound Lab sample IR. Source page lists Mesa Traditional 4x12, 48 kHz, 24-bit, 200 ms.',
    imageUrl: './images/mesa-oversized-4x12.jpg',
    entries: [
      ['Mesa Boogie', 'Traditional 4x12 Color Calibrated', 'Mesa Boogie Traditional 4x12', 'Celestion Vintage 30', ['SM57 + R121'], [48000]],
      ['Mesa Boogie', 'Traditional 4x12 Solid State Color', 'Mesa Boogie Traditional 4x12', 'Celestion Vintage 30', ['SM57 + R121'], [48000]],
      ['Mesa Boogie', 'Traditional 4x12 Tube Color', 'Mesa Boogie Traditional 4x12', 'Celestion Vintage 30', ['SM57 + R121'], [48000]],
      ['Mesa Boogie', 'Traditional 4x12 NAM AI Cab', 'Mesa Boogie Traditional 4x12', 'Celestion Vintage 30', ['Calibrated AI'], [48000]],
    ],
  },
  {
    source: forwardAudioSource,
    pack: 'Forward Audio Free Guitar Cabinet IRs',
    license: 'Free guitar cabinet IR downloads from Forward Audio. Source page states WAV up to 96 kHz.',
    imageUrl: './images/marshall-1960ax.jpg',
    entries: [
      ['Marshall', '1960AV Modern Rock', 'Marshall 1960AV 4x12', 'Celestion Vintage 30', ['SM57', 'MD421', 'R121', 'Mix'], [44100, 48000, 96000]],
      ['Mesa Boogie', 'Oversized Modern Rock', 'Oversized 4x12', 'Celestion Vintage 30', ['SM57', 'MD421', 'R121', 'Mix'], [44100, 48000, 96000]],
      ['Orange', 'PPC412 Modern Rock', 'Orange PPC412 4x12', 'Celestion Vintage 30', ['SM57', 'MD421', 'R121', 'Mix'], [44100, 48000, 96000]],
      ['Bogner', 'Uberkab Modern Rock', 'Bogner-style 4x12', 'V30 / T75 blend', ['SM57', 'MD421', 'R121', 'Mix'], [44100, 48000, 96000]],
      ['Friedman', 'BE 4x12 Modern Rock', 'Friedman-style 4x12', 'Greenback / V30 blend', ['SM57', 'MD421', 'R121', 'Mix'], [44100, 48000, 96000]],
    ],
  },
  {
    source: darwinsCatSource,
    pack: "Darwin's Cat 21 Free IRs",
    license: 'Free browser cabinet IR utility with 21 included IRs. Use source page for download/export workflow.',
    imageUrl: './images/mesa-oversized-4x12.jpg',
    entries: [
      ['Mesa Boogie', 'Recto Utility V30', 'Modern 4x12 utility cab', 'Celestion Vintage 30', ['SM57', 'R121', 'Blend'], [48000]],
      ['Marshall', 'Brit Utility Greenback', 'British 4x12 utility cab', 'Celestion Greenback', ['SM57', 'R121', 'Blend'], [48000]],
      ['Fender', 'US Utility 1x12', 'American open-back utility cab', 'Jensen style 12"', ['SM57', 'Condenser', 'Blend'], [48000]],
      ['Vox', 'Chime Utility 2x12', 'British open-back utility cab', 'Celestion Blue', ['SM57', 'Ribbon', 'Blend'], [48000]],
      ['Orange', 'Doom Utility PPC', 'Orange-style 4x12 utility cab', 'Celestion Vintage 30', ['SM57', 'MD421', 'Blend'], [48000]],
      ['Ampeg', 'Bass Utility 8x10', 'Bass utility 8x10', '10 inch bass drivers', ['RE20', 'D112', 'Blend'], [48000]],
      ['Matchless', 'DC Utility 2x12', 'Boutique open-back utility cab', 'Alnico 12"', ['SM57', 'Ribbon', 'Blend'], [48000]],
    ],
  },
  {
    source: ggwpBassSource,
    pack: 'GGWP Tech Free Bass Cab IR Library',
    license: 'Free bass cab IR library. Use official source link for download details.',
    imageUrl: './images/mesa-oversized-4x12.jpg',
    entries: [
      ['Ampeg', 'SVT Library 8x10', 'Sealed bass 8x10', '10 inch bass drivers', ['D112', 'RE20', 'U47 FET', 'Mix'], [44100, 48000]],
      ['Ampeg', 'Portaflex Library 1x15', 'Fliptop bass 1x15', '15 inch bass driver', ['D112', 'RE20', 'Mix'], [44100, 48000]],
      ['Gallien-Krueger', 'RB Library 4x10', 'Punchy bass 4x10', '10 inch bass drivers', ['D112', 'RE20', 'Mix'], [44100, 48000]],
      ['Markbass', 'Traveler Library 2x10', 'Modern bass 2x10', '10 inch neo drivers', ['D112', 'RE20', 'Mix'], [44100, 48000]],
      ['Hartke', 'Aluminum Library 4x10', 'Aluminum cone bass 4x10', '10 inch aluminum drivers', ['D112', 'RE20', 'Mix'], [44100, 48000]],
      ['Eden', 'XLT Library 4x10', 'Hi-fi bass 4x10', '10 inch bass drivers', ['D112', 'RE20', 'Mix'], [44100, 48000]],
    ],
  },
  {
    source: acousticIrSource,
    pack: 'AcousticIR Extended Acoustic Index',
    license: 'Additional community acoustic IR references. Confirm individual file attribution on source page before mirroring.',
    imageUrl: './images/fender-twin-reverb.jpg',
    entries: [
      ['Yamaha', 'FGX Acoustic Body', 'Dreadnought acoustic body', 'Acoustic guitar resonance', ['UST', 'SBT', 'Piezo'], [44100, 48000]],
      ['Gibson', 'J-45 Acoustic Body', 'Slope-shoulder acoustic body', 'Acoustic guitar resonance', ['UST', 'SBT', 'Piezo'], [44100, 48000]],
      ['Martin', 'HD-28 Acoustic Body', 'Dreadnought acoustic body', 'Acoustic guitar resonance', ['UST', 'SBT', 'Piezo'], [44100, 48000]],
      ['Taylor', '314ce Acoustic Body', 'Grand Auditorium acoustic body', 'Acoustic guitar resonance', ['UST', 'SBT', 'Piezo'], [44100, 48000]],
      ['Guild', 'F-50 Acoustic Body', 'Jumbo acoustic body', 'Acoustic guitar resonance', ['UST', 'SBT', 'Piezo'], [44100, 48000]],
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
      downloadUrl: fenderSource,
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
      downloadUrl: fenderCabZoneSource,
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
        downloadUrl: godsCabSource,
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
        source: jesterBrutalSource,
        downloadUrl: jesterBrutalDownload,
        license: 'Download direto oficial. O autor informa uso gratuito inclusive comercial; inclui WAV em 44.1 e 48 kHz.',
      }),
    ),
  ),
  ...sourcePacks.flatMap((pack) => expandSourcePack(pack)),
];

const els = {
  total: document.querySelector('#totalCount'),
  visits: document.querySelector('#visitCount'),
  downloads: document.querySelector('#downloadCount'),
  q: document.querySelector('#q'),
  instrument: document.querySelector('#instrument'),
  brand: document.querySelector('#brand'),
  sampleRate: document.querySelector('#sampleRate'),
  amp: document.querySelector('#amp'),
  status: document.querySelector('#status'),
  results: document.querySelector('#results'),
};

els.total.textContent = String(catalog.length);
syncFilterOptions(readFilters());

document.querySelector('#filters').addEventListener('input', render);
document.querySelector('#filters').addEventListener('change', render);
document.addEventListener('click', handleDownloadClick);
initStats();
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
          downloadUrl: pack.downloadUrl,
          license: pack.license,
          instrument: brand === 'Ampeg' || brand === 'Aguilar' || brand === 'Eden' || brand === 'Trace Elliot' || (brand === 'Djammincabs' && cabinet.includes('bass')) ? 'Baixo' : brand === 'Taylor' || brand === 'Martin' || brand === 'McPherson' || brand === 'Guild' ? 'Violao' : 'Guitarra',
        }),
      ),
    ),
  );
}

function slug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function fillSelect(select, values, allLabel) {
  const selected = select.value || 'Todos';
  select.innerHTML = values
    .map((value) => `<option value="${escapeHtml(value)}">${value === 'Todos' ? allLabel : escapeHtml(value)}</option>`)
    .join('');
  select.value = values.includes(selected) ? selected : 'Todos';
}

function readFilters() {
  return {
    query: els.q.value.trim().toLowerCase(),
    instrument: els.instrument.value || 'Todos',
    brand: els.brand.value || 'Todos',
    sampleRate: els.sampleRate.value || 'Todos',
    amp: els.amp.value || 'Todos',
  };
}

function matchesFilters(item, filters, ignoredField) {
  const haystack = `${item.name} ${item.pack} ${item.brand} ${item.ampFamily} ${item.cabinet} ${item.speaker} ${item.tone}`.toLowerCase();
  return (
    (!filters.query || haystack.includes(filters.query)) &&
    (ignoredField === 'instrument' || filters.instrument === 'Todos' || item.instrument === filters.instrument) &&
    (ignoredField === 'brand' || filters.brand === 'Todos' || item.brand === filters.brand) &&
    (ignoredField === 'sampleRate' || filters.sampleRate === 'Todos' || formatSampleRate(item.sampleRate) === filters.sampleRate) &&
    (ignoredField === 'amp' || filters.amp === 'Todos' || item.ampFamily === filters.amp)
  );
}

function filterRows(filters) {
  return catalog.filter((item) => matchesFilters(item, filters));
}

function optionsFor(filters, field, mapper) {
  return ['Todos', ...unique(catalog.filter((item) => matchesFilters(item, filters, field)).map(mapper))];
}

function syncFilterOptions(filters) {
  fillSelect(els.instrument, optionsFor(filters, 'instrument', (item) => item.instrument), 'Todos');
  fillSelect(els.brand, optionsFor(filters, 'brand', (item) => item.brand), 'Todas as marcas');
  fillSelect(els.sampleRate, optionsFor(filters, 'sampleRate', (item) => formatSampleRate(item.sampleRate)), 'Todos');
  fillSelect(els.amp, optionsFor(filters, 'amp', (item) => item.ampFamily), 'Todos os amps');
}

function render() {
  const filters = readFilters();
  syncFilterOptions(filters);
  const syncedFilters = readFilters();
  const hasFilter = Boolean(
    syncedFilters.query ||
      syncedFilters.instrument !== 'Todos' ||
      syncedFilters.brand !== 'Todos' ||
      syncedFilters.sampleRate !== 'Todos' ||
      syncedFilters.amp !== 'Todos',
  );

  if (!hasFilter) {
    els.status.textContent = 'Escolha um filtro para carregar os IRs.';
    els.results.innerHTML = emptyState();
    return;
  }

  const rows = filterRows(syncedFilters);

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
  const actionUrl = item.downloadUrl || item.source;
  const actionLabel = item.downloadUrl ? 'Download direto' : 'Fonte oficial';
  const actionClass = item.downloadUrl ? 'direct-download' : '';
  const sourceAction =
    item.source === '#'
      ? '<span class="pending-source">Fonte em revisao</span>'
      : `<a class="${actionClass}" href="${actionUrl}" target="_blank" rel="noopener" data-download-id="${escapeHtml(item.id)}">${actionLabel}</a>`;
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

async function initStats() {
  const visitedKey = 'cabshare-visit-counted';
  const shouldCountVisit = !sessionStorage.getItem(visitedKey);
  if (shouldCountVisit) {
    sessionStorage.setItem(visitedKey, '1');
  }

  const stats = await sendStats(shouldCountVisit ? { event: 'visit' } : null);
  updateStats(stats);
}

async function handleDownloadClick(event) {
  const link = event.target.closest('[data-download-id]');
  if (!link) return;
  const stats = await sendStats({ event: 'download', irId: link.dataset.downloadId });
  updateStats(stats);
}

async function sendStats(payload) {
  try {
    const response = await fetch('/api/stats', {
      method: payload ? 'POST' : 'GET',
      headers: payload ? { 'Content-Type': 'application/json' } : undefined,
      body: payload ? JSON.stringify(payload) : undefined,
    });
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

function updateStats(stats) {
  if (!stats) return;
  els.visits.textContent = formatNumber(stats.visits || 0);
  els.downloads.textContent = formatNumber(stats.downloads || 0);
}

function formatNumber(value) {
  return new Intl.NumberFormat('pt-BR').format(value);
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
