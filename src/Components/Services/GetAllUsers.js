import axios from "axios";

export default async function getAllUsers(Seter) {
  try {
    const response = await axios.get("http://localhost:4000/users");
    
    if (response) {
      Seter(response.data);
    }
  } catch (error) {
    console.log(error);
  }
}

