import React from "react";
import Link from "next/link";
import Image from "next/image/";
import logo from "/public/img/cupcake.png";
import { IconButton } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Navbar() {
  return (
    <nav className="nav-bg sticky top-0 z-50 flex justify-evenly items-center flex-shrink bg-gradient-to-b from-red-200 pb-32 mb-80 pt-2">
      <Link href="/">
        <Image src={logo} width={100} height={100}  className="cursor-pointer px-5" />
      </Link>
      <div className="text-red-700 flex items-center rounded-md focus:border-red-100 flex-shrink">
        <input
          type="search"
          className="block w-full py-1.5 pl-6 pr-4 leading-normal rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-800 ring-opacity-90 bg-gray-100 dark:bg-yellow-700 text-yellow-700 aa-input"
          placeholder="Search"
        />
      </div>
      <group className="cursor-pointer flex justify-around font-bold text-black">
        <IconButton>
          <Link href="/products">
            <AppsIcon
              className="text-red-400 hover:text-red-700"
              style={{ padding: 2, fontSize: 32 }}
              alt="Menu"
            />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="/cart">
            <ShoppingBasketIcon
              className="text-red-400 hover:text-red-700"
              style={{ padding: 2, fontSize: 32 }}
              alt="Cart"
            />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="/signin">
            <AccountCircleIcon
              className="text-red-400 hover:text-red-700"
              style={{ fontSize: 32, padding: 2 }}
            />
          </Link>
        </IconButton>
      </group>
    </nav>
    
  );
}

export default Navbar;
