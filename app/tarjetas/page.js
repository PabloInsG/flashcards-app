import FormNueva from "./formnueva"
import Tarjeta from "./tarjeta"

const API_URL = "http://localhost:3000/"

export default async function Page() {
   const tarjetas = await fetch(API_URL + "/api/tarjetas", {cache: "no-store"}).then(r => r.json())

   return (
    <div className="flex w-full gap-3 items-start">
        <FormNueva />
        <div className="grid grid-cols-5 gap-2">
            {tarjetas.map((t, index) => 
                <Tarjeta key={index} {...t}></Tarjeta>
            )}
        </div>
    </div>
   )
}