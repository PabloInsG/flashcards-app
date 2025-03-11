export default function Tarjeta({ anverso, reverso }) {
    return <details className="border border-gray-200 rounded bg-gray-100 px-25 py-5 mb-3 shadow text-center">
            <summary className="marker:hidden list-none">
                <p className="p-3 text-black">{anverso}</p>
                <span className="block border border-emerald-500 rounded px-3 text-center cursor-pointer text-emerald-500">Revelar</span>
            </summary>
            <p className="bg-white text-black p-3 mt-3">{reverso}</p>
        </details>
}