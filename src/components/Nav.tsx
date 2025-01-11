import { Link, useLocation } from "react-router-dom"
import { RouteLinks } from "@routes/routeUtils";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex gap-8">
      {RouteLinks.map((link, index) => {
        return (
          <Link key={index} to={link.path}>
            <p className={`${ link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
              {link.name}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default Nav
