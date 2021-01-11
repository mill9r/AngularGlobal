export interface CourseDescription {
  id?: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors?: Authors[];
  isTopRated?: boolean;
}

export interface Authors {
  id: number;
  name: string;
  lastName?: string;
}

