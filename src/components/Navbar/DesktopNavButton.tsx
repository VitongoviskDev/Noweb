import React from 'react'
import type { NavLink } from '../../util/NavLink';
import { IoIosArrowDown } from 'react-icons/io';

interface DesktopNavButtonProps {
    link: NavLink;
    setSubmenu: (buttonLabel: string) => void;
    currentSubmenu: string;
}

const DesktopNavButton: React.FC<DesktopNavButtonProps> = ({ link, setSubmenu, currentSubmenu }) => {
    const isCurrentSubmenu = () => {
        return link.submenu && link.label == currentSubmenu
    }
    return (
        <li key={link.href}
            className={`relative flex items-center gap-2`}>
            <a href={link.href}
                className={`
                    text-nowrap text-gray-700 hover:text-blue-600
                    ${location.pathname + location.hash == link.href ? 'border-b-2 border-accent font-bold' : ''}
                `}
                onClick={() => setSubmenu('')}>
                {link.label}
            </a>
            {
                link.submenu &&
                <IoIosArrowDown
                    onClick={() => { setSubmenu(isCurrentSubmenu() ? '' : link.label) }}
                    className={`
                        transition duration-600 ease-in-out
                        ${isCurrentSubmenu() ? 'rotate-[540deg]' : ''}
                    `} />
            }
            {
                <div className={`
                    top-8 -left-0 w-fit h-fit bg-white shadow-md rounded-md ring-1 ring-gray-300 transition duration:-[2000ms] ease-in-out
                    ${isCurrentSubmenu() ? 'absolute' : 'hidden'}
                `}>
                    <ul className="flex flex-col gap-4 px-6 py-4">
                        {
                            link.submenu?.map((submenuLink, index) => (
                                <DesktopNavButton key={`${submenuLink.label}_${index}`} link={submenuLink} currentSubmenu={currentSubmenu} setSubmenu={setSubmenu} />
                            ))
                        }
                    </ul>
                </div>
            }
        </li >
    )
}

export default DesktopNavButton