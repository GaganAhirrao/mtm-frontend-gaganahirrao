import React from 'react'

export default function Header() {
    return (
        <>
        <div className="banner">
            <img className="my-img" src="/my-banner.png" alt="banner" />
        </div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-3xl">Itinerary Planner</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-25 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}