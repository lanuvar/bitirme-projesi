// AnaBilesen.js
import React, { useState } from "react";
import UyeOlFormu from "./UyeOlFormu";
import Navbar from "./Navbar";

const AnaBilesen = () => {
  const [kullaniciAdi, setKullaniciAdi] = useState("");

  const handleUyeOl = (newKullaniciAdi) => {
    setKullaniciAdi(newKullaniciAdi);
  };

  return (
    <div>
      <Navbar kullaniciAdi={kullaniciAdi} />
      <UyeOlFormu onUyeOl={handleUyeOl} />
    </div>
  );
};

export default AnaBilesen;
