import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGavel, FaCode } from 'react-icons/fa'; 

export default function Home() {
  return (
    // Fundo da página com gradiente definido no globals.css
    <div className="min-h-screen flex items-center justify-center p-4 text-white font-sans"> 
      
      {/* Cartão Central (Container) com Imagem de Fundo como Next/Image */}
      <div 
        className="relative shadow-2xl rounded-xl p-5 max-w-md w-full text-center border border-amber-500/30 overflow-hidden" 
        // REMOVEMOS O ATRIBUTO 'style' PARA A IMAGEM DE FUNDO AQUI
      >
        {/* --- NOVO: IMAGEM DE FUNDO RENDERIZADA COM NEXT/IMAGE --- */}
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
          
          {/* Imagem de Perfil: REDUZIDA AINDA MAIS para h-20 w-20 (80px) */}
          <div className="mb-4"> {/* Reduzindo mb-5 para mb-4 */}
            <Image 
              src="/bio.png" 
              alt="Foto do Advogado Rodney Rinaldi" 
              className="mx-auto rounded-full h-20 w-20 mb-3 object-cover border-4 border-amber-500 transition duration-300 hover:scale-105" // h-20 w-20
              width={80} // 80px
              height={80} // 80px
              priority
            />
            {/* Título Principal: Ajustes de fonte */}
            <h1 className="text-2xl font-bold text-white tracking-wider mb-1 uppercase"> 
              Rodney Rinaldi
            </h1>
            {/* Título Secundário: Ajustes de fonte */}
            <p className="text-lg font-normal text-amber-500 italic">
               Advogado | Tech Lead
            </p>
          </div>
          
          {/* Bio: Ajustes de fonte */}
          <p className="text-gray-400 mb-6 text-xs leading-relaxed font-light">
             Formação em tecnologia e direito. Especialista em gestão de projetos e negócios. 
             Curioso, autodidata e focado em resultados.
          </p>
          
          {/* Seção de Links (Espaçamento e padding otimizados para mobile) */}
          <div className="space-y-3">
            
            <Link 
              href="https://advogado.rodneyrinaldi.com.br" 
              className="link-button bg-amber-600 hover:bg-amber-700 text-gray-900 font-medium" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGavel className="mr-3 text-lg" /> 
              Direito e Advocacia
            </Link>
            
            <Link 
              href="https://dev.rodneyrinaldi.com.br" 
              className="link-button bg-cyan-600 hover:bg-cyan-700 text-white font-medium" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCode className="mr-3 text-lg" />
              Negócios e Tecnologia
            </Link>
            
            <Link 
              href="mailto:r2enviar@gmail.com" 
              className="link-button border border-gray-600 bg-gray-700 hover:bg-gray-600 text-white font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="mr-3 text-lg" />
              Entrar em Contato
            </Link>
            
            <Link 
              href="https://linkedin.com/in/rodneyrinaldi" 
              className="link-button bg-blue-700 hover:bg-blue-800 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-3 text-lg" />
              Rodney Rinaldi
            </Link>
            
            <Link 
              href="https://instagram.com/rodneyrinaldi" 
              className="link-button bg-pink-600 hover:bg-pink-700 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="mr-3 text-lg" />
              Instagram
            </Link>

            <Link 
              href="https://facebook.com/rodneyrinaldi" 
              className="link-button bg-blue-900 hover:bg-blue-950 text-white"
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