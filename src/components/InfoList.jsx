import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditInfo from "./EditInfo";

const InfoList = ({books, deleteInfo,putInfo}) => {
  const [editItem,setEditItem]=useState("")
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ISBN</th>
            <th scope="col">Kapak Resmi</th>
            <th scope="col">Kitap Adı</th>
            <th scope="col">Yazar Adı</th>
            <th scope="col">Tür</th>
            <th scope="col">Yayınlanma Yılı</th>
            <th scope="col" className="text-center">Düzenle</th>
          </tr>
        </thead>
        <tbody>
        {books.map(({title,author,ISBN,image,genre,publicationYear,id})=>{
          return (
            <tr key={id}>
              <th scope="row">{ISBN}</th>
              <td>
                <img src={image} alt="" width="70px" height="70px"/>
              </td>
              <td>{title}</td>
              <td>{author}</td>
              <td>{genre}</td>
              <td>{publicationYear}</td>
              <td>
                <AiFillDelete
                  type="button"
                  size={22}
                  className="text-danger cursor-pointer"
                  onClick={()=>deleteInfo(id)}

                />

                <FaEdit
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  size={20}
                  type="button"
                  className="me-2 text-warning cursor-pointer"
                  onClick={()=>setEditItem({title,author,ISBN,image,genre,publicationYear,id})}
                    
                />
              </td>
            </tr>
          )
        })}          
          
        </tbody>
      </table>
      <EditInfo editItem={editItem} setEditItem={setEditItem} putInfo={putInfo}/>
    </div>
  );
};

export default InfoList;
