import {
  ArrowRightOnRectangleIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  InboxStackIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const navLinks = [
  {
    id: 0,
    title: "Dashboard",
    icon: <InboxStackIcon className="nav-icon" />,
  },
  {
    id: 1,
    title: "Market",
    icon: <ShoppingCartIcon className="nav-icon" />,
  },
  {
    id: 2,
    title: "Portfolio",
    icon: <UserIcon className="nav-icon" />,
  },
  {
    id: 3,
    title: "News",
    icon: <ChatBubbleLeftRightIcon className="nav-icon" />,
  },
  {
    id: 4,
    title: "Settings",
    icon: <CogIcon className="nav-icon" />,
  },
  {
    id: 5,
    title: "LogOut",
    icon: <ArrowRightOnRectangleIcon className="nav-icon" />,
  },
];
