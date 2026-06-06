import {
  FileText,
  Brain,
  Users,
  MessageCircle,
  Code,
  Quote,
  Heart,
  ExternalLink,
  Mail,
  Phone,
} from "lucide-react";

export default function App() {
  const testimonials = [
    {
      name: "Diretor Escolar",
      role: "Gestão Pública",
      quote: "O LibrasCode resolve uma dor latente na nossa rede de ensino.",
    },
    {
      name: "Intérprete de Libras",
      role: "Educação Especial",
      quote:
        "A precisão técnica da ferramenta auxilia muito o meu trabalho diário.",
    },
    {
      name: "Mãe de Aluno",
      role: "Família",
      quote:
        "Finalmente meu filho tem autonomia para aprender como qualquer outro aluno.",
    },
    {
      name: "Estudante Surdo",
      role: "Usuário Final",
      quote:
        "Pela primeira vez a tecnologia fala a minha língua nas aulas de código.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Navbar */}
      <nav className="fixed w-full bg-white z-50 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 font-bold text-xl text-[#006dac]">
            <img src="/logo.1.jpeg" alt="LibrasCode" className="h-7 w-8" />{" "}
            <span>LibrasCode</span>
          </div>
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#sobre" className="hover:text-[#0cc0df]">
              Sobre
            </a>
            <a href="#funcionalidades" className="hover:text-[#0cc0df]">
              Funcionalidades
            </a>
            <a href="#contato" className="hover:text-[#0cc0df]">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-[#006dac]">LibrasCode</h1>
            <h2 className="text-2xl text-slate-600 font-medium">
              Inovação e Acessibilidade no Ensino de Programação
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Transformamos barreiras de comunicação em autonomia. Uma
              plataforma inteligente que traduz conceitos de programação para
              Libras em tempo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://libras-code-frontend-j2dy.vercel.app"
                className="bg-[#0cc0df] hover:bg-[#006dac] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all shadow-lg"
              >
                <ExternalLink className="mr-2" /> Acessar LibrasCode
              </a>
              <a
                href="https://drive.google.com/file/d/1MnNe-IKhESQFHwpnvSG05bG6gJb3GMOi/view?usp=sharing"
                className="border-2 border-[#0cc0df] text-[#0cc0df] hover:bg-[#0cc0df] hover:text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all"
              >
                <FileText className="mr-2" /> Plano de Negócios
              </a>
            </div>
          </div>
          <div className="bg-[#006dac] p-8 rounded-2xl shadow-2xl text-white">
            <p className="text-xl font-bold mb-4">
              O futuro da educação inclusiva começa aqui.
            </p>
            <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center">
              <img
                src="/portal.do.aluno.jpeg"
                alt="LibrasCode"
                className="h-full w-full object-cover"
              ></img>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#006dac] mb-16">
            Funcionalidades
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "IA de Tradução",
                desc: "para tradução semântica em tempo real.",
              },
              {
                icon: Code,
                title: "Lógica em Libras",
                desc: "Conceitos de programação na estrutura SOV correta.",
              },
              {
                icon: Users,
                title: "Foco no Aluno",
                desc: "Interface intuitiva otimizada para computadores escolares.",
              },
            ].map((feat, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#0cc0df] hover:scale-105 transition-transform"
              >
                <feat.icon className="text-[#0cc0df] h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                <p className="text-slate-600">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section id="sobre" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#006dac] mb-16">
            O que dizem sobre o LibrasCode
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-blue-50 p-6 rounded-xl border border-blue-100"
              >
                <Quote className="text-[#0cc0df] mb-4" />
                <p className="italic text-slate-600 mb-4">"{t.quote}"</p>
                <h4 className="font-bold text-[#006dac]">{t.name}</h4>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="py-20 bg-gradient-to-br from-[#006dac] to-[#0cc0df] text-white"
      >
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Vamos conversar?
          </h2>
          <p className="text-lg text-blue-50 mb-12">
            Entre em contato com a equipe do LibrasCode para parcerias,
            implementações piloto ou mais informações técnicas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card Email */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <Mail className="h-8 w-8 mx-auto mb-4 text-[#0cc0df]" />
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-blue-50">librascode@gmail.com</p>
            </div>

            {/* Card Telefone/WhatsApp */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <Phone className="h-8 w-8 mx-auto mb-4 text-[#0cc0df]" />
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-blue-50">(89) 99973-1687</p>
            </div>
          </div>

          <div className="mt-12">
            <button className="bg-white text-[#006dac] px-8 py-4 rounded-xl font-bold flex items-center justify-center mx-auto hover:bg-gray-100 transition-all shadow-lg">
              <MessageCircle className="mr-2" />
              Enviar mensagem no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer com Equipe */}
      <footer id="contato" className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Conectando Saberes</h3>
            <p className="text-slate-400">
              Transformando a educação tecnológica através da inclusão.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[#0cc0df] mb-4">Equipe LibrasCode</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              <p>Fantinny Niraj</p> <p>Gessica Ferreira</p>
              <p>Rafael Alex</p> <p>Weverson Nertan</p>
              <p>Mikeias Darlis</p>{" "}
              <p className="font-bold text-white mt-2">
                Prof. Orientador: Vitor Neto
              </p>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-slate-800 pt-8">
          <p>
            © 2026 LibrasCode. Feito com{" "}
            <Heart className="inline h-4 w-4 text-red-500" /> para a educação.
          </p>
        </div>
      </footer>
    </div>
  );
}
