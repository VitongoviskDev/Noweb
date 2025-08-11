import type { NavLinkDTO } from "../dto/NavLinkDTO";

export const navLinks: NavLinkDTO[] = [
  {
    href: "/#home", label: "Home",
    submenu: [
      { href: "/#home/1", label: "Home 1" },
      { href: "/#home/2", label: "Home 2" }
    ]
  },
  {
    href: "/#about", label: "About Us",

  },
  {
    href: "/#portifolio", label: "Portifólio",
    submenu: [
      { href: "/#portifolio/1", label: "portifolio 1" },
      { href: "/#portifolio/2", label: "portifolio 2" }
    ]
  },
  {
    href: "/#pages", label: "Pages",
    submenu: [
      { href: "/#pages/1", label: "pages 1" },
      { href: "/#pages/2", label: "pages 2" }
    ]
  },
  {
    href: "/#blog", label: "Blog",
    submenu: [
      { href: "/#blog/1", label: "blog 1" },
      { href: "/#blog/2", label: "blog 2" }
    ]
  },
  {
    href: "/#contact", label: "Contact Us"
  }
]