import React from 'react'

export const Checkout = ({getForm,handleChange,campos,barra}) => {
  return (
    <div className='form-container'>
    <h1>Completar los siguientes datos</h1>
    <form className='form' action="" onSubmit={(e) => getForm(e)}>
        <div className='barra-container'>
            <div className="barra" style={{ width: `${barra}%`, background: `${barra == 100 ? "rgb(10, 142, 10)" : "rgb(181, 10, 10)"}` }}></div>
        </div>
        <label htmlFor="nombre">Nombre y Apellido</label>
        <input onChange={handleChange} placeholder='Ricardo Gomez' id='nombre' type="text" />
        {campos.nombre != undefined && ((campos.nombre == "" || campos.nombre.length < 5) && <div style={{ color: "#ec7063" }}>ingrese un nombre válido</div>)}

        <label htmlFor="email">Correo electrónico</label>
        <input onChange={handleChange} placeholder='ejemplo@gmail.com' id='email' type="text" />
        {campos.email != undefined && ((campos.email == "" || campos.email.length < 5 || !campos.email.includes("@")) && <div style={{ color: "#ec7063" }}>ingrese un mail válido</div>)}


        <label htmlFor="telefono">Teléfono</label>
        <input onChange={handleChange} placeholder='+54113432323' type="text" id='telefono' />
        {campos.telefono != undefined && ((campos.telefono == "" || campos.telefono.length < 5 || (isNaN(parseInt(campos.telefono))))
            && <div style={{ color: "#ec7063" }}>ingrese un teléfono válido</div>)}

        <label htmlFor="fecha">Fecha de nacimiento</label>
        <input onChange={handleChange} id='fecha' type="date" />
        {campos.nacimiento == "" && <div style={{ color: "#ec7063" }}>ingrese una fecha válido</div>}

        <input type="submit" value={"Finalizar compra"} />
    </form>
</div>
  )
}
