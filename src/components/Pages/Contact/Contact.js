import React from "react";
import "./contact.scss";
export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <p className="p1">روشهای ارتباطی با ما </p>
      <label>ایمیل:</label>
      <input type="text"/>
      <p className="p2">تلفن: 09196107737</p>
      <div className="icons">
        <a
          href="https://github.com/Alireza9651501005"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alireza-mohammadi-946640197/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="#home-1">
          <i class="fab fa-youtube" aria-hidden="true"></i>
        </a>
        <a href="#home-1">
          <i class="fab fa-facebook" aria-hidden="true"></i>
        </a>
      </div>
      <div className="line" />
      <p className="p3">کلیه حقوق برای سایت فروشگاه اتکا محفوظ است</p>
    </div>
  );
};
