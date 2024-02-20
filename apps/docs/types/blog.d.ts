export type Badge = {
  label: string;
  color: string;
  isList: boolean;
  amount?: number;
};

export type Blog = {
  title: string;
  slag: string;
  thumnail: string;
  publishedAt: string; // TODO Dateにする
  summary: string;
  tag: Badge[];
};

export type Nav = {
  title: string;
  slag: string;
  isIcon: boolean;
  iconName?: string;
  isExternalLink?: boolean;
};
