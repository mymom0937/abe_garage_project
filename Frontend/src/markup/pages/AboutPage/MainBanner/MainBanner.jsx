// import React from "react";
// import bannerImage from "../../../../assets/images/about2.png";
// import "./MainBanner.css";
// import { MdPadding } from "react-icons/md";

// const MainBanner = () => {
//   return (
//     <div
//       className="main-banner"
//       style={{ backgroundImage: `url(${bannerImage})` }}
//     >
//       <div className="banner-content">
//         <h1 className=""style={{paddingTop:"10"}}>About Us</h1>
//         <nav className="breadcrumb">
//           <a href="/" style={{ color: "white",fontSize:"36" }}>
//             Home
//           </a>{" "}

//           {/* &gt; 
//           <a href="/about" style={{ color: "white" }}>
//             About Us
//           </a>{" "} */}

//           {/* Made About Us clickable */}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default MainBanner; 

import React from "react";
// import bannerImage from "../../../../assets/images/about2.png";
import bannerImage from "../../../../assets/images/aboutUs.jpeg";
import "./MainBanner.css";

const MainBanner = () => {
  return (
    <div
      className="main-banner"
      style={{ backgroundImage: `url(${bannerImage})`,top:"+70px" }}
    >
      <div className="banner-content">
        <h1 style={{ paddingTop: "10px" }}>About Us</h1>
        <nav className="breadcrumb">
          <a
            href="/"
            style={{
              color: "white",
              fontSize: "24px",
              backgroundColor: "#e74c3c",
              borderRadius: "5px",width:"90px",paddingLeft:"10px"
            }}
          >
            Home
          </a>
          {/* Uncomment this if you want "About Us" to be clickable as part of the breadcrumb */}
          {/* &gt; 
          <a href="/about" style={{ color: "white", fontSize: "36px" }}>
            About Us
          </a> */}
        </nav>
      </div>
    </div>
  );
};

export default MainBanner;

