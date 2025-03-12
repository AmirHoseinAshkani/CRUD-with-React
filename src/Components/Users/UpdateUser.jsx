import React, { useState , useEffect} from "react";
import axios from "axios";

export default function UpdateUser({ UserEdited, UInfo }) {
  const [userinfo, setuserinfo] = useState(UInfo);

  useEffect(() => {
    setuserinfo(UInfo);
  }, [UInfo]);

  console.log(userinfo);

  const EditUser = async () => {
    try {
      const response = await axios.put(`http://localhost:4000/users/${UInfo.id}`, userinfo);
      UserEdited(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  
  


  return (
    <>
      <p className="m-0">
        name
        <input
          type="text"
          value={userinfo.name ?? ""}
          onChange={(e) => setuserinfo({ ...userinfo, name: e.target.value })}
        />
      </p>

      <p className="m-0">
        username
        <input
          type="text"
          value={userinfo.username ?? ""}
          onChange={(e) => setuserinfo({ ...userinfo, username: e.target.value })}
        />
      </p>

      <p className="m-0">
        " email
        <input
          type="text"
          value={userinfo.email ?? ""}
          onChange={(e) => setuserinfo({ ...userinfo, email: e.target.value })}
        />
      </p>

      <p className="m-0">
        address.street
        <input
          type="text"
          value={userinfo.street ?? ""}
          onChange={(e) => setuserinfo({ ...userinfo, street: e.target.value })}
        />
      </p>

      <p className="m-0">
        address.suite
        <input
          type="text"
          value={userinfo.address?.suite ?? ""}
          onChange={(e) =>
            setuserinfo({
              ...userinfo,
              address: {
                ...userinfo.address,
                suite: e.target.value,
              },
            })
          }
        />
      </p>

      <p className="m-0">
        address.city
        <input
          type="text"
          value={userinfo.address?.city ?? ""}
          onChange={(e) =>
            setuserinfo({
              ...userinfo,
              address: {
                ...userinfo.address,
                city: e.target.value,
              },
            })
          }
        />
      </p>

      <p className="m-0">
        address.zipcode
        <input
          type="text"
          value={userinfo.address?.zipcode ?? ""}
          onChange={(e) =>
            setuserinfo({
              ...userinfo,
              address: {
                ...userinfo.address,
                zipcode: e.target.value,
              },
            })
          }
        />
      </p>

      <p className="m-0">
        phone
        <input
          type="text"
          value={userinfo.phone ?? ""}
          onChange={(e) => setuserinfo({ ...userinfo, phone: e.target.value })}
        />
      </p>

      <p className="m-0">
        website
        <input
          type="text"
          value={userinfo.website ?? ""}
          onChange={(e) => setuserinfo({ ...userinfo, website: e.target.value })}
        />
      </p>

      <p className="m-0">
        company.name
        <input
          type="text"
          value={userinfo.company?.name ?? ""}
          onChange={(e) =>
            setuserinfo({
              ...userinfo,
              company: {
                ...userinfo.company,
                name: e.target.value,
              },
            })
          }
        />
      </p>

      <p className="m-0">
        address.geo.lat
        <input
          type="text"
          value={userinfo.address?.geo?.lat ?? ""}
          onChange={(e) =>
            setuserinfo({
              ...userinfo,
              address: {
                ...userinfo.address.geo,
                geo: {
                  lat: e.target.value,
                },
              },
            })
          }
        />
      </p>

      <p className="m-0">
        address.geo.lng
        <input
          type="text"
          value={userinfo.address?.geo?.lng ?? ""}
          onChange={(e) =>
            setuserinfo({
              ...userinfo,
              address: {
                ...userinfo.address,
                geo: {
                  lng: e.target.value,
                },
              },
            })
          }
        />
      </p>

      <p className="m-0">
        company.catchPhrase
        <input
          type="text"
          value={userinfo.company?.catchPhrase ?? ""}
          onChange={(e) =>
            setuserinfo({
              ...userinfo,
              company: {
                ...userinfo.company,
                catchPhrase: e.target.value,
              },
            })
          }
        />
      </p>

      <p className="m-0">
        company.bs
        <input
          type="text"
          value={userinfo.company?.bs ?? ""}
          onChange={(e) =>
            setuserinfo({
              ...userinfo,
              company: {
                ...userinfo.company,
                bs: e.target.value,
              },
            })
          }
        />
      </p>

      <button className="btn btn-success" onClick={() => EditUser()}>
        Edit User
      </button>
    </>
  );
} 