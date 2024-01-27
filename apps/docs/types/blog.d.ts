export type BadgeType = {
  label: string;
  color: string;
};

export type BlogType = {
  title: string;
  slag: string;
  thumnail: string;
  publishedAt: string; // TODO Dateにする
  summary: string;
  tag: BadgeType[];
};

export type NavType = {
  title: string;
  slag: string;
  isIcon: boolean;
};
