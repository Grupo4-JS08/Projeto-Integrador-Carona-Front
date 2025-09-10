
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
      bio: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    },
    {
      name: "Mauri",
      avatar: "https://i.pinimg.com/736x/fa/47/9f/fa479f394fe5d2a269fe128fe3f3d422.jpg",
      bio: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    },
    {
      name: "Raul",
      avatar: "https://i.pinimg.com/736x/fe/ba/2e/feba2e510ab65127a3b4c0acf64e651b.jpg",
      bio: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    },
    {
      name: "Sarah",
      avatar: "https://i.pinimg.com/736x/4b/b1/17/4bb1177662162751c2db1d0f88168c2d.jpg",
      bio: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    },
    {
      name: "Thatiane",
      avatar: "https://i.pinimg.com/736x/43/8f/40/438f40b7b26f0c1a3bc710d2b736e818.jpg",
      bio: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
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
          <div className="rounded-2xl border-2 border-emerald-100 bg-emerald-100/60 h-56 md:h-72 lg:h-80 flex items-center justify-center">
            {/* Placeholder de imagem (troque pelo seu banner real) */}
            <div className="text-emerald-400 text-sm md:text-base">
              <span className="inline-block rounded-xl border border-emerald-200 px-4 py-2">
                Área para a sua imagem/banner
              </span>
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

