import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGavel, FaCode } from 'react-icons/fa'; 

export default function Home() {
  return (
    // Fundo da página com gradiente definido no globals.css
    <div className="min-h-screen flex items-start justify-center p-4 text-white font-sans bg-orange-50"> 
      
      {/* Cartão Central (Container) com Imagem de Fundo como Next/Image */}
      <div 
        className="relative shadow-2xl rounded-xl p-5 max-w-md w-full text-center border border-amber-500/30 overflow-hidden" 
      >
        {/* --- IMAGEM DE FUNDO RENDERIZADA COM NEXT/IMAGE --- */}
        <Image
          src="/backimg.png"
          alt="Background de Direito e Tecnologia"
          layout="fill" // Faz a imagem preencher a div pai
          objectFit="cover" // Garante que a imagem cubra a área sem distorcer
          quality={80} // Otimização de qualidade
          className="absolute inset-0 z-0" // Posiciona a imagem no fundo da div, abaixo do overlay
        />

        {/* Camada de Overlay (Definida no globals.css) */}
        <div className="card-background-overlay"></div>

        {/* --- CONTEÚDO DO CARTÃO (POSICIONADO ACIMA DO OVERLAY) --- */}
        <div className="relative z-10"> 
          
          {/* Imagem de Perfil: Reduzida para h-16 w-16 (64px) e borda fina (border-2) */}
          <div className="mb-4">
            <Image 
              src="/bio.png" 
              alt="Foto do Advogado Rodney Rinaldi" 
              className="mx-auto rounded-full h-14 w-14 mb-2 object-cover border-1 border-amber-500 transition duration-300 hover:scale-105" // Altura/Largura 64px e border-2
              width={64} 
              height={64} 
              priority
            />
            {/* Título Principal: Fonte menor (text-xl) e sem uppercase */}
            <h1 className="text-xl font-bold text-white tracking-wide mb-1"> 
              Rodney Rinaldi
            </h1>
            {/* Título Secundário: Fonte menor (text-sm) */}
            <p className="text-sm font-normal text-amber-500 italic">
               Advogado | Tech Lead
            </p>
          </div>
          
          {/* Bio: Fonte menor e em bold */}
          <p className="text-white mb-6 text-xs leading-relaxed font-bold">
             Curioso, autodidata e focado em resultados.
          </p>
          
          {/* Seção de Links */}
          <div className="space-y-3">
            
            {/* Botões com border-white/30 adicionada */}
            <Link 
              href="https://advogado.rodneyrinaldi.com.br" 
              className="link-button bg-amber-600 hover:bg-amber-700 text-gray-900 font-medium border border-white/30" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGavel className="mr-3 text-lg" /> 
              Direito e Advocacia
            </Link>
            
            <Link 
              href="https://dev.rodneyrinaldi.com.br" 
              className="link-button bg-cyan-600 hover:bg-cyan-700 text-white font-medium border border-white/30" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCode className="mr-3 text-lg" />
              Negócios e Tecnologia
            </Link>
            
            <Link 
              href="mailto:r2enviar@gmail.com" 
              className="link-button border-1 border-gray-600 bg-gray-700 hover:bg-gray-600 text-white font-medium border border-white/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="mr-3 text-lg" />
              Entrar em Contato
            </Link>
            
            <Link 
              href="https://linkedin.com/in/rodneyrinaldi" 
              className="link-button bg-blue-700 hover:bg-blue-800 text-white border border-white/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-3 text-lg" />
              Rodney Rinaldi
            </Link>
            
            <Link 
              href="https://instagram.com/rodneyrinaldi" 
              className="link-button bg-pink-600 hover:bg-pink-700 text-white border border-white/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="mr-3 text-lg" />
              Instagram
            </Link>

            <Link 
              href="https://facebook.com/rodneyrinaldi" 
              className="link-button bg-blue-900 hover:bg-blue-950 text-white border border-white/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="mr-3 text-lg" />
              Facebook
            </Link>
            
          </div>

          {/* Rodapé */}
          <footer className="mt-8 text-xs text-gray-500">
              © {new Date().getFullYear()} Rodney Rinaldi.
          </footer>
        </div>
      </div>
    </div>
  );
}