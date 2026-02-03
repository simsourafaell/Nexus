
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface ComparisonPoint {
  label: string;
  common: string;
  strategic: string;
}
