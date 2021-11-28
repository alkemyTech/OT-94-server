import React, {useEffect} from 'react'
import './Donacion.css'

export default function Donacion ( {texto, preferenceId} ) {

    const thanks = "Te estaremos enormemente agradecidos por tu contribución! Te garantizamos que tu donación estará destinada a mejorar la vida de muchos chicos/as."

    useEffect(() => {

        const script = document.createElement('script');

        script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
        script.setAttribute('data-preference-id', preferenceId);
        script.setAttribute('data-source', "button");
        
        const donate = document.getElementById("add-button");
        donate.appendChild(script);

    }, []);

    return (
        <div id="add-button" className="button-container">
            {<p className="agradecimiento">{texto ? texto : thanks}</p>}
        </div>
    )
}
