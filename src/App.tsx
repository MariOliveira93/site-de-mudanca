import React, { useState } from 'react';
import { Truck, Users, Shield, Clock, Phone, Mail, MapPin, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Obrigado! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const faqData = [
    {
      question: "Quanto tempo de antecedência devo contratar os serviços?",
      answer: "Recomendamos contratar nossos serviços com pelo menos 15 dias de antecedência para garantir disponibilidade na data desejada. Para mudanças em alta temporada (dezembro/janeiro), sugerimos 30 dias."
    },
    {
      question: "Vocês fazem mudanças para outras cidades e estados?",
      answer: "Sim! Realizamos mudanças intermunicipais e interestaduais em todo o Brasil. Temos uma frota especializada para longas distâncias e parcerias estratégicas em diversas cidades."
    },
    {
      question: "Como é calculado o valor da mudança?",
      answer: "O valor é calculado com base em diversos fatores: quantidade de itens, distância, tipo de imóvel, necessidade de elevador ou escadas, e serviços adicionais. Oferecemos orçamento gratuito e sem compromisso."
    },
    {
      question: "Vocês oferecem seguro para os móveis?",
      answer: "Sim, todos os nossos serviços incluem seguro básico. Também oferecemos opções de seguro premium com cobertura ampliada para itens de maior valor."
    },
    {
      question: "É possível embalar os itens no mesmo dia da mudança?",
      answer: "Embora seja possível, recomendamos que a embalagem seja feita com antecedência para garantir maior cuidado e organização. Oferecemos serviço de embalagem profissional nos dias anteriores à mudança."
    },
    {
      question: "Vocês desmontam e montam móveis?",
      answer: "Sim! Nossa equipe é treinada para desmontagem e montagem de móveis. Trazemos todas as ferramentas necessárias e garantimos que tudo seja remontado corretamente no destino."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">MudaFácil</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors">
                  Início
                </button>
                <button onClick={() => scrollToSection('sobre')} className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('servicos')} className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors">
                  Serviços
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors">
                  FAQ
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors">
                  Contato
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sua Mudança com
              <span className="text-orange-400"> Segurança</span> e
              <span className="text-orange-400"> Qualidade</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Há mais de 15 anos cuidando da sua mudança com profissionalismo, 
              rapidez e o melhor custo-benefício da região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Solicitar Orçamento
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Conhecer Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre a MudaFácil</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma empresa familiar que cresceu junto com a confiança dos nossos clientes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Nossa História</h3>
              <p className="text-gray-600 mb-4">
                Fundada em 2008, a MudaFácil nasceu do sonho de oferecer um serviço de mudanças 
                que combinasse qualidade, confiança e preços justos. Começamos com uma pequena 
                equipe e um caminhão, mas sempre com o compromisso de tratar os pertences dos 
                nossos clientes como se fossem nossos.
              </p>
              <p className="text-gray-600 mb-4">
                Ao longo dos anos, expandimos nossa frota, modernizamos nossos equipamentos e 
                especializamos nossa equipe, sempre mantendo os valores familiares que nos 
                definem: honestidade, cuidado e dedicação.
              </p>
              <p className="text-gray-600">
                Hoje, somos uma das empresas de mudança mais confiáveis da região, com mais 
                de 5.000 mudanças realizadas e uma taxa de satisfação de 98%.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Por que nos escolher?</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-800">Segurança Garantida</h5>
                    <p className="text-gray-600 text-sm">Seguro total para seus pertences e equipe qualificada</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-800">Equipe Especializada</h5>
                    <p className="text-gray-600 text-sm">Profissionais treinados e experientes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-800">Pontualidade</h5>
                    <p className="text-gray-600 text-sm">Cumprimos prazos e horários acordados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Truck className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-800">Frota Moderna</h5>
                    <p className="text-gray-600 text-sm">Veículos novos e equipamentos de qualidade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas para todos os tipos de mudança
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mudanças Residenciais</h3>
              <p className="text-gray-600 mb-4">
                Mudanças completas para residências, apartamentos e casas. Cuidamos de cada detalhe 
                para que sua mudança seja tranquila e segura.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Embalagem profissional</li>
                <li>• Desmontagem e montagem</li>
                <li>• Transporte seguro</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mudanças Comerciais</h3>
              <p className="text-gray-600 mb-4">
                Relocação de escritórios, lojas e empresas. Planejamento estratégico para minimizar 
                o tempo de parada do seu negócio.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Planejamento detalhado</li>
                <li>• Mudanças noturnas/finais de semana</li>
                <li>• Cuidado com equipamentos</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mudanças Interestaduais</h3>
              <p className="text-gray-600 mb-4">
                Mudanças para outras cidades e estados com toda a segurança e rastreamento 
                em tempo real do seu carregamento.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Rastreamento GPS</li>
                <li>• Documentação completa</li>
                <li>• Seguro total da carga</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Guarda Móveis</h3>
              <p className="text-gray-600 mb-4">
                Armazenamento temporário em galpão próprio com segurança 24h e controle 
                de umidade para preservar seus móveis.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Galpão climatizado</li>
                <li>• Segurança 24 horas</li>
                <li>• Flexibilidade de prazos</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Içamento</h3>
              <p className="text-gray-600 mb-4">
                Serviço especializado para içamento de móveis e eletrodomésticos por 
                janelas e varandas quando não há acesso pelas escadas.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Equipamentos profissionais</li>
                <li>• Técnicos especializados</li>
                <li>• Máxima segurança</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Embalagens</h3>
              <p className="text-gray-600 mb-4">
                Material de embalagem de qualidade e serviço profissional de empacotamento 
                para garantir a proteção total dos seus pertences.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Materiais de qualidade</li>
                <li>• Técnicas profissionais</li>
                <li>• Identificação organizada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos serviços de mudança
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solicite seu orçamento gratuito e sem compromisso
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Fale Conosco</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telefones</h4>
                    <p className="text-gray-600">(11) 3456-7890</p>
                    <p className="text-gray-600">(11) 99876-5432</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">E-mail</h4>
                    <p className="text-gray-600">contato@mudafacil.com.br</p>
                    <p className="text-gray-600">orcamentos@mudafacil.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Endereço</h4>
                    <p className="text-gray-600">Rua das Mudanças, 123</p>
                    <p className="text-gray-600">Centro - São Paulo/SP</p>
                    <p className="text-gray-600">CEP: 01234-567</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Horário de Funcionamento</h4>
                <p className="text-gray-600 text-sm">Segunda a Sexta: 7:00 às 18:00</p>
                <p className="text-gray-600 text-sm">Sábados: 7:00 às 12:00</p>
                <p className="text-gray-600 text-sm">Domingos: Plantão 24h</p>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicite seu Orçamento</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Serviço
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione o serviço</option>
                    <option value="residencial">Mudança Residencial</option>
                    <option value="comercial">Mudança Comercial</option>
                    <option value="interestadual">Mudança Interestadual</option>
                    <option value="guarda-moveis">Guarda Móveis</option>
                    <option value="icamento">Içamento</option>
                    <option value="embalagem">Embalagens</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                    placeholder="Descreva detalhes da sua mudança: origem, destino, quantidade de cômodos, data desejada, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors transform hover:scale-105"
                >
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Truck className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold">MudaFácil</span>
              </div>
              <p className="text-gray-300 mb-4">
                Sua mudança com segurança e qualidade há mais de 15 anos.
              </p>
              <p className="text-gray-400 text-sm">
                © 2024 MudaFácil. Todos os direitos reservados.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Mudanças Residenciais</li>
                <li>Mudanças Comerciais</li>
                <li>Mudanças Interestaduais</li>
                <li>Guarda Móveis</li>
                <li>Içamento</li>
                <li>Embalagens</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <p>(11) 3456-7890</p>
                <p>(11) 99876-5432</p>
                <p>contato@mudafacil.com.br</p>
                <p>Rua das Mudanças, 123<br />Centro - São Paulo/SP</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;