export interface NavLinkDTO{
  label: string;
  href: string;
  submenu?: NavLinkDTO[];
};