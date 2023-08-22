import React from "react";
import img from "/landingimg.png";
import { motion } from "framer-motion";
import { LinkedIN } from "./assets/Logo";
export default function LandingPage() {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center flex-sm-wrap  flex-sm-nowrap flex-wrap landing-page">
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="landing-page-text"
        >
          <div className="display-1 fw-bolder">
            Hi, I'm Karthik
            </div>
          <div className="h1 fw-bolder text-secondary">
            Front-end Developer
            </div>
          <p className="fw-semibold text-opacity-75 text-secondary">
            Passionate Front-End Developer skilled in crafting <br /> immersive
            digital experiences through
            <br /> UX/UI design and clean code.
          </p>
          <div className="d-flex justify-content-start align-items-center my-5">
            <span className="btn btn-primary d-flex justify-content-center align-items-center">
              <LinkedIN /><p className="m-2">LINKED IN</p>
            </span>
            <span className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mx-5">
                MY PROJECTS
            </span>

          </div>
        </motion.div>
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0}}
          transition={{ duration: .2 }}
          className="image"
        >
          <img src={img} alt="" className=" img-fluid" />
        </motion.div>
      </div>
    </div>
  );
}
