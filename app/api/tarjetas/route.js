import fs from "fs/promises"
import { NextResponse } from "next/server"

const FILE = "tarjetas.json"

async function leeDatos() {
    return fs.readFile(FILE, {encoding: "utf-8"})
        .then(JSON.parse).then(d => d.tarjetas)
}
async function escribeDatos(tarjetas) {
    return fs.writeFile(FILE, JSON.stringify({tarjetas}), {encoding: "utf-8"})
}

export async function GET() {
    const tarjetas = await leeDatos()
    return NextResponse.json(tarjetas)
}

export async function POST(request) {
    const [tarjetas, { anverso, reverso }] = await Promise.all([leeDatos(), request.json()])
    const nueva = { 
      id: tarjetas.length,
      anverso,
      reverso
    }
    await escribeDatos([...tarjetas, nueva])
    return NextResponse.json(nueva)
  }
