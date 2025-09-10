import { GithubLogoIcon} from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="flex justify-center bg-gradient-to-b from-[#2A7B9B] via-[#57c785] to-[#a7a7a7] text-black">
      <div className="container flex flex-col items-center py-4">
        <p className="text-xl font-bold">Criado e Mantido pelo Grupo 4</p>
        <p className="text-lg">Veja mais dos nossos projetos</p>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/Grupo4-JS08" target="_blank" rel="Logotipo do GitHub">
            <GithubLogoIcon size={32} weight="bold" />
            </a>
            </div>
      </div>
    </footer>
    );
}

export default Footer;
