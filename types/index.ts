export type ButtonProps = {
  type: "button" | "submit";
  icon?: string;
  title: string;
  variant: string;
  full?: boolean;
};

export type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

export type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};
