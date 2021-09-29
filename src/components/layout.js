/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import React, { useState } from "react";
import Sticky from "react-stickynode";
import Header from "./header/header";
import Footer from "./footer/footer";
import ScrollToTop from "react-scroll-up";
import { FaArrowUp } from "react-icons/fa";

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <React.Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? "sticky" : "unSticky"}`} />
      </Sticky>
      <main id="content" sx={{ variant: "layout.main" }}>
        {children}
        <ScrollToTop showUnder={700}>
          <Button sx={styles.scrollToTop} variant="primary">
            <FaArrowUp />
          </Button>
        </ScrollToTop>
      </main>
      <Footer />
    </React.Fragment>
  );
}
const styles = {
  scrollToTop:{
    borderRadius: '50%',
    lineHeight: 'unset',
    padding: ['10px 15px', null, '15px 20px'],
  }
}