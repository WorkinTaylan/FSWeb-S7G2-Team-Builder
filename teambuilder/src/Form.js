import React, { useState } from "react";

export default function FormOlustur(props){

    const [form, setForm]=useState(null);

    return(
    <div className="FormPart" > 
    <form>
    <fieldset>
      <legend>Yeni Takım Üyesi:</legend> 
      <label htmlFor='İsim'>İsim</label>
      <input type="text" placeholder='İsim'/>
      <label htmlFor='Soyİsim'>Soyisim</label>
      <input type="text" placeholder='Soyisim'/>
      <label htmlFor='role'>Role</label>
      <input type="text" placeholder='Role'/>
      <button type="button">
        Üye Ekle
      </button>
    </fieldset>
    </form>
    </div>  
    )
}