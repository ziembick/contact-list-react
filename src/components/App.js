import { useState, useEffect } from "react";
import "../../src";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "../utils/ContactsAPI";
import CreateContact from "./CreateContact";

const App = () => {
  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };

  const [contacts, setContacts] = useState([]);
  const [screen, setScreen] = useState("create")

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };

    getContacts()
  }, []);

  return (
    <div>
      {
        screen === "list" && (<ListContacts contacts={contacts} onDeleteContact={removeContact}/>) 
      }
      {
        screen === "create" && (<CreateContact />)
      }
    </div>
  );
};

export default App;

/* <ListContacts contacts={contacts} onDeleteContact={removeContact} />
<CreateContact /> */
