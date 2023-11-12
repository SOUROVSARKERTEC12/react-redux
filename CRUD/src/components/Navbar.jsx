import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {searchUser} from "../features/getUserSlice.js";

const Navbar = () => {
    const allusers = useSelector((state) => state.app.users);
    const dispatch = useDispatch();

    const [searchData, setSearchData] = useState("");

    useEffect(() => {
        dispatch(searchUser(searchData));
    }, [searchData]);

    const menuItems = [
        { label: 'Create Post', link: '/' },
        { label: 'All Post', link: '/read' },
    ];

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
            <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                    <span className="font-semibold text-xl tracking-tight">Tailwind Redux</span>
                </div>
            </div>

            <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                <div className="text-md font-bold text-blue-700 lg:flex-grow">
                    {menuItems.map((menuItem, index) => (
                        <Link
                            key={index}
                            to={menuItem.link}
                            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
                        >
                            {menuItem.label}
                        </Link>
                    ))}
                </div>
                <div className="relative mx-auto text-gray-600">
                    <input
                        className="border-2 border-gray-300 bg-amber-100 h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search"
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
