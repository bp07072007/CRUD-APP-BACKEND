//Predefine the error codes and corressponding message.
const ERR_CODES = {
    500: { message: "INTERNAL SERVER ERROR" },
    email: { message: "Email  is required" },
    contact: { message: "Contact  is required" },
    name: { message: "Name  is required" },
   not_found: { message: "Entry not found" },
   id_not_found: { message: "id is not found" },
  };
  
  export default ERR_CODES;