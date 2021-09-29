/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import BannerImg from "assets/banner.png";
import ShapeLeft from "assets/shape-left.svg";
import ShapeRight from "assets/shape-right.svg";
import { keyframes } from "@emotion/core";
export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Lorem ipsum dolor sit amet consectetur
          </Heading>
          <Text as="p" variant="heroSecondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
            quis. adipisicing elit. amet consectetur adipisicing elit. Quidem,
            quis. adipisicing elit
          </Text>
          <Button variant="primary">See More</Button>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="Banner" width='100%' height='100%'/>
        </Box>
      </Container>
    </section>
  );
}
const wave = keyframes`
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(20px);
  }
`
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity:1;
    transform: translateY(0px);
  }
`
const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
      animation: `${wave} 5s linear infinite alternate`
      
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
      animation: `${wave} 5s linear infinite alternate`
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
      animation: `${fadeIn} 3s backwards`
    },
  },
};
