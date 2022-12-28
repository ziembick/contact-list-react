import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "../../src";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "../utils/ContactsAPI";
import CreateContact from "./CreateContact";

const App = () => {
  let navigate = useNavigate();

  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };

  const createContact = (contact) => {
    const create = async () => {
      const res = await ContactsAPI.create(contact);
      setContacts(contacts.concat(res));
    };

    create();
    navigate("/");
  };

  const [contacts, setContacts] = useState([]);
  // const [screen, setScreen] = useState("list");

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };

    getContacts();
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ListContacts contacts={contacts} onDeleteContact={removeContact} />
        }
      />
      <Route
        path="/create"
        element={
          <CreateContact
            onCreateContact={(contact) => {
              createContact(contact);
            }}
          />
        }
      />
    </Routes>

    // <div>
    //   {screen === "list" && (
    //     <ListContacts
    //       contacts={contacts}
    //       onDeleteContact={removeContact}
    //       onNavigate={() => {
    //         setScreen("create");
    //       }}
    //     />
    //   )}
    //   {screen === "create" && <CreateContact />}
    // </div>
  );
};

export default App;
