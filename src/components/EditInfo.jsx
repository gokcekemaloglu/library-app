import React from "react";

const EditInfo = ({editItem, setEditItem, putInfo}) => {
  return (
    <div
      class="modal fade"
      id="editModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Modal
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="kitapAdi" className="form-label">
              Kitap Adı
              </label>
              <input
                type="text"
                className="form-control"
                id="kitapAdi"
                placeholder="Kitap Adı"
                value={editItem.title}
                onChange={(e)=>setEditItem({...editItem, title: e.target.value})}
                
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
                value={editItem.author}  
                onChange={(e)=>setEditItem({...editItem, author: e.target.value})}
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="isbn" className="form-label">
                ISBN
              </label>
              <input
                type="text"
                className="form-control"
                id="isbn"
                placeholder="ISBN"  
                value={editItem.ISBN}  
                onChange={(e)=>setEditItem({...editItem, ISBN: e.target.value})}
                
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
                value={editItem.image} 
                onChange={(e)=>setEditItem({...editItem, image: e.target.value})}
                
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
                value={editItem.genre}  
                onChange={(e)=>setEditItem({...editItem, genre: e.target.value})}
                
              />
              <div id="emailHelp" className="form-text">
          Birden fazla seçenek varsa slash "/" ile ayırabilirsiniz.
          </div>
            </div>
            <div className="mb-3">
              <label htmlFor="tarih" className="form-label">
              Yayınlanma Tarihi (Yılı)
              </label>
              <input
                type="text"
                className="form-control"
                id="tarih"
                placeholder="Yayınlanma Tarihi (Yılı)" 
                value={editItem.publicationYear}   
                onChange={(e)=>setEditItem({...editItem, publicationYear: e.target.value})}
                
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>putInfo(editItem)}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInfo;
