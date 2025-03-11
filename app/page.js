import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<>
  <div className="gap-3 flex flex-col items-center">
    <p className="text-center max-w-lg">Las tarjetas de memorizacion te permiten estudiar conceptos mediante un sistema de preguntas y respuestas.
    </p>
    <Link href="tarjetas" className="border border-white rounded px-3">Ver mis tarjetas</Link>
  </div>
  </>  
  );
}
