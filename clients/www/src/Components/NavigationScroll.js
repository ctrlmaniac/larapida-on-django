import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function NavigationScroll({ children }) {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return children || null;
}
