export interface MainLayoutProps {
  children?: React.ReactNode;
  title?: string;
  //   className?: React.ComponentProps<"div">["className"];
}

export interface HeaderProps {
  title: string;
  info: string;
}

export interface EventProps {
  photoMobile: string;
  title: string;
  date: string;
  day: string;
  time: string;
  location: string;
}

export interface EventCardProps {
  bgColor: string;
  textColor?: string;
  btnColor?: string;
  comments?: boolean;
  img?: string;
}

export interface UserProfs {
  name: string;
  profilePhoto: string;
}
// export interface EventData {
//   id: string;
//   creator: string;
//   title: string;
//   description: string;
//   location: string;
//   start_date: Date;
//   group: string;
//   end_date: Date;
//   start_time: string;
//   end_time: string;
//   image: string;
// }
export interface EventData {
  id: string;
  event_name: string;
  event_description: string;
  image: string;
  event_start: Date;
  event_end: Date;
  location: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface TimelineCardProps {
  created_at: string;
  created_by: string;
  event_description: string;
  event_end: string;
  event_name: string;
  event_start: string;
  id: string;
  image: string;
  location: string;
  updated_at: string;
}

export interface cardItem {
  bg: string;
  imgSrc: any;
  name: string;
  events: number;
}

export interface MyPeopleProps {
  id: number;
  bgColor: string;
  imgSrc: any;
  name: string;
  events: number;
}

type AuthContextType = {
  user: any;
  logout: () => void;
};

export interface Group {
  id: number;
  admin: string;
  created_at: string;
  updated_at: string;
  image: string;
  group_name: string;
  friends: number[];
}

export type FormValues = {
  title: string;
  description: string;
  location: string;
  start_date: string;
  group: number;
  end_date: string;
  start_time: string;
  end_time: string;
  image: string | null;
};

export interface UserGroups {
  created_at: string;
  created_by: string;
  group_name: string;
  id: string;
  updated_at: string;
}

export interface User {
  avatar: string;
  email: string;
  id: string;
  token: string;
  username: string;
};