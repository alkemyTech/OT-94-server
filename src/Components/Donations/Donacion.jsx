import React, {useEffect} from 'react'

export default function Donacion ( {texto, preferenceId} ) {

    useEffect(() => {

          const script = document.createElement('script');

          script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
          script.setAttribute('data-preference-id', preferenceId);
          script.setAttribute('data-source', "button");

          const donate = document.getElementById("add-button");
          donate.appendChild(script);
    }, []);

    return (
        <div id="add-button">
            {<p>{texto ? texto : "Texto dinámico"}</p>}
        </div>
    )
}
