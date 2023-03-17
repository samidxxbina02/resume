import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

const sidebarList = () => {
  return [
    {
      title: "Главная",
      href: "/",
      icon: <HomeIcon sx={{ color: "white" }} fontSize="large" />,
    },
    {
      title: "Контакты",
      href: "/contacts",
      icon: <SearchIcon sx={{ color: "white" }} fontSize="large" />,
    },
    {
      title: "Обо мне",
      href: "/about",
      icon: <PersonIcon sx={{ color: "white" }} fontSize="large" />,
    },
  ];
};

export default sidebarList;
