import { Artist, Music, Video, AboutContent } from './constants'

export const SAMPLE_ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'Marcus "King" Johnson',
    bio: 'Grammy-nominated hip-hop artist with over 10 million streams worldwide. Known for his powerful lyrics and dynamic stage presence.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face',
    audioPreview: '/samples/marcus-preview.mp3',
    videoPreview: '/samples/marcus-video.mp4',
    genres: ['Hip Hop', 'Rap', 'R&B'],
    socialLinks: {
      instagram: 'https://instagram.com/kingmarcus',
      twitter: 'https://twitter.com/kingmarcus',
      youtube: 'https://youtube.com/kingmarcus',
      spotify: 'https://open.spotify.com/artist/kingmarcus'
    },
    bookingEmail: 'booking@kingmarcus.com',
    verified: true,
    monthlyListeners: 2500000
  },
  {
    id: '2',
    name: 'Aria "Diamond" Williams',
    bio: 'Rising R&B sensation with a voice that captivates audiences. Her debut album "Crystalline Dreams" topped the R&B charts for 8 consecutive weeks.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=400&h=400&fit=crop&crop=face',
    audioPreview: '/samples/aria-preview.mp3',
    videoPreview: '/samples/aria-video.mp4',
    genres: ['R&B', 'Soul', 'Pop'],
    socialLinks: {
      instagram: 'https://instagram.com/ariadiamond',
      twitter: 'https://twitter.com/ariadiamond',
      youtube: 'https://youtube.com/ariadiamond',
      spotify: 'https://open.spotify.com/artist/ariadiamond'
    },
    bookingEmail: 'booking@ariadiamond.com',
    verified: true,
    monthlyListeners: 1800000
  },
  {
    id: '3',
    name: 'DJ Thunder',
    bio: 'Electronic music producer and DJ who has headlined major festivals worldwide. Known for his innovative sound design and explosive live performances.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    audioPreview: '/samples/thunder-preview.mp3',
    videoPreview: '/samples/thunder-video.mp4',
    genres: ['Electronic', 'EDM', 'House'],
    socialLinks: {
      instagram: 'https://instagram.com/djthunder',
      twitter: 'https://twitter.com/djthunder',
      youtube: 'https://youtube.com/djthunder',
      spotify: 'https://open.spotify.com/artist/djthunder'
    },
    bookingEmail: 'booking@djthunder.com',
    verified: true,
    monthlyListeners: 3200000
  },
  {
    id: '4',
    name: 'Luna Rodriguez',
    bio: 'Latin pop star with bilingual hits that have conquered both English and Spanish markets. Her fusion of traditional Latin rhythms with modern pop has earned critical acclaim.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    audioPreview: '/samples/luna-preview.mp3',
    videoPreview: '/samples/luna-video.mp4',
    genres: ['Latin Pop', 'Reggaeton', 'Pop'],
    socialLinks: {
      instagram: 'https://instagram.com/lunarodriguez',
      twitter: 'https://twitter.com/lunarodriguez',
      youtube: 'https://youtube.com/lunarodriguez',
      spotify: 'https://open.spotify.com/artist/lunarodriguez'
    },
    bookingEmail: 'booking@lunarodriguez.com',
    verified: true,
    monthlyListeners: 1500000
  }
]

export const SAMPLE_MUSIC: Music[] = [
  {
    id: '1',
    title: 'Legends Never Die',
    artist: 'Marcus "King" Johnson',
    artistId: '1',
    audioUrl: '/samples/legends-never-die.mp3',
    downloadUrl: '/downloads/legends-never-die.mp3',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/legends',
      appleMusic: 'https://music.apple.com/track/legends',
      youtube: 'https://youtube.com/watch?v=legends',
      audiomack: 'https://audiomack.com/track/legends'
    },
    genre: 'Hip Hop',
    duration: '3:45',
    releaseDate: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    plays: 5200000,
    likes: 340000
  },
  {
    id: '2',
    title: 'Crystalline Dreams',
    artist: 'Aria "Diamond" Williams',
    artistId: '2',
    audioUrl: '/samples/crystalline-dreams.mp3',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/crystalline',
      appleMusic: 'https://music.apple.com/track/crystalline',
      youtube: 'https://youtube.com/watch?v=crystalline'
    },
    genre: 'R&B',
    duration: '4:12',
    releaseDate: '2024-02-01',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=300&h=300&fit=crop',
    plays: 3800000,
    likes: 280000
  },
  {
    id: '3',
    title: 'Electric Nights',
    artist: 'DJ Thunder',
    artistId: '3',
    audioUrl: '/samples/electric-nights.mp3',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/electric',
      youtube: 'https://youtube.com/watch?v=electric'
    },
    genre: 'Electronic',
    duration: '5:30',
    releaseDate: '2024-01-28',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    plays: 6700000,
    likes: 450000
  }
]

export const SAMPLE_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Legends Never Die - Official Music Video',
    artist: 'Marcus "King" Johnson',
    artistId: '1',
    videoUrl: '/samples/legends-mv.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=640&h=360&fit=crop',
    duration: '4:20',
    releaseDate: '2024-01-20',
    views: 8500000,
    youtubeId: 'dQw4w9WgXcQ',
    likes: 520000,
    description: 'The official music video for "Legends Never Die" featuring stunning visuals and powerful performances.'
  },
  {
    id: '2',
    title: 'Crystalline Dreams - Acoustic Version',
    artist: 'Aria "Diamond" Williams',
    artistId: '2',
    videoUrl: '/samples/crystalline-acoustic.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=640&h=360&fit=crop',
    duration: '3:45',
    releaseDate: '2024-02-10',
    views: 2300000,
    youtubeId: 'dQw4w9WgXcQ',
    likes: 180000,
    description: 'An intimate acoustic performance of "Crystalline Dreams" recorded live in studio.'
  },
  {
    id: '3',
    title: 'Electric Nights - Live at Ultra Miami',
    artist: 'DJ Thunder',
    artistId: '3',
    videoUrl: '/samples/electric-live.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=640&h=360&fit=crop',
    duration: '6:15',
    releaseDate: '2024-03-01',
    views: 4100000,
    youtubeId: 'dQw4w9WgXcQ',
    likes: 320000,
    description: 'DJ Thunder\'s explosive performance at Ultra Miami featuring "Electric Nights" and special effects.'
  }
]

export const SAMPLE_ABOUT: AboutContent = {
  title: 'About Kings Productions & Management',
  content: 'Kings Productions & Management stands as the premier entertainment and business hub, dedicated to promoting exceptional artists and creating premium content that resonates globally. We are the birthplace where legend hits are made, fostering talent and transforming dreams into chart-topping realities.',
  mission: 'To elevate artists to legendary status through innovative production techniques, strategic management, and unwavering dedication to artistic excellence. We provide comprehensive support that empowers artists to reach their full potential.',
  vision: 'To become the world\'s leading entertainment powerhouse, recognized for discovering, developing, and delivering the next generation of music legends while maintaining the highest standards of artistic integrity.',
  values: [
    'Artistic Excellence',
    'Innovation in Production',
    'Artist-First Approach',
    'Global Impact',
    'Integrity & Transparency'
  ],
  stats: {
    artistsSigned: 50,
    songsProduced: 500,
    platformsReached: 150,
    totalStreams: '2.5B+'
  }
}
