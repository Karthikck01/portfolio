import { motion } from "framer-motion";
import { useState } from "react";
import {DarkModeImg , LightModeImg, GithubLogo} from './assets/Logo'
 

const NavBar = (props) => {
  const [DarkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!DarkMode);
    props.setDarkMode(DarkMode);
  };

  return (
    <div className="container d-flex justify-content-between align-items-center fixed-top">
      <motion.div 
      initial={{ x: 200 }}
      animate={{ x: 1 }}
      whileTap={{ rotateY: "180deg" }}
      className="h2">
        MY PROTFOLIO 
      </motion.div>
      <div className="d-flex justify-content-between align-items-center">
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 1 }}
          whileTap={{ rotate: "180deg" }}
          className="darkmode-toggle mx-5 d-flex justify-content-center align-items-center"
          onClick={handleClick}
        >
          {DarkMode ? <DarkModeImg /> : <LightModeImg />}
        </motion.div>

        <div onClick={() => open('https://github.com/karthikck01')}>
          <GithubLogo _height={20} _width={20}/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
