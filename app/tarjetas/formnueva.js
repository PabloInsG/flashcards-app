"use client";

import { useRouter } from "next/navigation";
import { useState } from "react"

const API_URL = "http://localhost:3000/"

export default function FormNueva() {

    const [anverso, setAnverso] = useState("")
    const [reverso, setReverso] = useState("")
    const router = useRouter()

    const handleChange = set => event => set(event.target.value)

    const handleSumbit = async (event) => {
        event.preventDefault()
        await fetch(API_URL + "/api/tarjetas", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({anverso, reverso})
        })
        router.refresh()
        setAnverso("")
        setReverso("")
    }

    return <form onSubmit={handleSumbit} className="border border-gray-200 rounded shadow w-[325px] bg-gray-200 px-2 py-5 text-center text-black flex flex-col">
        <p className="font-bold">Nueva tarjeta</p>
        <textarea placeholder="Anverso" value={anverso} onChange={handleChange(setAnverso)} className="bg-white p-3 mt-3"><br />
        </textarea>
        <textarea placeholder="Reverso" value={reverso} onChange={handleChange(setReverso)} className="w-4/4 p-3 mt-3 bg-white"><br />
        </textarea>
        <button type="sumbit" className="border border-black rounded px-3 mt-3">Añadir</button>
    </form>
}