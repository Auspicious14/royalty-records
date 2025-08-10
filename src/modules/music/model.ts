export interface Music {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  audioUrl: string;
  downloadUrl?: string;
  streamingLinks: {
    spotify?: string;
    appleMusic?: string;
    youtube?: string;
    audiomack?: string;
  };
  genre: string;
  duration: string;
  releaseDate: string;
  image: string;
  plays: number;
  likes: number;
}