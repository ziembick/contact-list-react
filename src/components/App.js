import { useState, useEffect } from "react";
import "../../src";
import ListContacts from "./ListContacts";
import * as ContactsApi from "../utils/ContactsAPI";

const App = () => {
  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsApi.getAll();
      setContacts(res);
    };
  }, []);

  return (
    <div>
      <ListContacts contacts={contacts} onDeleteContact={removeContact} />
    </div>
  );
};

export default App;
