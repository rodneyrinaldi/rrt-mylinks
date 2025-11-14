import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-md w-full text-center">
        <Image src="/bio.png" alt="Foto do Advogado" className="mx-auto rounded-full h-32 w-32 mb-4" width={128} height={128} />
        <h1 className="text-3xl font-bold mb-6">rodney rinaldi</h1>
        <p className="text-gray-600 mb-6">
            Formação em tecnologia e direito, especializado em negócios e projetos. 
            Sólida experiência em gestão de pessoas e projetos. Curioso, autodidata e focado em resultados. 
            Sensível a causas altruístas.
        </p>
        <div className="space-y-2">
          <a href="https://advogado.rodneyrinaldi.com.br" className="block bg-blue-500 text-white rounded py-2 px-4 transition duration-200 ease-in-out transform hover:bg-blue-600 hover:scale-105">Advogado</a>
          <a href="mailto:r2enviar@gmail.com" className="block border border-blue-500 text-blue-500 rounded py-2 px-4 transition duration-200 ease-in-out transform hover:bg-blue-500 hover:text-white hover:scale-105">Entrar em Contato</a>
          <a href="https://linkedin.com/in/rodneyrinaldi" className="block bg-blue-500 text-white rounded py-2 px-4 transition duration-200 ease-in-out transform hover:bg-blue-600 hover:scale-105">LinkedIn</a>
          <a href="https://facebook.com/rodneyrinaldi" className="block bg-blue-500 text-white rounded py-2 px-4 transition duration-200 ease-in-out transform hover:bg-blue-600 hover:scale-105">Facebook</a>
          <a href="https://instagram.com/rodneyrinaldi" className="block bg-blue-500 text-white rounded py-2 px-4 transition duration-200 ease-in-out transform hover:bg-blue-600 hover:scale-105">Instagram</a>
          
        </div>
      </div>
    </div>
  );
}
