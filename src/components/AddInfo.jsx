import React, { useState } from "react";

const AddInfo = ({postInfo}) => {
  const [kitapAdi, setKitapAdi] = useState("")
  const [yazarAdi, setYazarAdi] = useState("")
  const [isbn, setIsbn] = useState("")
  const [kapakResmi, setKapakResmi] = useState("")
  const [tur, setTur] = useState("")
  const [tarih, setTarih] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    postInfo({title: kitapAdi,author: yazarAdi,ISBN: isbn,image: kapakResmi,genre: tur,publicationYear: tarih})

    setTarih("")
    setKitapAdi("")
    setYazarAdi("")
    setIsbn("")
    setKapakResmi("")
    setTur("")
  }

  return (
    <div className="container mt-4">
      <h1 className="display-6 text-danger">Kitap Bilgileri</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="kitapadi" className="form-label">
            Kitap Adı
          </label>
          <input
            type="text"
            className="form-control"
            id="kitapadi"
            placeholder="Kitap Adı"
            required
            onChange={(e)=>setKitapAdi(e.target.value)}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="yazarAdi" className="form-label">
            Yazar Adı
          </label>
          <input
            type="text"
            className="form-control"
            id="yazarAdi"
            placeholder="Yazar Adı"
            onChange={(e)=>setYazarAdi(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ISBN" className="form-label">
            ISBN
          </label>
          <input
            type="text"
            className="form-control"
            id="ISBN"
            placeholder="ISBN"
            onChange={(e)=>setIsbn(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="kapakResmi" className="form-label">
            Kapak Resmi
          </label>
          <input
            type="text"
            className="form-control"
            id="kapakResmi"
            placeholder="Kapak Resmi"
            onChange={(e)=>setKapakResmi(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tur" className="form-label">
            Tür
          </label>
          <input
            type="text"
            className="form-control"
            id="tur"
            placeholder="Tür"
            required
            onChange={(e)=>setTur(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
          Birden fazla seçenek varsa slash "/" ile ayırabilirsiniz.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="yayinYili" className="form-label">
            Yayınlanma Tarihi (Yılı)
          </label>
          <input
            type="text"
            className="form-control"
            id="yayinYili"
            placeholder="Yayınlanma Tarihi (Yılı)"
            onChange={(e)=>setTarih(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddInfo;
