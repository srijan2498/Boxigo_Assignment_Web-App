import React, { useState } from 'react'
import { navigationItems } from './Navitems'

const Navbar = () => {

    const [navItems, setNavItems] = useState(navigationItems)

    return (
        <div className='side_nav'>
            {navItems.map((item, index) => {
                return (
                    <li className="nav_item" key={index}>
                        <span className="nav_icon">{item.icon}</span>
                        {item.name}
                    </li>
                )
            })}
        </div>
    )
}

export default Navbar
