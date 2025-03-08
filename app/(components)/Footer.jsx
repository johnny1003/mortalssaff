"use client";
import { useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgb(79, 139, 250)",
        borderRadius: "15px 15px 0 0",
        padding: "20px",
        marginTop: "50px",
      }}
    >
      <div style={{ display: "flex", color: "white" }}>
        <div
          id="submission"
          style={{ flex: 4, width: "50%", paddingLeft: "2%" }}
        >
          <h3>Submission</h3>
          <h6>Your work will be revised before submission.</h6>
          <h6>Notifications will be sent via email/Teams</h6>
          <Link
            href="https://forms.office.com/pages/responsepage.aspx?id=4uHGy7umAkC73G2okqBRp6xsy5ePBBNGqQHOmRnLOqhUM1VMMjFIWDVVMU1OOUhIMFA4WUIyS05DMy4u&route=shorturl"
            type="button"
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
          >
            Submit your article here!
          </Link>
        </div>
        <div
          id="submission"
          style={{ flex: 4, width: "50%", paddingLeft: "2%" }}
        >
          <h3>Join us</h3>
          <h6>Please use the form below to register</h6>
          <h6>Notifications will be sent via email/Teams</h6>
          <Link
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=4uHGy7umAkC73G2okqBRp6xsy5ePBBNGqQHOmRnLOqhUNVRIQlVHNVA3NjlSOFdZQkFFNlpMQk0zUy4u"
            type="button"
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
          >
            Join now!
          </Link>
        </div>
        <div style={{ flex: 2, width: "30%", paddingRight: "5%" }}>
          <h3>Contact Us</h3>
          <h5>Email: themortals@basischina.com</h5>
          <h5>WeChat:sz15626534285</h5>
          <h5>Teams:15348</h5>
        </div>
        
        <div
          style={{
            flex: 2,
            width: "10%",
            paddingTop: "150px",
            paddingLeft: "50px",
          }}
        >
          <Link href="/login" type="button" className="btn btn-light">
            Editors Login
          </Link>
        </div>
      </div>
      <hr />
      <div style={{ paddingBottom: "20px", color: "white" }}>
        <h6 style={{ float: "left" }}>@The Mortals 2024</h6>
        <h6 style={{ float: "right" }}>All rights reserved</h6>
      </div>
    </footer>
  );
};

export default Footer;
