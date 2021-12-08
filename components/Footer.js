import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

function Footer() {
  return (
    <div className="py-2 bg-red-100 border-t-4 border-b-4 border-red-400">
      <div className="py-12 flex justify-center">
        <div className="text-center">
          <hr className="bg-gray-900 my-2" />
          <ul>
            <li>privacy policy</li>
            <li>terms & conditions</li>
            <li>about</li>
          </ul>
        </div>
        <div>
          <h1 className="uppercase text-3xl tracking-widest px-4">WeBakery</h1>
          <div>
            <Link href="/" passHref>
              <GitHubIcon className="text-grey-900 hover:text-grey-200" />
            </Link>
            <Link href="/" passHref>
              <InstagramIcon className="text-grey-900 hover:text-grey-200" />
            </Link>
          </div>
        </div>

        <div className="right-container text-center">
          <hr className="bg-gray-900 my-2" />
          <ul>
            <li>shipping info</li>
            <li>return / exchanges</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
      <p className="text-center">
        Copyright &copy; 2021 ||
        <a className="author" href="https://github.com/tnngoan">
          Tran Nhu Ngoan
        </a>
        . All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
