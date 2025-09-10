import React from "react";

type Testimonial = {
    quote: string;
    avatar: string;
    title: string;
    description: string;
};

function TestimonialCard({ quote, avatar, title, description }: Testimonial) {
    return (
        <div className="rounded-xl bg-white shadow-sm border border-slate-200 p-5">
            <p className="text-slate-700 italic mb-4">“{quote}”</p>

            <div className="flex items-center gap-3">
                <img
                    src={avatar}
                    alt={title}
                    className="h-8 w-8 rounded-full object-cover"
                />
                <div className="text-sm">
                    <div className="font-medium text-slate-800">{title}</div>
                    <div className="text-slate-500">{description}</div>
                </div>
            </div>
        </div>
    );
}

function Home() {

    const testimonials: Testimonial[] = [
        {
            quote: "O App do DevsCarona é ótimo! Fácil de usar e está facilitando muito a minha vida!",
            avatar: "https://i.pravatar.cc/100?img=1",
            title: "Jesus Pedro da Silva",
            description: "Postado à 3 meses",
        },
{
  quote: "Motoristas educados e viagens muito tranquilas. Recomendo demais o DevsCarona!",
  avatar: "https://i.pravatar.cc/100?img=3",
  title: "Camila Rodrigues",
  description: "Postado à 2 semanas",
},
{
  quote: "Economizei bastante com caronas compartilhadas. O aplicativo é intuitivo e rápido.",
  avatar: "https://i.pravatar.cc/100?img=4",
  title: "Bruno Carvalho",
  description: "Postado à 1 mês",
},
{
  quote: "Adorei a interface limpa e a segurança que o app oferece. Está de parabéns!",
  avatar: "https://i.pravatar.cc/100?img=5",
  title: "Larissa Mendes",
  description: "Postado à 5 dias",
},
{
  quote: "Sempre encontro caronas para o trabalho, e os motoristas são super confiáveis!",
  avatar: "https://i.pravatar.cc/100?img=6",
  title: "Felipe Araújo",
  description: "Postado à 4 meses",
},
{
  quote: "A experiência de usar o DevsCarona tem sido incrível. Melhor app de caronas que já usei.",
  avatar: "https://i.pravatar.cc/100?img=7",
  title: "Patrícia Oliveira",
  description: "Postado à 2 meses",
},
    ];



    return (
        <>
            {/* // HERO (faixa cinza claro) */}
            <section className="w-full bg-white shadow">
                <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Esquerda: Título + subtítulo */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900">
                            DevsCarona
                        </h1>
                        <p className="text-xl text-slate-500">
                            Com você em todos os momentos
                        </p>
                    </div>

                    {/* Direita: Ilustração */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="https://i.pinimg.com/736x/90/a3/30/90a330c42deae84dbf9a067325ceecca.jpg"
                            alt="Ilustração carro no celular"
                            className="w-[360px] md:w-[420px] lg:w-[460px] rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* AVALIAÇÕES (faixa verde claro) */}
            <section className="w-full bg-emerald-50">
                <div className="container mx-auto px-6 py-10">
                    <h2 className="text-slate-800 text-lg font-semibold mb-6">
                        Avaliações
                    </h2>

                    {/* Grid de cards (3 colunas no desktop, 2 no tablet, 1 no mobile) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((t, idx) => (
                            <TestimonialCard
                                key={idx}
                                quote={t.quote}
                                avatar={t.avatar}
                                title={t.title}
                                description={t.description}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
