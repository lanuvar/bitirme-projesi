import React, { useState } from "react";

const UyeOlFormu = () => {
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");

  const handleUyeOl = () => {
    console.log("Üye Ol butonuna tıklandı!");
    console.log("Kullanıcı Adı:", kullaniciAdi);
    console.log("E-Mail:", email);
    console.log("Şifre:", sifre);
  };

  return (
    <div className="container mt-5">
      <h2>Üye Ol</h2>
      <form>
        <label>Kullanıcı Adı:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={kullaniciAdi}
          onChange={(e) => setKullaniciAdi(e.target.value)}
        />
        
        <label className="mt-3">E-Mail:</label>
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            @example.com
          </span>
        </div>
        
        <label>Şifre:</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
        />
        <br />
        <button className="btn btn-success" type="button" onClick={handleUyeOl}>
          Üye Ol
        </button>
      </form>
    </div>
  );
};

export default UyeOlFormu;

