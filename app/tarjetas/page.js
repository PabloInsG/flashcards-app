"use client";

import { useState } from "react"
import FormNueva from "./formnueva"
import Tarjeta from "./tarjeta"


export default async function Page() {
   const [tarjetas, setTarjetas]  = useState([
    { id: 0, anverso: "Next.js", reverso: "Framework de React" }
   ])

   return (
    <div className="flex w-full gap-3 items-start">
        <FormNueva onSend={nueva => setTarjetas([...tarjetas, {id: tarjetas.length, ...nueva}])} />
        <div className="grid grid-cols-5 gap-2">
            {tarjetas.map((t, index) => 
                <Tarjeta key={index} {...t}></Tarjeta>
            )}
        </div>
    </div>
   )
}