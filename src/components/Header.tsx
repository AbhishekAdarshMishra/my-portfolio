import { Link } from "react-router-dom"
import Nav from "@components/Nav"
import { HireButton } from "@ui/tailwindcss-buttons"
import MobileNav from "@components/MobileNav"


const Header = () => {
  return (
    <div className="py-8 xl:py-12">
        <div className="container mx-auto flex justify-between">
            {/* LOGO */}
            <Link to="/">
                <h1 className='text-4xl font-semibold p-4'>
                    Abhishek<span className='text-accent'>.</span>
                </h1>
            </Link>
            {/* Desktop NAV */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link to="/contact">
                    <HireButton>Hire me</HireButton>
                </Link>
            </div>
            {/* Mobile NAV */}
            <div className="xl:hidden">
                <MobileNav/>
            </div>
        </div> 
    </div>
  )
}

export default Header
