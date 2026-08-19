export interface Artist {
  name: string;
  description?: string;
}

export interface Genre {
  id: string;
  name: string;
  spanishName: string;
  type: 'traditional' | 'modern';
  shortDescription: string;
  description: string;
  region: string;
  originDescription: string;
  styleDescription: string;
  characteristics: string[];
  instrumentsDescription: string;
  instruments: string[];
  imageUrl: string;
  videoUrl: string;
  famousArtists: Artist[];
}

export const genresData: Genre[] = [
  {
    id: 'flamenco',
    name: 'Flamenco',
    spanishName: 'Flamenco',
    type: 'traditional',
    shortDescription: 'A passionate art form combining singing, dancing, guitar, and handclaps',
    description: 'Flamenco is one of Spain\'s most iconic musical traditions, featuring passionate singing, dancing, guitar playing, and rhythmic handclaps. It expresses deep emotion through its various forms.',
    region: 'Andalusia (southern Spain), particularly Seville, Cádiz, and Jerez',
    originDescription: 'Flamenco originated in Andalusia, developing from the cultural mix of Moorish, Jewish, and Romani (Gypsy) influences. It became formalized in the 18th century but has roots stretching back centuries earlier.',
    styleDescription: 'Flamenco is characterized by its intense emotion, complex rhythms, and improvisation. It can express profound sadness (cante jondo) or be more light-hearted (cante chico).',
    characteristics: [
      'Deep emotional expression',
      'Complex rhythmic patterns (compás)',
      'Improvisation and spontaneity',
      'Call and response between musicians and dancers',
      'Use of melisma in vocals'
    ],
    instrumentsDescription: 'While the guitar is central to flamenco, the tradition also involves percussive elements like handclaps (palmas), wooden castanets, and the cajón (box drum).',
    instruments: [
      'Spanish guitar',
      'Clapping hands (palmas)',
      'Castanets',
      'Cajón (box drum)',
      'Voice'
    ],
    imageUrl: 'https://images.pexels.com/photos/5733605/pexels-photo-5733605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    videoUrl: 'https://cdn.videvo.net/videvo_files/video/free/2013-04/small_watermarked/HD_Spanish_Dancers_MP4_preview.mp4',
    famousArtists: [
      {
        name: 'Paco de Lucía',
        description: 'Revolutionary flamenco guitarist who modernized the genre'
      },
      {
        name: 'Camarón de la Isla',
        description: 'Legendary singer who transformed flamenco vocals'
      },
      {
        name: 'Rosalía',
        description: 'Contemporary artist blending flamenco with modern sounds'
      },
      {
        name: 'Sara Baras',
        description: 'Acclaimed flamenco dancer and choreographer'
      }
    ]
  },
  {
    id: 'copla',
    name: 'Copla',
    spanishName: 'La Copla',
    type: 'traditional',
    shortDescription: 'Emotional Spanish ballads that tell dramatic stories of love and life',
    description: 'Copla is a form of Spanish song that became extremely popular in the mid-20th century. These dramatic ballads tell emotional stories about love, life, and Spanish culture.',
    region: 'Nationwide, with roots in Andalusia',
    originDescription: 'Copla developed from traditional Andalusian folk songs but gained massive popularity in the 1940s and 1950s. It became a significant cultural expression during and after the Spanish Civil War.',
    styleDescription: 'Copla songs are characterized by their theatrical presentation, dramatic storytelling, and emotional intensity. They often feature orchestral accompaniment and showcase the singer\'s vocal range.',
    characteristics: [
      'Dramatic storytelling',
      'Theatrical performance',
      'Emotional intensity',
      'Traditional Spanish themes',
      'Orchestral arrangements'
    ],
    instrumentsDescription: 'Copla traditionally features a full orchestra with strings, percussion, and Spanish guitar, creating a rich backdrop for the vocalist\'s emotional performance.',
    instruments: [
      'Orchestra',
      'Spanish guitar',
      'Piano',
      'Percussion',
      'Violin'
    ],
    imageUrl: 'https://images.pexels.com/photos/3367850/pexels-photo-3367850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    videoUrl: 'https://cdn.videvo.net/videvo_files/video/free/2019-11/small_watermarked/190301_1_25_11_preview.mp4',
    famousArtists: [
      {
        name: 'Lola Flores',
        description: 'Known as "La Faraona" and one of the genre\'s defining figures'
      },
      {
        name: 'Concha Piquer',
        description: 'Legendary copla singer with a dramatic performance style'
      },
      {
        name: 'Miguel de Molina',
        description: 'Influential male copla singer known for his passionate interpretations'
      },
      {
        name: 'Estrella Morente',
        description: 'Contemporary artist continuing the copla tradition'
      }
    ]
  },
  {
    id: 'jota',
    name: 'Jota',
    spanishName: 'La Jota',
    type: 'traditional',
    shortDescription: 'Lively traditional dance music with regional variations across Spain',
    description: 'The Jota is a traditional Spanish dance and musical style characterized by its lively rhythm and accompanying castanets. It has many regional variations throughout Spain.',
    region: 'Nationwide, with distinct versions in Aragón, Valencia, Navarre, and other regions',
    originDescription: 'The Jota likely originated in Aragón but spread throughout Spain, with each region developing its own characteristic style. Its origins date back to the 18th century or earlier.',
    styleDescription: 'The Jota is typically performed in triple time (3/4 or 3/8) with a lively, energetic feel. Dancers often hold their arms high while making precise movements with their feet.',
    characteristics: [
      'Triple meter rhythm',
      'Fast-paced and energetic',
      'Regional variations',
      'Often performed at festivals',
      'Usually danced in pairs or groups'
    ],
    instrumentsDescription: 'The Jota is typically accompanied by guitars, bandurrias (stringed instruments similar to mandolins), and percussion instruments. Dancers often use castanets to add rhythm.',
    instruments: [
      'Guitar',
      'Bandurria',
      'Castanets',
      'Tambourine',
      'Voice'
    ],
    imageUrl: 'https://images.pexels.com/photos/10513822/pexels-photo-10513822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    videoUrl: 'https://cdn.videvo.net/videvo_files/video/free/2019-05/small_watermarked/190516_07_AZ-LAGOA-SPAIN_HD_preview.mp4',
    famousArtists: [
      {
        name: 'Grupo de Jota de Zaragoza',
        description: 'Traditional ensemble specializing in Aragonese jota'
      },
      {
        name: 'Nati Mistral',
        description: 'Performer known for her interpretations of jota and other Spanish folk music'
      },
      {
        name: 'Miguel Ángel Berna',
        description: 'Contemporary dancer and choreographer modernizing the jota'
      },
      {
        name: 'Pedro Azorín',
        description: 'Renowned jota singer from Aragón'
      }
    ]
  },
  {
    id: 'zarzuela',
    name: 'Zarzuela',
    spanishName: 'La Zarzuela',
    type: 'traditional',
    shortDescription: 'Spanish lyric-dramatic genre that alternates between spoken and sung scenes',
    description: 'Zarzuela is a Spanish form of musical theater that combines operatic songs, popular music, and spoken dialogue. It often includes comedic elements and stories reflecting Spanish life.',
    region: 'Originated in Madrid, but enjoyed nationwide',
    originDescription: 'Zarzuela developed in the royal court of Spain during the 17th century, named after the Palacio de la Zarzuela. It experienced a revival in the 19th century when it became more accessible to the general public.',
    styleDescription: 'Zarzuela alternates between spoken dialogue and musical numbers, similar to operetta or musical theater. It often features romantic plots with comedic elements, set in distinctly Spanish contexts.',
    characteristics: [
      'Alternation between spoken dialogue and singing',
      'Spanish themes and settings',
      'Combination of classical and folk musical styles',
      'Often includes comedic elements',
      'Theatrical staging with full costumes and sets'
    ],
    instrumentsDescription: 'Zarzuela is typically performed with a full orchestra. The music incorporates both classical European orchestration and traditional Spanish musical elements.',
    instruments: [
      'Full orchestra',
      'Piano',
      'Spanish guitar',
      'Woodwinds',
      'Percussion'
    ],
    imageUrl: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    videoUrl: 'https://cdn.videvo.net/videvo_files/video/free/2020-01/small_watermarked/10_03_10_preview.mp4',
    famousArtists: [
      {
        name: 'Plácido Domingo',
        description: 'World-famous tenor who has performed and recorded many zarzuelas'
      },
      {
        name: 'Teresa Berganza',
        description: 'Renowned mezzo-soprano acclaimed for her zarzuela interpretations'
      },
      {
        name: 'Federico Moreno Torroba',
        description: 'Influential composer who wrote several important zarzuelas'
      },
      {
        name: 'Compañía Lírica Nacional',
        description: 'National company dedicated to preserving and performing zarzuela'
      }
    ]
  },
  {
    id: 'latin-pop',
    name: 'Latin Pop',
    spanishName: 'Pop Latino',
    type: 'modern',
    shortDescription: 'Contemporary Spanish-language pop music with global appeal',
    description: 'Spanish Latin Pop combines catchy melodies, contemporary production, and Spanish lyrics. It often incorporates elements of traditional Latin rhythms with modern pop sensibilities, creating music with global appeal.',
    region: 'Nationwide, with international influence',
    originDescription: 'Spanish Latin Pop evolved alongside international pop music but maintains distinctly Spanish and Latin American influences. It gained international prominence in the 1990s and continues to be globally successful.',
    styleDescription: 'Latin Pop features bright, catchy melodies, danceable rhythms, and polished production. It often blends traditional Spanish musical elements with contemporary pop structures and electronic production.',
    characteristics: [
      'Catchy, radio-friendly melodies',
      'Contemporary production techniques',
      'Mix of Spanish and international influences',
      'Often danceable with Latin rhythms',
      'Appealing to wide audiences'
    ],
    instrumentsDescription: 'Modern Latin Pop utilizes both traditional instruments and contemporary electronic production. Acoustic elements like guitar often blend with synthesizers and programmed beats.',
    instruments: [
      'Synthesizers',
      'Digital production',
      'Electric and acoustic guitars',
      'Latin percussion',
      'Electronic drums'
    ],
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    videoUrl: 'https://cdn.videvo.net/videvo_files/video/free/2020-03/small_watermarked/200207_1_25_10_preview.mp4',
    famousArtists: [
      {
        name: 'Enrique Iglesias',
        description: 'International superstar with numerous global hits'
      },
      {
        name: 'Alejandro Sanz',
        description: 'Award-winning artist known for his emotional songwriting'
      },
      {
        name: 'Rosalía',
        description: 'Innovative artist blending traditional Spanish sounds with contemporary pop'
      },
      {
        name: 'Aitana',
        description: 'Rising star of the new generation of Spanish pop'
      }
    ]
  },
  {
    id: 'reggaeton',
    name: 'Reggaeton',
    spanishName: 'Reggaetón',
    type: 'modern',
    shortDescription: 'Urban Latin music with a distinctive rhythm and Spanish rap',
    description: 'Reggaeton is an urban music style combining Latin rhythms, reggae, and hip-hop. Though originating in Puerto Rico and Panama, it has become immensely popular in Spain, with Spanish artists developing their own distinctive approach.',
    region: 'Nationwide, with roots in Latin America',
    originDescription: 'While reggaeton originated in Latin America, it gained massive popularity in Spain in the 2000s. Spanish artists have embraced and evolved the genre, creating a distinctive Spanish reggaeton scene.',
    styleDescription: 'Spanish reggaeton features the genre\'s characteristic dembow rhythm but often incorporates local slang, references, and sometimes fuses with other Spanish genres like flamenco or electronic music.',
    characteristics: [
      'Distinctive dembow rhythm pattern',
      'Spanish rap and singing',
      'Urban themes and lyrics',
      'Danceable beats',
      'Often incorporates autotune and electronic elements'
    ],
    instrumentsDescription: 'Reggaeton is primarily produced electronically, with digital drum patterns, synthesizers, and vocal processing techniques like autotune being central to its sound.',
    instruments: [
      'Digital production tools',
      'Drum machines',
      'Synthesizers',
      'Autotune',
      'Occasional live percussion'
    ],
    imageUrl: 'https://images.pexels.com/photos/3394313/pexels-photo-3394313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    videoUrl: 'https://cdn.videvo.net/videvo_files/video/free/2018-07/small_watermarked/180607_12_B_13_preview.mp4',
    famousArtists: [
      {
        name: 'Bad Gyal',
        description: 'Catalan artist known for her innovative take on dancehall and reggaeton'
      },
      {
        name: 'C. Tangana',
        description: 'Groundbreaking artist who has evolved from reggaeton to a diverse musical style'
      },
      {
        name: 'La Zowi',
        description: 'Influential female voice in the Spanish urban scene'
      },
      {
        name: 'Omar Montes',
        description: 'Popular artist blending reggaeton with flamenco influences'
      }
    ]
  },
  {
    id: 'indie-rock',
    name: 'Spanish Indie Rock',
    spanishName: 'Rock Indie Español',
    type: 'modern',
    shortDescription: 'Alternative rock music with poetic Spanish lyrics and indie sensibilities',
    description: 'Spanish Indie Rock combines alternative rock sounds with poetic Spanish lyrics. Since the 1990s, it has grown into a vibrant scene with distinctive bands developing unique sounds that often incorporate Spanish musical traditions.',
    region: 'Nationwide, with strong scenes in Madrid, Barcelona, and other major cities',
    originDescription: 'The Spanish indie scene emerged in the 1990s, inspired by British and American independent music but developing its own characteristics. It has grown into a diverse and influential part of contemporary Spanish culture.',
    styleDescription: 'Spanish indie features atmospheric instrumentation, thoughtful lyrics, and often a more introspective approach than mainstream rock. Many bands incorporate elements of traditional Spanish music into their alternative sound.',
    characteristics: [
      'Poetic, often introspective lyrics',
      'Alternative sound with Spanish musical influences',
      'Independent production aesthetics',
      'Emotional depth and authenticity',
      'Often outside the mainstream music industry'
    ],
    instrumentsDescription: 'Spanish indie rock typically features the traditional rock band setup of guitars, bass, and drums, often supplemented with keyboards, electronics, and sometimes traditional Spanish instruments.',
    instruments: [
      'Electric guitars',
      'Bass guitar',
      'Drum kit',
      'Keyboards/synthesizers',
      'Occasional traditional Spanish instruments'
    ],
    imageUrl: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    videoUrl: 'https://cdn.videvo.net/videvo_files/video/free/2017-01/small_watermarked/161016_072_HD_preview.mp4',
    famousArtists: [
      {
        name: 'Vetusta Morla',
        description: 'Hugely influential band known for their poetic lyrics and unique sound'
      },
      {
        name: 'Love of Lesbian',
        description: 'Popular group with a devoted following and literary songwriting'
      },
      {
        name: 'Izal',
        description: 'Band known for their energetic performances and catchy melodies'
      },
      {
        name: 'Dorian',
        description: 'Electronic-influenced indie band with danceable tracks'
      }
    ]
  },
  {
    id: 'electronic',
    name: 'Spanish Electronic',
    spanishName: 'Música Electrónica Española',
    type: 'modern',
    shortDescription: 'Dance and electronic music with a distinctive Spanish flavor',
    description: 'Spanish electronic music has gained global recognition, particularly through the Ibiza club scene. Spanish DJs and producers create distinctive electronic music, often incorporating Spanish musical elements or reflecting Mediterranean vibes.',
    region: 'Nationwide, with Ibiza as a global center',
    originDescription: 'While electronic music originated internationally, Spain—particularly Ibiza—became a global hub for the genre starting in the 1980s. The island\'s club scene helped define electronic dance music culture worldwide.',
    styleDescription: 'Spanish electronic music is diverse, ranging from mellow Balearic beats to energetic techno. What often distinguishes it is a certain sunny, Mediterranean quality or the incorporation of Spanish musical elements.',
    characteristics: [
      'Club-oriented production',
      'Often features Mediterranean or Balearic influences',
      'Range from ambient to high-energy dance music',
      'International appeal while maintaining Spanish identity',
      'Strong connection to tourism and nightlife culture'
    ],
    instrumentsDescription: 'Spanish electronic music is primarily created with digital tools, including software synthesizers, samplers, drum machines, and digital audio workstations (DAWs).',
    instruments: [
      'Digital audio workstations (DAWs)',
      'Synthesizers',
      'Samplers',
      'Drum machines',
      'DJ equipment'
    ],
    imageUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    videoUrl: 'https://cdn.videvo.net/videvo_files/video/free/2019-03/small_watermarked/181015_14_VJ-LOOP-181015_14_preview.mp4',
    famousArtists: [
      {
        name: 'Solomun',
        description: 'DJ and producer who has been central to the Ibiza scene'
      },
      {
        name: 'John Talabot',
        description: 'Producer known for his unique take on house and techno'
      },
      {
        name: 'Paco Osuna',
        description: 'Techno DJ and producer with global influence'
      },
      {
        name: 'Maceo Plex',
        description: 'DJ who became prominent in the Spanish electronic scene'
      }
    ]
  }
];