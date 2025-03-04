import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard/:id",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Users",
    path: "/dashboard/:id/adduser",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "Intern Management",
    path: "/dashboard/:id/management",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "Performance",
    path: "/dashboard/:id/performance",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Attendance",
    path: "/dashboard/:id/attendance",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  }
];
