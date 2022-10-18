import { useState , useEffect} from "react";

function Form({addContact, contacts}) {
const initialFormValues = { fullname: "", phone_number: "" };
  const [form, setForm] = useState(initialFormValues);


useEffect(() =>{
    setForm(initialFormValues);
}, [contacts])


  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if(form.fullname === '' || form.phone_number === ''){
return false;
    }

    addContact([ ...contacts, form ])



  };

  return (
    <div className="container mt-5">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col">
            <input
              name="fullname"
              className="form-control"
              placeholder="Fullname"
              value={form.fullname}
              onChange={onChangeInput}
            />
          </div>
          <div className="col">
            <input
              name="phone_number"
              className="form-control"
              placeholder="Phone Number"
              value={form.phone_number}
              onChange={onChangeInput}
            />
          </div>
          <div className="col text-left">
            <button className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
