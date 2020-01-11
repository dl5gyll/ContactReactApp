import React from "react";
import contacts from "../contacts";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";


function createCard(contact){
  return <Card 
  key={contact.id}
  name={contact.name}
  img={contact.imgURL}
  tel={contact.phone}
  email={contact.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My contact</h1>
      <Header img="https://media.licdn.com/dms/image/C4E03AQFweOIvMyZ4AQ/profile-displayphoto-shrink_200_200/0?e=1580947200&v=beta&t=_oQeVLCJeh7hIVesMaalvTtIT45hDE94Vc6Jh36X850"/>
    {contacts.map(createCard)}
      <Footer/>
    </div>
  );
}

export default App;