import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router';
import { addTicket } from '../firebase/db';


const CheckoutForm = () => {
    const { cart, getTotal,setCart } = useContext(CartContext);

    const [barra, setBarra] = useState(0);//barra de carga form
    const [input, setInput] = useState({})
    const [campos, setCampos] = useState({});//valores de los  inputs
    const navigate = useNavigate();

    const precioTotal = getTotal();


    const getForm = (e) => {
        e.preventDefault();
        const valor = e.target
        const datosForm = {
            nombre: valor.nombre.value,
            email: valor.email.value,
            telefono: valor.telefono.value,
            nacimiento: valor.fecha.value,

        }

        const verificado = verificarForm(datosForm);


        if (verificado) {
            setCampos(datosForm);
        }
        else {
            const datosGuardar = { ...datosForm, productos: cart, total: precioTotal}
            Swal.fire({
                title: "La compra fue exitosa " + datosForm.nombre,
                text: "código de compra : 1234",
                icon: "success",
                draggable: true
            });            
            setCampos(datosForm)
            addTicket(datosGuardar);
            setCart([]);
            navigate("/");
        }



    }




    const handleChange = (e) => {
        const propiedad = e.target.id;
        setCampos((prev) => {
            const form = { ...prev, [propiedad]: e.target.value }
            const formCount = Object.values(form).filter(Boolean).length;
            setBarra(formCount * 25);
            return form
        });
    }

    function verificarForm(datosForm) {
        let condicion = false
        const telefono = parseInt(datosForm.telefono);
        for (let prop in datosForm) {
            if (datosForm[prop] === "" || datosForm[prop].length < 5) {
                condicion = true
            }

        }
        if (isNaN(telefono)) condicion = true;
        if (!datosForm.email.includes("@")) condicion = true
        return condicion
    }


    return (
        <div className='form-container'>
            <h1>Completar los siguientes datos</h1>
            <form className='form' action="" onSubmit={(e) => getForm(e)}>
                <div className='barra-container'>
                    <div className="barra" style={{ width: `${barra}%`, background: `${barra == 100 ? "rgb(10, 142, 10)" : "rgb(181, 10, 10)"}` }}></div>
                </div>
                <label htmlFor="">Nombre y Apellido</label>
                <input onChange={handleChange} placeholder='Ricardo Gomez' id='nombre' type="text" />
                {campos.nombre != undefined ? (campos.nombre == "" || campos.nombre.length < 5 ? <div style={{ color: "#ec7063" }}>ingrese un nombre</div> : <></>) : <></>}

                <label htmlFor="">Correo electrónico</label>
                <input onChange={handleChange} placeholder='ejemplo@gmail.com' id='email' type="text" />
                {campos.email != undefined ? (campos.email == "" || campos.email.length < 5 || !campos.email.includes("@") ? <div style={{ color: "#ec7063" }}>ingrese un mail valido</div> : <></>) : <></>}


                <label htmlFor="">Teléfono</label>
                <input onChange={handleChange} placeholder='+54113432323' type="text" id='telefono' />
                {campos.telefono != undefined ? (campos.telefono == "" || campos.telefono.length < 5 || (isNaN(parseInt(campos.telefono)))
                    ? <div style={{ color: "#ec7063" }}>ingrese un telefono valido</div> : <></>) : <></>}

                <label htmlFor="">Fecha de nacimiento</label>
                <input onChange={handleChange} id='fecha' type="date" />
                {campos.nacimiento == "" ? <div style={{ color: "#ec7063" }}>ingrese una fecha valido</div> : <></>}

                <input type="submit" value={"Finalizar compra"} />
            </form>
        </div>
    )
}

export default CheckoutForm

