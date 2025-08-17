import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import Preloader from "../../components/Preloader"; // ✅ fixed import path

const AppLayout = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Apply padding to all pages except home
  const mainPadding = location.pathname === "/" ? "" : "pt-32";

  useEffect(() => {
    // Show preloader whenever the route changes
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // adjust duration (ms) as you like

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Preloader overlay */}
      <Preloader loading={loading} />

      {/* App content */}
      {!loading && (
        <div>
          <Navbar />
          <main className={mainPadding}>
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default AppLayout;
