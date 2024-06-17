export interface NavItem {
  title: {
    name: string;
    link: string;
  };
  list?: {
    show: boolean;
    name: string;
    link: string;
  }[];
}
