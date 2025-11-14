import Image from 'next/image';
import Link from 'next/link';
// Importamos os ícones necessários
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGavel, FaCode } from 'react-icons/fa'; 

export default function Home() {
  return (
    // Fundo Dark Mode (Cinza Escuro) e Tipografia Clara
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-white font-sans">
      
      {/* Cartão Central (Container) com Estilo Elegante */}
      <div className="bg-gray-800 shadow-2xl rounded-xl p-6 sm:p-10 max-w-md w-full text-center border border-amber-500/30">
        
        {/* Imagem de Perfil com Borda de Destaque */}
        <div className="mb-6">
          <Image 
            src="/bio.png" 
            alt="Foto do Advogado Rodney Rinaldi" 
            className="mx-auto rounded-full h-32 w-32 mb-4 object-cover border-4 border-amber-500 transition duration-300 hover:scale-105" 
            width={128} 
            height={128} 
            priority
          />
          {/* Título e Destaque Profissional */}
          <h1 className="text-3xl font-extrabold text-white tracking-wider mb-1">
            Rodney Rinaldi
          </h1>
          <p className="text-xl font-normal text-amber-500 italic">
             Advogado | Tech Lead
          </p>
        </div>
        
        {/* Bio Concisa e Profissional */}
        <p className="text-gray-400 mb-8 text-sm leading-relaxed">
           Formação em tecnologia e direito. Especialista em gestão de projetos e negócios. 
           Curioso, autodidata e focado em resultados.
        </p>
        
        {/* Seção de Links Modernos com Ícones e Cores de Identificação */}
        <div className="space-y-4">
          
          {/* Link 1: Advogado (Direito e Advocacia) - Destaque Principal */}
          <Link 
            href="https://advogado.rodneyrinaldi.com.br" 
            className="link-button bg-amber-600 hover:bg-amber-700 text-gray-900 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGavel className="mr-3" />
            Direito e Advocacia
          </Link>
          
          {/* Link 2: Site de Tecnologia (Negócios e Tecnologia) - Destaque Secundário */}
          <Link 
            href="https://dev.rodneyrinaldi.com.br" 
            className="link-button bg-cyan-600 hover:bg-cyan-700 text-white font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode className="mr-3" />
            Negócios e Tecnologia
          </Link>
          
          {/* Link 3: Contato (E-mail) - Título simplificado */}
          <Link 
            href="mailto:r2enviar@gmail.com" 
            className="link-button border border-gray-600 bg-gray-700 hover:bg-gray-600 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="mr-3" />
            Entrar em Contato
          </Link>
          
          {/* Link 4: LinkedIn - Título simplificado */}
          <Link 
            href="https://linkedin.com/in/rodneyrinaldi" 
            className="link-button bg-blue-700 hover:bg-blue-800 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="mr-3" />
            Rodney Rinaldi
          </Link>
          
          {/* Link 5: Instagram */}
          <Link 
            href="https://instagram.com/rodneyrinaldi" 
            className="link-button bg-pink-600 hover:bg-pink-700 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="mr-3" />
            Instagram
          </Link>

          {/* Link 6: Facebook */}
          <Link 
            href="https://facebook.com/rodneyrinaldi" 
            className="link-button bg-blue-900 hover:bg-blue-950 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="mr-3" />
            Facebook
          </Link>
          
        </div>

        {/* Rodapé */}
        <footer className="mt-10 text-xs text-gray-500">
            © {new Date().getFullYear()} Rodney Rinaldi.
        </footer>
      </div>
    </div>
  );
}