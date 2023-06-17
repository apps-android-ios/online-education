import { ImageSourcePropType } from "react-native";

export interface CoursesProps {
  id: string;
  title: string;
  image: ImageSourcePropType;
  description: string;
  CourseOne: string;
  CourseTwo: string;
  price: number;
}

export interface UserListProps {
  userId: number;
  id: string;
  name: string;
  email: string;
  website: string;
  mobile: string;
  image: string;
  description: string;
}
