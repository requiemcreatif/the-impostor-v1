import React from "react";
import Navbar from "../components/Navbar";
import Sidecontent from "../components/Sidecontent";
import Footer from "../components/Footer";
import Columns from "../features/achievements/Columns";
import styled from "styled-components";
import { pageAnimation } from "../components/animation";
import { motion } from "framer-motion";

const DivRef = styled.div`
  margin: 0 auto;
`;

const Reflection = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <Navbar />
      <Sidecontent />
      <DivRef>
        <Columns />
      </DivRef>
      <Footer />
    </motion.div>
  );
};

export default Reflection;
