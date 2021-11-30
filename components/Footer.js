import React from "react";

function Footer() {
  return (
    <div className="py-2">
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
            <a href="#">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram 3x"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter-square"></i>
            </a>
          </div>
        </div>

        <div class="right-container text-center">
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
        <a class="author" href="https://github.com/tnngoan">
          Tran Nhu Ngoan
        </a>
        . All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
