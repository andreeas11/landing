import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase"; 
import emailjs from "emailjs-com";


const SendNewsletter = () => {
    const [emails, setEmails] = useState([]); // Stochează lista de e-mailuri
  const [loading, setLoading] = useState(false); // Indicator de încărcare
  const [sending, setSending] = useState(false); // Indicator pentru trimitere e-mailuri

  // Funcția pentru a prelua e-mailurile din Firestore
  const getEmailList = async () => {
    setLoading(true); // Pornim indicatorul de încărcare
    try {
      const querySnapshot = await getDocs(collection(firestore, "newsletter"));
      const emailList = querySnapshot.docs.map((doc) => doc.data().email);
      setEmails(emailList); // Actualizăm starea cu e-mailurile
    } catch (error) {
      console.error("Error fetching email list: ", error);
    } finally {
      setLoading(false); // Oprim indicatorul de încărcare
    }
  };

  // Funcția pentru trimiterea e-mailurilor
  const sendEmails = async () => {
    const serviceID = "service_jsbcqwi"; 
    const templateID = "template_kjquhxx"; 
    const userID = "GhWFcjyPcOB5NbmWF"; 

    try {
      for (const email of emails) {
        const templateParams = {
          to_email: email, // Destinatar
          message: "Acesta este un test.", // Mesaj
        };
        await emailjs.send(serviceID, templateID, templateParams, userID);
        console.log(`E-mail trimis către: ${email}`);
      }
      alert("E-mailurile au fost trimise cu succes!");
    } catch (error) {
      console.error("Error sending emails: ", error);
      alert("A apărut o eroare la trimiterea e-mailurilor.");
    } finally {
      setSending(false); // Oprim indicatorul de trimitere
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Lista de E-mailuri</h1>

      {/* Buton pentru a afișa lista de e-mailuri */}
      <button onClick={getEmailList} style={{ padding: "10px", fontSize: "16px" }}>
        {loading ? "Se încarcă..." : "Afișează E-mailurile"}
      </button>

      {/* Lista de e-mailuri */}
      <ul style={{ marginTop: "20px" }}>
        {emails.length > 0 ? (
          emails.map((email, index) => (
            <li key={index} style={{ margin: "5px 0" }}>
              {email}
            </li>
          ))
        ) : (
          !loading && <p>Nu există e-mailuri de afișat.</p>
        )}
      </ul>

      {/* Buton pentru a trimite e-mailuri */}
      {emails.length > 0 && (
        <button
          onClick={sendEmails}
          style={{ padding: "10px", fontSize: "16px", marginTop: "20px" }}
          disabled={sending}
        >
          {sending ? "Se trimit e-mailurile..." : "Trimite E-mailuri"}
        </button>
      )}
    </div>
  );
};

export default SendNewsletter;