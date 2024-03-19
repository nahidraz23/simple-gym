import { useState } from "react";
import Link from "../Link/Link";
import { TiThMenuOutline } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {

    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/',
        },
        {
            id: 2,
            name: 'About',
            path: '/about',
        },
        {
            id: 3,
            name: 'Contact',
            path: '/contact',
        },
        {
            id: 4,
            name: 'Product',
            path: '/products/:id',
        },
        {
            id: 5,
            name: 'Not Found',
            path: '*',
        }
    ];

    const [open, setOpen] = useState(false);


    return (
        <nav className="flex justify-between p-10 items-center bg-orange-500 text-white">
            <div onClick={() => setOpen(!open)} className="text-2xl static lg:hidden">
                {
                    open === true ?
                        <MdClose></MdClose>
                        :
                        <TiThMenuOutline></TiThMenuOutline>
                }
            </div>
            <div className="">
                <ul className={`flex flex-col ${open ? 'top-0' : '-top-32'} duration-1000 lg:flex-row items-center absolute  lg:static bg-orange-500`}>
                    {
                        routes.map(route => <Link
                            key={route.id}
                            route={route}
                        ></Link>)
                    }
                </ul>
            </div>

            <div>
                <button className="btn btn-circle"><BsPersonCircle className="text-2xl"></BsPersonCircle></button>
            </div>
        </nav>
    );
};

export default Navbar;