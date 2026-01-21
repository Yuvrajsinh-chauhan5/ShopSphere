// import React from "react";

// const Footer = () => {
//   return (
//     <footer
//       style={{
//         marginTop: "60px",
//         padding: "32px 20px",
//         background: "var(--navbar_background)",
//         color: "var(--navbar_text)",
//         borderTop: "1px solid rgba(0,0,0,0.08)",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//           gap: "24px",
//         }}
//       >
//         {/* Project Info */}
//         <div>
//           <h5 style={{ fontWeight: "600", marginBottom: "10px" }}>
//             ShopSphere
//           </h5>
//           <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "var(--para-clr)" }}>
//             A full-stack learning project focused on Spring Boot backend
//             development and modern React-based frontend integration.
//           </p>
//         </div>

//         {/* Tech Stack */}
//         <div>
//           <h6 style={{ fontWeight: "600", marginBottom: "10px" }}>
//             Tech Stack
//           </h6>
//           <ul style={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}>
//             <li>React (Vite)</li>
//             <li>Spring Boot</li>
//             <li>H2 Database</li>
//             <li>REST APIs</li>
//           </ul>
//         </div>

//         {/* Learning Note */}
//         <div>
//           <h6 style={{ fontWeight: "600", marginBottom: "10px" }}>
//             Purpose
//           </h6>
//           <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "var(--para-clr)" }}>
//             Built strictly for hands-on practice to understand real-world
//             application architecture, API communication, and UI behavior.
//           </p>
//         </div>
//       </div>

//       <div
//         style={{
//           textAlign: "center",
//           marginTop: "28px",
//           fontSize: "0.85rem",
//           color: "#777",
//         }}
//       >
//         © {new Date().getFullYear()} ShopSphere · Learning Project
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "80px",
        padding: "64px 20px 36px",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.75), rgba(245,247,252,0.85))",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderTop: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
        }}
      >
        {/* Brand */}
        <div>
          <h4
            style={{
              fontWeight: 700,
              marginBottom: "14px",
              letterSpacing: "0.5px",
            }}
          >
            ShopSphere
          </h4>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: "#555",
              maxWidth: "360px",
            }}
          >
            A hands-on full-stack learning project focused on Spring Boot
            backend development and modern React frontend integration.
          </p>
        </div>

        {/* Stack */}
        <div>
          <h6
            style={{
              fontWeight: 600,
              marginBottom: "14px",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              letterSpacing: "1px",
              color: "#666",
            }}
          >
            Tech Stack
          </h6>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "0.9rem",
              lineHeight: "2",
              color: "#555",
            }}
          >
            <li>React (Vite)</li>
            <li>Spring Boot</li>
            <li>H2 Database</li>
            <li>REST APIs</li>
          </ul>
        </div>

        {/* Purpose */}
        <div>
          <h6
            style={{
              fontWeight: 600,
              marginBottom: "14px",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              letterSpacing: "1px",
              color: "#666",
            }}
          >
            Purpose
          </h6>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: "#555",
              maxWidth: "380px",
            }}
          >
            Built purely for learning — to understand real-world application
            architecture, API communication, and frontend–backend integration.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          textAlign: "center",
          marginTop: "48px",
          paddingTop: "20px",
          fontSize: "0.8rem",
          color: "#777",
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        © {new Date().getFullYear()} ShopSphere · Learning Project
      </div>
    </footer>
  );
};

export default Footer;
