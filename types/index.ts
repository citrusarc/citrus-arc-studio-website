export type ItemStatus = {
  isDisabled?: boolean;
  isHidden?: boolean;
  isComingSoon?: boolean;
};

export type NavItem = {
  id: string;
  name: string;
  href?: string;
  target?: string;
  rel?: string;
  status?: ItemStatus;
};

export type FooterItem = {
  id: string;
  category: string;
  name: string;
  href?: string;
  target?: string;
  rel?: string;
  status?: ItemStatus;
};

export type ContactEmailTemplateProps = {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  budget: string;
  project: string;
  fileName?: string;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  redirectUrl?: string;
};
