import { SyntheticEvent, useRef } from "react";
import { ContactStructure } from "../../models/contact";

export function Contact() {
  const userData: ContactStructure = {} as ContactStructure;
  // const formContact = useRef<HTMLFormElement>(null);
  const formContactRef = useRef<HTMLFormElement>(null);
  console.log(formContactRef);
  const formContact = formContactRef.current as HTMLFormElement;
  console.log(formContact);
  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    userData.username = (formContact[0] as HTMLInputElement).value;
    userData.email = (formContact[1] as HTMLInputElement).value;
    console.log("enviando", userData);
  };
  return (
    <form action="" onSubmit={handleSubmit} ref={formContactRef}>
      <div className="formGroup">
        <label htmlFor="username">User name</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
