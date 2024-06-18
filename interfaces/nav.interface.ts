export interface NavItem {
  title: {
    name: string;
    link: string;
  };
  list?: NavListItem[];
}

export interface NavListItem {
  name: string;
  link: string;
  show: boolean;
}
