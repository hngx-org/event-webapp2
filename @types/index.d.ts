export interface MainLayoutProps {
  children?: React.ReactNode;
  title?: string;
  //   className?: React.ComponentProps<div>[className];
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
  event: GroupEvents;
}
export interface GroupEventProps {
  image?: string | null;
  groupName?: string;
  numberOfEvents: number;
}

export type SingleGroup = {
  group?: Group;
  events?: Event[];
};

interface Group {
  pk: number;
  group_name: string;
  admin: string;
  image: string | null;
  friends: number[];
  created_at: string;
  updated_at: string;
  numEvents: number;
}

export interface Event {
  id: string;
  created_by: string;
  event_name: string;
  event_description: string;
  location: string;
  event_start: string;
  group: number;
  event_end: string;
  event_start: string;
  event_end: string;
  image: string;
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
  id: string;
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
  created_at: string;
  created_by: string;
  event_group: {}[];
  group_name: string;
  id: string;
  image: string;
  numEvents: 0;
  updated_at: string;
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
}

export interface GroupDetails {
  created_at: string;
  created_by: string;
  group_name: string;
  id: string;
  image: string;
  numberOfMembers: number;
  updated_at: string;
  user_groups: { user_id: string }[];
}

export interface GroupEvents {
  created_at: string;
  created_by: string;
  event_description: string;
  event_end: string;
  event_name: string;
  event_start: string;
  group_id: string;
  id: string;
  image: string;
  location: string;
  updated_at: string;
}
