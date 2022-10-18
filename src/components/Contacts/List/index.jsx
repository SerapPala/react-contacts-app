import { useState } from "react";

function ContactList({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  console.log("filtered", filtered);

  return (
    <div className="container">
      <input
        className="form-control mt-5"
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className="list-group mt-5">
        {contacts.map((contact, i) => (
          <li key={i} className="list-group-item pt-3">
            {contact.fullname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
