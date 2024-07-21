import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const InfoList = () => {
  return (
    <div className="container mt-4">
      <table class="table table-striped">
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
        {[].map(()=>{
            return (
                <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                    <AiFillDelete
                    type="button"
                    size={22}
                    className="text-danger cursor-pointer"
                    

                  />

                  <FaEdit
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    size={20}
                    type="button"
                    className="me-2 text-warning cursor-pointer"
                    
                  />
                    </td>
                </tr>
            )
        })}
          
          
        </tbody>
      </table>
    </div>
  );
};

export default InfoList;
