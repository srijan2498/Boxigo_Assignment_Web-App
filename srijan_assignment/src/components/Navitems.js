import { FaTruck, FaUser, FaRegNewspaper } from "react-icons/fa";
import { RiLogoutCircleFill } from "react-icons/ri";

export const navigationItems = [
    {
        name: "My moves",
        icon: <FaTruck />,
        link: "/my-moves"
    },
    {
        name: "My profile",
        icon: <FaUser />,
        link: "/my-profile"
    },
    {
        name: "Get Quote",
        icon: <FaRegNewspaper />,
        link: "/get-quote"
    },
    {
        name: "Logout",
        icon: <RiLogoutCircleFill />,
        link: "/"
    },
]