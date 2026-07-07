import type { Metadata } from "next";
import { LegalLayout } from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidade — EarMix",
  description: "Como o EarMix trata (ou melhor, não trata) os seus dados.",
};

export default function Privacidade() {
  return (
    <LegalLayout title="Política de Privacidade" updated="7 de julho de 2026">
      <p>
        O EarMix é um aplicativo que controla o mix de retorno (fone/in-ear) de uma mesa
        de som Behringer X32 ou Midas M32. Levamos a sério o seu direito à privacidade —
        e a forma mais honesta de respeitá-lo é <strong>não coletar seus dados</strong>.
      </p>

      <h2>O que NÃO coletamos</h2>
      <p>
        O EarMix não cria conta, não pede cadastro e não coleta dados pessoais. Não há
        rastreamento, analytics, anúncios ou perfis de uso. Nada que você faz no app é
        enviado para nós ou para terceiros.
      </p>

      <h2>Dados que ficam no seu aparelho</h2>
      <p>
        Algumas preferências são guardadas apenas <strong>localmente no seu aparelho</strong>,
        para o app ser mais prático:
      </p>
      <ul>
        <li>o IP e o último retorno (bus) da mesa que você usou, para reconectar rápido;</li>
        <li>seus presets de mix;</li>
        <li>uma marcação de acesso administrativo, quando aplicável.</li>
      </ul>
      <p>
        Esses dados nunca saem do dispositivo e são apagados ao desinstalar o app.
      </p>

      <h2>Rede local</h2>
      <p>
        Para funcionar, o EarMix se comunica com a sua mesa de som pela{" "}
        <strong>rede Wi-Fi local</strong>, usando o protocolo OSC sobre UDP (porta 10023).
        Por isso o app pede a permissão de <strong>Rede Local</strong> no iOS: ela é usada
        exclusivamente para encontrar e controlar a mesa na mesma rede. Essa comunicação
        acontece direto entre o seu aparelho e a mesa — não passa por nenhum servidor
        nosso, nem pela internet.
      </p>

      <h2>Permissões</h2>
      <ul>
        <li>
          <strong>Rede local</strong>: encontrar e controlar a mesa X32/M32 na sua rede.
        </li>
      </ul>
      <p>O EarMix não acessa câmera, microfone, localização, contatos ou fotos.</p>

      <h2>Crianças</h2>
      <p>
        O EarMix é uma ferramenta técnica para operar mesas de som e não é direcionado a
        crianças. Como não coletamos dados, não há coleta de informações de menores.
      </p>

      <h2>Alterações</h2>
      <p>
        Se esta política mudar, atualizaremos esta página e a data acima. Mudanças
        relevantes serão comunicadas pelo próprio app ou pela loja.
      </p>

      <h2>Contato</h2>
      <p>
        Dúvidas sobre privacidade? Fale com a gente em{" "}
        <a href="mailto:contato@earmix.com.br">contato@earmix.com.br</a>.
      </p>
    </LegalLayout>
  );
}
