export const SAMPLE_ARTISTS = [
  {
    id: "1",
    name: "Lil Durk",
    bio: "Chicago drill pioneer and OTF founder with multiple platinum records. Known for his emotional delivery and authentic storytelling about street life.",
    image: "/images/lil-durk.jpg",
    audioPreview: "https://open.spotify.com/track/5QO79kh1waicV47BqGRL3g",
    videoPreview: "/samples/durk-video.mp4",
    genres: ["Hip Hop", "Drill", "Trap"],
    socialLinks: {
      instagram: "https://instagram.com/lildurk",
      twitter: "https://twitter.com/lildurk",
      youtube: "https://youtube.com/lildurk",
      spotify: "https://open.spotify.com/artist/3qiHUAX7zY4Qnjx8TNUzVx",
    },
    bookingEmail: "booking@otfent.com",
    verified: true,
    monthlyListeners: 14500000,
  },
  {
    id: "2",
    name: "Summer Walker",
    bio: 'R&B sensation known for her raw, confessional lyrics and sultry vocals. Her debut album "Over It" broke streaming records for female R&B artists.',
    image: "/images/summer-walker.jpg",
    audioPreview: "https://open.spotify.com/track/6mFkJmJqdDVQ1REhVfGgd1",
    videoPreview: "/samples/summer-video.mp4",
    genres: ["R&B", "Soul", "Alternative R&B"],
    socialLinks: {
      instagram: "https://instagram.com/summerwalker",
      twitter: "https://twitter.com/IAMSUMMERWALKER",
      youtube: "https://youtube.com/summerwalker",
      spotify: "https://open.spotify.com/artist/5XJDexmWFQfvbksgXXpGfO",
    },
    bookingEmail: "booking@summerwalker.com",
    verified: true,
    monthlyListeners: 9800000,
  },
  {
    id: "3",
    name: "Metro Boomin",
    bio: "Grammy-winning producer and DJ who has crafted chart-topping hits for Future, 21 Savage, and The Weeknd. Known for his signature producer tag and innovative sound.",
    image: "/images/metro-boomin.jpg",
    audioPreview: "https://open.spotify.com/track/7KA4W4McWYRpgf0fWsJZWB",
    videoPreview: "/samples/metro-video.mp4",
    genres: ["Hip Hop", "Trap", "Beats"],
    socialLinks: {
      instagram: "https://instagram.com/metroboomin",
      twitter: "https://twitter.com/MetroBoomin",
      youtube: "https://youtube.com/metroboomin",
      spotify: "https://open.spotify.com/artist/0iEtIxbK0KxaSlF7G42ZOp",
    },
    bookingEmail: "booking@metroboomin.com",
    verified: true,
    monthlyListeners: 12200000,
  },
  {
    id: "4",
    name: "Bad Bunny",
    bio: "Puerto Rican superstar who has revolutionized Latin trap and reggaeton globally. His innovative style and record-breaking streams have made him one of music's biggest global icons.",
    image: "/images/bad-bunny.jpg",
    audioPreview:
      "https://open.spotify.com/track/3sK8wGT43QFpWrvNQsrQya?si=7995fa60ceb74cdb",
    videoPreview: "/samples/badbunny-video.mp4",
    genres: ["Latin Trap", "Reggaeton", "Urbano Latino"],
    socialLinks: {
      instagram: "https://instagram.com/badbunnypr",
      twitter: "https://twitter.com/sanbenito",
      youtube: "https://youtube.com/badbunny",
      spotify: "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X",
    },
    bookingEmail: "booking@badbunny.com",
    verified: true,
    monthlyListeners: 57500000,
  },
];

