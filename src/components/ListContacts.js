import PropTypes from "prop-types";


const ListContacts = ({ contacts, onDeleteContact }) => {
  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
      <input className="search-contacts" type="text" placeholder="Search Contacts"></input>
      </div>
      <ol className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id} className="contact-list-item">
          <div
            className="contact-avatar"
            style={{
              backgroundImage: `url(${contact.avatarURL})`
            }}
          ></div>
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.handle}</p>
          </div>
          <button className="contact-remove" onClick={() => onDeleteContact(contact)}>Remove</button>
        </li>
      ))}
    </ol>
    </div>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default ListContacts;
