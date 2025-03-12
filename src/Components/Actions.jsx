import { React, useState, useEffect } from "react";
import UserDetails from "./Users/UserDetails";
import { Dialog } from "primereact/dialog";
import UpdateUser from "./Users/UpdateUser";
import getAllUsers from "./Services/GetAllUsers";
import { ConfirmDialog } from "primereact/confirmdialog"; // For <ConfirmDialog /> component
import { confirmDialog } from "primereact/confirmdialog"; // For confirmDialog method
import axios from "axios";

export default function Actions(rowData) {
  const [visible, setVisible] = useState(false);
  const [ShowEditMode, setShowEditMode] = useState(false);
  const [users, SetUserLists] = useState([]);

  useEffect(() => {
    getAllUsers(SetUserLists);
  }, [users.id]);

  const DeleteUserConfirm = (userid) => {
    confirmDialog({
      message: "Are you sure you want to deleted?",
      header: "Confirmation",
      icon: "pi pi-trash",
      accept: () => DeleteUser(userid),
    });
  };

  const DeleteUser = async (userid) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/users/${userid}`
      );
      if (response) {
        SetUserLists(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

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
      {/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/}
      <button
        className="btn btn-warning"
        onClick={() => {
          setShowEditMode(true);
        }}
      >
        <i className="pi pi-file-edit"></i>
      </button>
      {/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/}
      <button
        className="btn btn-danger"
        onClick={() => {
          DeleteUserConfirm(rowData.id);
        }}
      >
        <i className="pi pi-trash"></i>
      </button>
      {/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/}

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
      {/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/}
      <Dialog
        header="Edit Exist User"
        visible={ShowEditMode}
        style={{ width: "70vw" }}
        onHide={() => {
          if (!ShowEditMode) return;
          setShowEditMode(false);
        }}
      >
        <UpdateUser
          UInfo={rowData}
          UserEdited={() => {
            setShowEditMode(false);
            getAllUsers(SetUserLists);
          }}
        />
      </Dialog>
      {/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/}

      <ConfirmDialog />
    </>
  );
}
