
// --- Tipagem dos integrantes ---
type Member = {
  name: string;
  avatar: string;
  bio: string;
};

// --- Card de integrante (avatar + textos) ---
function MemberCard({ name, avatar, bio }: Member) {
  return (
    <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-4 md:p-5">
      <div className="flex items-start gap-4">
        <img
          src={avatar}
          alt={name}
          className="h-40 w-40 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-slate-900">{name}</div>
          <p className="text-sm text-slate-600 mt-1">{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default function SobreNos() {
  // Mantenha estes dados aqui ou mova para um JSON/API depois
  const members: Member[] = [
    {
      name: "Lívia",
      avatar: "https://i.pinimg.com/736x/a4/37/77/a43777b4a591c0b620849292e904706f.jpg",
      bio: "Developer Full Stack | Apaixonada por tecnologia e inovação | Adoro aprender coisas novas e enfrentar desafios",
    },
    {
      name: "Mauri",
      avatar: "https://i.pinimg.com/736x/fa/47/9f/fa479f394fe5d2a269fe128fe3f3d422.jpg",
      bio: "Developer Full Stack | Apaixonado por tecnologia e inovação | Adoro esportes e jogos desafiadores",
    },
    {
      name: "Raul",
      avatar: "https://i.pinimg.com/736x/fe/ba/2e/feba2e510ab65127a3b4c0acf64e651b.jpg",
      bio: "Developer Full Stack | Apaixonado por tecnologia e inovação | Adoro aprender coisas novas e enfrentar desafios",
    },
    {
      name: "Sarah",
      avatar: "https://i.pinimg.com/736x/4b/b1/17/4bb1177662162751c2db1d0f88168c2d.jpg",
      bio: "Developer Full Stack | Apaixonada por tecnologia e inovação | Foco em UI/UX e acessibilidade, gosto de transformar ideias em experiências simples e bonitas",
    },
    {
      name: "Thatiane",
      avatar: "https://i.pinimg.com/736x/43/8f/40/438f40b7b26f0c1a3bc710d2b736e818.jpg",
      bio: "Developer Full Stack | Apaixonada por tecnologia e inovação | Curiosa por APIs e arquitetura de software, adoro colaborar e aprender em equipe",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="w-full bg-green-100">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Grupo 4
            </h1>
            <p className="mt-3 text-slate-600 text-lg">
              Pensando no usuário, entregando excelência
            </p>
          </div>
        </div>
      </section>

{/* BANNER / ILUSTRAÇÃO */}
<section className="w-full bg-emerald-50">
  <div className="container mx-auto px-6 py-10">
    <div
      className="
        relative mx-auto max-w-5xl
        rounded-2xl overflow-hidden     /* garante cantos perfeitos */
        ring-1 ring-emerald-200/70      /* borda suave */
        bg-emerald-50
      "
    >
      {/* Use uma razão responsiva para evitar corte agressivo */}
      <div className="aspect-[16/6] sm:aspect-[16/5] lg:aspect-[16/4]">
        <img
          src="https://i.pinimg.com/736x/73/b7/8b/73b78b02de45efe33428a8412e288e05.jpg"
          alt="Time do Grupo 4"
          className="w-full h-full object-cover"
          /* Move o foco um pouco para cima para aparecerem os rostos */
          style={{ objectPosition: "50% 20%" }}   // 50% horiz, 20% de topo
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>


      {/* INTEGRANTES */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-6 py-10">
          <h2 className="text-slate-800 text-lg font-semibold mb-5">
            Integrantes
          </h2>

          <div className="space-y-4">
            {members.map((m) => (
              <MemberCard
                key={m.name}
                name={m.name}
                avatar={m.avatar}
                bio={m.bio}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

