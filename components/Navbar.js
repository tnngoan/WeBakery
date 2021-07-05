import React from "react";
import Link from "next/link";
import Image from "next/image/";
import logo from "../img/istockphoto.jpg";
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
          height={105}
          alt="Home"
          src={logo}
          className="cursor-pointer flex-shrink-0"
        />
      </Link>
      <div className="text-grey flex items-center bg-gray-100 rounded-md focus:border-yellow-500 flex-shrink">
        <input
          type="search"
          className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
          placeholder="Search"
        />
      </div>
      <group className="cursor-pointer flex justify-around px-5 font-bold text-black">
        <div className="group flex flex-col items-center">
          <IconButton>
            <Link href="/products">
              <AppsIcon
                className="text-black hover:text-yellow-500"
                style={{ padding: 5, fontSize: 50 }}
              />
            </Link>
          </IconButton>
          <p className="opacity-0 group-hover:opacity-100 tracking-widest">
            Menu
          </p>
        </div>
        <div className="group flex flex-col items-center">
          <IconButton>
            <Link href="/cart">
              <ShoppingBasketIcon
                className="text-black hover:text-yellow-500"
                style={{ padding: 5, fontSize: 50 }}
              />
            </Link>
          </IconButton>
          <p className="opacity-0 group-hover:opacity-100 tracking-widest">
            Cart
          </p>
        </div>
        <div className="group flex flex-col items-center flex-1">
          <IconButton>
            <Link href="/signin">
              <AccountCircleIcon
                className="text-black hover:text-yellow-500"
                style={{ fontSize: 50, padding: 5 }}
              />
            </Link>
          </IconButton>
          <p className="opacity-0 group-hover:opacity-100 text-sm">Sign In</p>
        </div>
      </group>
    </nav>
  );
}

export default Navbar;
