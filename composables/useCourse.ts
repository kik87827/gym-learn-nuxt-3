import type { CourseWithPath } from '~/types/course';

interface CouseReturn {
  course: Maybe<CourseWithPath>;
}

export const useCourse = (courseSlug: string): CouseReturn => {
  const { courses } = useCourses();
  const course = courses.find((course) => course.courseSlug === courseSlug);
  return {
    course,
  };
};
