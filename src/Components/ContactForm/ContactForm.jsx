



function ContactForm() {

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;//je récupère le form
    const formData = new FormData(form);//je converti le form en FormData
    const jsonData = Object.fromEntries(formData.entries());//je récupère l'ensemble des inputs ayant un name (name et value)//
    console.log(jsonData)
  };

  return (
    <>
    
    <form className="container" onSubmit={handleFormSubmit}>
      <h2>
        Contactez nous
      </h2>
      <div className="d-flex">
        <div className="idContact d-grid">
          <label className="mb-3"  htmlFor="exampleForm.ControlInput1">
            <input name= "name" type="name" placeholder="Votre Nom" />
          </label>
          <label  className="mb-3"  htmlFor="exampleForm.ControlInput2">
            <input name= "mail"type="email" placeholder="adresse mail" />
          </label>
          <label  className="mb-3"  htmlFor="exampleForm.ControlInput3">
            <input name= "sujet"type="subject" placeholder="Sujet" />
          </label>
        </div>

        <label className="mb-3" htmlFor="exampleForm.ControlTextarea1">
       Votre message...
          <input type="text" placeholder="Votre message..." rows={3} />
        </label>
        
      </div>
      <button className="bg-primary text-light w-auto " type="submit">
          Envoyer
        </button>
    </form>
    </>
  );
}

export default ContactForm;