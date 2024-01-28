import React from "react";
import { Route, Routes } from "react-router-dom";
import MeramSosyal from "./MeramSosyal";
import Forum from "./Forum";
import Home from "./Home";
import GaleriSayfasi from "./GaleriSayfasi";
import UyeOlFormu from "./UyeOlFormu";
import Boss from "./Boss";

function SiteRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<MeramSosyal />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/galeri" element={<GaleriSayfasi />} />
      <Route path="/uye" element={<UyeOlFormu />} />
      <Route path="/bos" element={<Boss />} />
      
    </Routes>
  );
}

export default SiteRoutes;