export const SAMPLE_MUSIC = [
  {
    id: "1",
    title: "All My Life",
    artist: "Lil Durk ft. J. Cole",
    artistId: "1",
    audioUrl: "https://open.spotify.com/track/5QO79kh1waicV47BqGRL3g",
    downloadUrl: "https://open.spotify.com/track/5QO79kh1waicV47BqGRL3g",
    streamingLinks: {
      spotify:
        "https://open.spotify.com/track/6HgWWaMu31KdOpEG5l28BG?si=8b985c2de97c41c5",
      appleMusic:
        "https://music.apple.com/us/album/all-my-life-feat-j-cole/1687355540?i=1687355541",
      youtube: "https://www.youtube.com/watch?v=zDQiZUCeqLQ",
      audiomack: "https://audiomack.com/lildurk/song/all-my-life",
    },
    genre: "Hip Hop",
    duration: "3:45",
    releaseDate: "2023-05-12",
    image: "/images/lil-durk.jpg",

    plays: 352000000,
    likes: 2340000,
  },
  {
    id: "2",
    title: "Session 32",
    artist: "Summer Walker",
    artistId: "2",
    audioUrl: "/samples/session-32.mp3",
    streamingLinks: {
      spotify: "https://open.spotify.com/track/6mFkJmJqdDVQ1REhVfGgd1",
      appleMusic:
        "https://music.apple.com/us/album/session-32/1478601649?i=1478601660",
      youtube: "https://www.youtube.com/watch?v=yk3j4-fkNbM",
    },
    genre: "R&B",
    duration: "2:42",
    releaseDate: "2019-10-04",
    image: "/images/summer-walker.jpg",
    plays: 138000000,
    likes: 1280000,
  },
  {
    id: "3",
    title: "Creepin",
    artist: "Metro Boomin, The Weeknd, 21 Savage",
    artistId: "3",
    audioUrl:
      "https://open.spotify.com/track/3sK8wGT43QFpWrvNQsrQya?si=7995fa60ceb74cdb",
    downloadUrl:
      "https://open.spotify.com/track/3sK8wGT43QFpWrvNQsrQya?si=7995fa60ceb74cdb",
    streamingLinks: {
      spotify: "https://open.spotify.com/track/2dHHgzDwk4BJdRwy9uXhTO",
      appleMusic:
        "https://music.apple.com/us/album/creepin-feat-the-weeknd-21-savage/1655199174?i=1655199815",
      youtube: "https://www.youtube.com/watch?v=61ymOWwOwuk",
    },
    genre: "Hip Hop",
    duration: "3:41",
    releaseDate: "2022-12-02",
    image: "/images/metro-boomin.jpg",
    plays: 467000000,
    likes: 3450000,
  },
  {
    id: "4",
    title: "Tití Me Preguntó",
    artist: "Bad Bunny",
    artistId: "4",
    audioUrl:
      "https://open.spotify.com/track/3sK8wGT43QFpWrvNQsrQya?si=7995fa60ceb74cdb",
    downloadUrl:
      "https://open.spotify.com/track/3sK8wGT43QFpWrvNQsrQya?si=7995fa60ceb74cdb",
    streamingLinks: {
      spotify: "https://open.spotify.com/track/1IHWl5LamUGEuP4ozKQSXZ",
      appleMusic:
        "https://music.apple.com/us/album/tit%C3%AD-me-pregunt%C3%B3/1622045624?i=1622045633",
      youtube: "https://www.youtube.com/watch?v=Cr8K88UcO0s",
    },
    genre: "Latin Trap",
    duration: "4:03",
    releaseDate: "2022-05-06",
    image: "/images/bad-bunny.jpg",
    plays: 1267000000,
    likes: 8450000,
  },
];

export const SAMPLE_VIDEOS = [
  {
    id: "1",
    title: "All My Life - Official Music Video",
    artist: "Lil Durk ft. J. Cole",
    artistId: "1",
    videoUrl: "https://www.youtube.com/embed/Z4N8lzKNfy4?si=gdZYxEyZW2sJh0KF",
    thumbnailUrl: "/images/lil-durk.jpg",
    duration: "4:20",
    releaseDate: "2023-05-12",
    views: 85000000,
    youtubeId: "zDQiZUCeqLQ",
    likes: 1520000,
    description:
      'The official music video for "All My Life" featuring Lil Durk and J. Cole with powerful visuals and performances.',
  },
  {
    id: "2",
    title: "Session 32 - Live Performance",
    artist: "Summer Walker",
    artistId: "2",
    videoUrl: "https://www.youtube.com/embed/KJuUeV0pGNA?si=yIqDBTRLEkJJkBfM",
    thumbnailUrl: "/images/summer-walker.jpg",
    duration: "2:42",
    releaseDate: "2019-10-04",
    views: 23000000,
    youtubeId: "yk3j4-fkNbM",
    likes: 980000,
    description:
      'An intimate live performance of "Session 32" by Summer Walker, showcasing her raw vocals and emotional delivery.',
  },
  {
    id: "3",
    title: "Creepin'- Official Music Video",
    artist: "Metro Boomin, The Weeknd, 21 Savage",
    artistId: "3",
    videoUrl: "https://www.youtube.com/embed/6DWjiWEmxME?si=QPIa8vFcb2pzOYfb",
    thumbnailUrl: "/images/metro-boomin.jpg",
    duration: "3:41",
    releaseDate: "2022-12-16",
    views: 141000000,
    youtubeId: "61ymOWwOwuk",
    likes: 2320000,
    description:
      'The official music video for "Creepin\'" featuring The Weeknd and 21 Savage, produced by Metro Boomin.',
  },
  {
    id: "4",
    title: "Tití Me Preguntó - Official Music Video",
    artist: "Bad Bunny",
    artistId: "4",
    videoUrl: "https://www.youtube.com/embed/Cr8K88UcO0s?si=bV27Zo6vIGSyOaMa",
    thumbnailUrl: "/images/bad-bunny.jpg",
    duration: "4:03",
    releaseDate: "2022-05-06",
    views: 421000000,
    youtubeId: "Cr8K88UcO0s",
    likes: 5320000,
    description:
      'The official music video for "Tití Me Preguntó" by Bad Bunny from his album "Un Verano Sin Ti".',
  },
];

export const SAMPLE_ABOUT = {
  title: "About Royalty Records",
  content:
    "Royalty Records stands as the premier entertainment and business hub, dedicated to promoting exceptional artists and creating premium content that resonates globally. We are the birthplace where entertainment meets business, fostering talent and transforming dreams into chart-topping realities.",
  mission:
    "To elevate artists to legendary status through innovative production techniques, strategic management, and unwavering dedication to artistic excellence. We provide comprehensive support that empowers artists to reach their full potential.",
  vision:
    "To become the world's leading entertainment powerhouse, recognized for discovering, developing, and delivering the next generation of music legends while maintaining the highest standards of artistic integrity.",
  values: [
    "Artistic Excellence",
    "Innovation in Production",
    "Artist-First Approach",
    "Global Impact",
    "Integrity & Transparency",
  ],
  stats: {
    artistsSigned: 50,
    songsProduced: 500,
    platformsReached: 150,
    totalStreams: "2.5B+",
  },
};
