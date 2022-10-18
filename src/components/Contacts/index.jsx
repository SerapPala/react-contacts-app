import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
function Contacts() {
  const [contacts, setContacts] = useState([
    {
        fullname:'Serap',
    phone_number:'1231234'
    },
    {
        fullname:'Sinem',
    phone_number:'533645'
    },
    {
        fullname:'Selin',
    phone_number:'886673'
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
    <List contacts={contacts}/>
      <Form addContact={setContacts}  contacts={contacts}/>
  

    </div>
  );
}

export default Contacts;
