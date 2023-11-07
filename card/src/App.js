
import React from "react";
import logo from './images/user.png';
// import startOn from './images/star-empty.png';
// import startOff from './images/star-filled.png';
import Star from "./Star";


function App() {

  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
})

// let starIcon = contact.isFavorite ?  startOff : startOn
    
function toggleFavorite() {
    setContact(prevContact => ({
        ...prevContact,
        isFavorite: !prevContact.isFavorite
    }))
}

  return (
    <main>
    <article className="card">
        <img src={logo} className="card--image" />
        <div className="card--info">
            <Star isFilled={contact.isFavorite} handleclick={toggleFavorite} />
            <h2 className="card--name">
                {contact.firstName} {contact.lastName}
            </h2>
            <p className="card--contact">{contact.phone}</p>
            <p className="card--contact">{contact.email}</p>
        </div>
        
    </article>
</main>
  );
}

export default App;
