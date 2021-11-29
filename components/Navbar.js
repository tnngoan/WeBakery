import React from "react";
import Link from "next/link";
import Image from "next/image/";
import logo from "/public/img/logo-freshbake.png";
import { IconButton } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b flex-shrink">
      <Link href="/">
        <Image
          priority={true}
          width={200}
          height={70}
          alt="Home"
          src={logo}
          className="cursor-pointer flex-shrink-0"
        />
      </Link>
      <div className="text-yellow-700 flex items-center bg-yellow-100 rounded-md focus:border-yellow-500 flex-shrink">
        <input
          type="search"
          className="block w-full py-1.5 pl-6 pr-4 leading-normal rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 ring-opacity-90 bg-yellow-100 dark:bg-yellow-800 text-yellow-800 aa-input"
          placeholder="Search"
        />
      </div>
      <group className="cursor-pointer flex justify-around px-5 font-bold text-black">
        <IconButton>
          <Link href="/products">
            <AppsIcon
              className="text-black hover:text-yellow-500"
              style={{ padding: 2, fontSize: 32 }}
              alt="Menu"
            />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="/cart">
            <ShoppingBasketIcon
              className="text-black hover:text-yellow-500"
              style={{ padding: 2, fontSize: 32 }}
              alt="Cart"
            />
          </Link>
        </IconButton>
        <IconButton>
          <Link href="/signin">
            <AccountCircleIcon
              className="text-black hover:text-yellow-500"
              style={{ fontSize: 32, padding: 2 }}
            />
          </Link>
        </IconButton>
      </group>
    </nav>
  );
}

export default Navbar;
