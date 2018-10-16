export interface VideoDetails {
  age: number;
  region: string;
  date: string;
}

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: VideoDetails[];
}

export interface Filter {
  region: string;
  minDate: string;
  maxDate: string;
  minor: boolean;
  adult: boolean;
  middleAge: boolean;
  senior: boolean;
}
