function Produto() {
  const features = [
    {
      title: "Solicite viagens rapidamente",
      description:
        "Escolha seu destino, veja motoristas próximos e peça uma viagem em segundos.",
      icon: "https://img.icons8.com/color/48/000000/car.png",
    },
    {
      title: "Localização precisa",
      description:
        "O app identifica sua localização automaticamente para facilitar sua viagem.",
      icon: "https://img.icons8.com/color/48/000000/marker.png",
    },
    {
      title: "Prático e fácil de usar",
      description:
        "Interface limpa e intuitiva, você encontra viagens com apenas alguns cliques.",
      icon: "https://img.icons8.com/?size=100&id=cfNAjvEnY04M&format=png&color=000000",
    },
    {
      title: "Motoristas verificados",
      description: "Viaje com segurança, todos os motoristas passam por verificação.",
      icon: "https://img.icons8.com/color/48/000000/driver.png",
    },
    {
      title: "Pagamento integrado",
      description: "Pague diretamente pelo app de forma rápida e segura.",
      icon: "https://img.icons8.com/color/48/000000/wallet.png",
    },
  ];

  return (
    <div className="min-h-[80vh]">
      {/* HERO */}
      <section className="bg-white text-slate-700 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold">DevCaronas</h1>
            <p className="text-xl">
              O aplicativo de viagens mais fácil, prático e seguro. Com você em todos os momentos!
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded mt-4 transition-colors">
              Baixar App
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://i.pinimg.com/736x/90/a3/30/90a330c42deae84dbf9a067325ceecca.jpg"
              alt="App DevCaronas"
              className="rounded-lg w-[300px] md:w-[400px]"
            />
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">O que o DevCaronas faz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <img src={f.icon} alt={f.title} className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Produto;