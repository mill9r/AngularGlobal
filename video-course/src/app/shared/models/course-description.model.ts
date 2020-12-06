export interface CourseDescription {
  courseId: number;
  courseTitle: string;
  courserDescription: string;
  courseDuration: string;
  publication: string;
  authors?: string[];
  isCourseTopRated?: boolean;
}
