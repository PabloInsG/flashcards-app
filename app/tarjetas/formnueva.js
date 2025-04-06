"use client";

import { useRouter } from "next/navigation";
import { useState } from "react"


export default function FormNueva({onSend}) {

    const [anverso, setAnverso] = useState("")
    const [reverso, setReverso] = useState("")
    const router = useRouter()

    const numArgs = (...args) => console.log(args.length)

    const handleChange = set => event => set(event.target.value)

    const handleSumbit = async (event) => {
        event.preventDefault()
        onSend({ anverso, reverso })
        router.refresh()
        setAnverso("")
        setReverso("")
    }

    numArgs(0, 0, 0)

    return <form onSubmit={handleSumbit} className="border border-gray-200 rounded shadow w-[325px] bg-gray-200 px-2 py-5 text-center text-black flex flex-col">
        <p className="font-bold">Nueva tarjeta</p>
        <textarea placeholder="Anverso" onChange={handleChange(setAnverso)} className="bg-white p-3 mt-3"><br />
        </textarea>
        <textarea placeholder="Reverso" onChange={handleChange(setReverso)} className="w-4/4 p-3 mt-3 bg-white"><br />
        </textarea>
        <button type="sumbit" className="border border-black rounded px-3 mt-3">Añadir</button>
    </form>
}