import { React, useState } from "react";
import UserDetails from "./Users/UserDetails";
import { Dialog } from "primereact/dialog";

export default function Actions(rowData) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        className="btn btn-info"
        onClick={() => {
          setVisible(true);
        }}
      >
        <i className="pi pi-eye"></i>
      </button>

      <button
        className="btn btn-warning"
        onClick={() => console.log(rowData.id)}
      >
        <i className="pi pi-file-edit"></i>
      </button>

      <button className="btn btn-danger" onClick={() => console.log(rowData)}>
        <i className="pi pi-trash"></i>
      </button>

      <Dialog
        header="View User Date"
        visible={visible}
        style={{ width: "70vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <UserDetails UID={rowData} />
      </Dialog>
    </>
  );
}
