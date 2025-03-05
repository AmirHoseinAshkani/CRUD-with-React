import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import getAllUsers from "../Services/GetAllUsers";
import Actions from "../Actions";

export default function Users() {

  const [users, SetUserLists] = useState([]);

  useEffect(() => {
    getAllUsers(SetUserLists);
  }, [users.id]);

  return (
    <div className="Users-Page">

      <div className="container">
        
        <h1>CRUD Operation with React.js</h1>

        <div className="Users-List">

          <DataTable value={users} tableStyle={{ minWidth: "50rem" }}>
            <Column field="name" header="Name"></Column>
            <Column field="username" header="Username"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="phone" header="Phone"></Column>
            <Column field="website" header="Website"></Column>
            <Column
              header="Actions"
              body={Actions}
            ></Column>
          </DataTable>

        </div>

      </div>

    </div>
  );
}
