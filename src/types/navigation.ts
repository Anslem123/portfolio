export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface CommandItem {
  id: string;
  label: string;
  group: "navigation" | "actions" | "social";
  href?: string;
  action?: string;
  shortcut?: string;
}
