import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import getAllUsers from "../Services/GetAllUsers";
import { Dialog } from "primereact/dialog";
import Actions from "../Actions";
import AddUser from "./AddUser";

export default function Users() {
  
  const [users, SetUserLists] = useState([]);
  const [ShowAddMode, setShowAddMode] = useState(false);

  useEffect(() => {
    getAllUsers(SetUserLists);
  }, [users.id]);

  return (
    <div className="Users-Page">
      <div className="container">
        <h1>CRUD Operation with React.js</h1>

        <div className="Users-List">
          <div>
            <div className="addnewUser">
              <button
                className="btn btn-success"
                onClick={() => {
                  setShowAddMode(true);
                }}
              >
                Add New User <i className="pi pi-plus"></i>
              </button>
            </div>
          </div>

          <DataTable value={users} tableStyle={{ minWidth: "50rem" }}>
            <Column field="name" header="Name"></Column>
            <Column field="username" header="Username"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="phone" header="Phone"></Column>
            <Column field="website" header="Website"></Column>
            <Column header="Actions" body={Actions}></Column>
          </DataTable>
{/* ........................................................................................ */}
          <Dialog header="Add New User" visible={ShowAddMode} style={{ width: "70vw" }}
            onHide={() => { if (!ShowAddMode) return; setShowAddMode(false);}}>
            <AddUser setUserAdd={() => {setShowAddMode(false); getAllUsers(SetUserLists);}}/>
          </Dialog>

        </div>
      </div>
    </div>
  );
}
