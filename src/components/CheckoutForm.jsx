import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router';
import { addTicket } from '../firebase/db';
import { Checkout } from './Checkout';


const CheckoutForm = () => {
    const { cart, getTotal, setCart } = useContext(CartContext);
    const [barra, setBarra] = useState(0);//barra de carga form
    const [campos, setCampos] = useState({});//valores de los  inputs
    const navigate = useNavigate();
    const precioTotal = getTotal();
    const getForm = async (e) => {
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
            const datosGuardar = { ...datosForm, productos: cart, total: precioTotal }
            setCampos(datosForm)
            const id = await addTicket(datosGuardar);
            setCart([]);
            navigate("/");
            Swal.fire({
                title: "La compra fue exitosa " + datosForm.nombre,
                text: "código de compra : " + id,
                icon: "success",
                draggable: true
            });
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
        <Checkout getForm={getForm} handleChange={handleChange} barra={barra} campos={campos} />
    )
}
export default CheckoutForm

