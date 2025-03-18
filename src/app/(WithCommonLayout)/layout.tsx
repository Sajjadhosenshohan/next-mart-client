import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen my-20">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
