import { useState, useEffect } from 'react';
import maleContact from './images/maleContact.png';
import { useContext } from 'react';
import { AppContext, useGlobalContext } from './context';

const Contacts = () => {

    const apiGet = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setContacts(json);
            });
    };

    const context = useGlobalContext();
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        apiGet()
    }, [])

    return (
        <main className='container'>
            <div class="row justify-content-center mt-3 mb-3">
                <div class="col-8">
                    <div class="card-collection">
                        {
                            contacts.map((contact) => (
                                <div id={contact.id} className="card m-2" style={{ cursor: "pointer" }}>
                                    <img src={maleContact} className="male-contact-img" />

                                    <div className='card-body'>
                                        <h5 className="card-title">Full Name: {contact.name}</h5>
                                        <p classname="card-email">Email: {contact.email}</p>
                                        <p className='card-phone'>Phone Number: {contact.phone}</p>
                                        <p className='card-address'>Address: {contact.address.street + " " + contact.address.suite + " " + contact.address.city + " " + contact.address.zipcode}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contacts