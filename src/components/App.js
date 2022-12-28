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

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };

    getContacts()
  }, []);

  return (
    <div>
      <ListContacts contacts={contacts} onDeleteContact={removeContact} />
      <CreateContact />
    </div>
  );
};

export default App;
