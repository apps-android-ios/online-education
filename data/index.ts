import { CoursesProps } from "../types/global";

export const ManuList: { id: number; path: string }[] = [
  {
    id: 1,
    path: "Home",
  },
  {
    id: 2,
    path: "Course",
  },
  {
    id: 3,
    path: "Contact",
  },
  {
    id: 4,
    path: "User",
  },
  {
    id: 5,
    path: "About",
  },
];

export const Courses: CoursesProps[] = [
  {
    id: "1",
    title: "Graphic Designing",
    image: require("../assets/courses/web.jpg"),
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint dolorum repellat voluptatum adipisci. Sit ipsam corrupti temporibus voluptate sunt vero, veritatis vitae ullam nisi consequatur amet repudiandae delectus deserunt accusamus.",
    CourseOne: "Html",
    CourseTwo: "CSS",
    price: 5000,
  },
  {
    id: "2",
    title: "Graphic Designing",
    image: require("../assets/courses/web.jpg"),
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint dolorum repellat voluptatum adipisci. Sit ipsam corrupti temporibus voluptate sunt vero, veritatis vitae ullam nisi consequatur amet repudiandae delectus deserunt accusamus.",
    CourseOne: "Html",
    CourseTwo: "CSS",
    price: 5000,
  },
];
