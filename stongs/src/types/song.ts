export type Song = {
  id: number;
  title: string;
  length: number; 
  cd: string;
  url: string;
};
export type SongMeta = Pick<Song, 'id' | 'title' | 'cd' | 'url'>;
export type SongLogic = Pick<Song, 'id' | 'length'>;
