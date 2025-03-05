import { React } from "react";

export default function UserDetails({ UID }) {

  return (
    <>
      <p className="m-0">{UID.name}</p>
      <p className="m-0">{UID.username}</p>
      <p className="m-0">{UID.email}</p>
      <p className="m-0">{UID.address.street}</p>
      <p className="m-0">{UID.address.suite}</p>
      <p className="m-0">{UID.address.city}</p>
      <p className="m-0">{UID.address.zipcode}</p>
      <p className="m-0">{UID.address.geo.lat}</p>
      <p className="m-0">{UID.address.geo.lng}</p>
      <p className="m-0">{UID.phone}</p>
      <p className="m-0">{UID.website}</p>
      <p className="m-0">{UID.company.name}</p>
      <p className="m-0">{UID.company.catchPhrase}</p>
      <p className="m-0">{UID.company.bs}</p>
    </>
  );

}
