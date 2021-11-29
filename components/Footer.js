import React from "react";

function Footer() {
  return (
    <div>
      <div className="py-12 flex">
        <div>
          <hr />
          <ul>
            <li>privacy policy</li>
            <li>terms & conditions</li>
            <li>about</li>
          </ul>
        </div>
        <div>
          <h1>Fresh Bake</h1>
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

        <div class="right-container">
          <hr />
          <ul>
            <li>shipping info</li>
            <li>return / exchanges</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
      <p>
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
