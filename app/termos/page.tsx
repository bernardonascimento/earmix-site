import type { Metadata } from "next";
import { LegalLayout } from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Termos de Uso — EarMix",
  description: "As regras de uso do aplicativo EarMix.",
};

export default function Termos() {
  return (
    <LegalLayout title="Termos de Uso" updated="7 de julho de 2026">
      <p>
        Ao usar o EarMix, você concorda com estes termos. Eles existem pra deixar claro o
        que o app faz e quais são as responsabilidades de cada lado. Leia com atenção.
      </p>

      <h2>O que o EarMix é</h2>
      <p>
        O EarMix é um controle remoto para o mix de retorno de mesas de som Behringer X32
        e Midas M32, operando pela rede local. Ele não é um produto oficial da Behringer,
        da Midas ou da Music Tribe, e não é afiliado a essas marcas — os nomes são citados
        apenas para indicar compatibilidade.
      </p>

      <h2>Uso responsável</h2>
      <p>
        O EarMix envia comandos reais para a sua mesa de som. Você é responsável pelo uso:
      </p>
      <ul>
        <li>use em ambiente e momento adequados (ensaio, passagem de som, culto, show);</li>
        <li>
          o modo administrador dá acesso ao Main LR (som da casa/PA) — use com cuidado,
          pois afeta o que todos ouvem;
        </li>
        <li>
          conecte-se apenas a mesas que você tem autorização para operar.
        </li>
      </ul>

      <h2>Sem garantias</h2>
      <p>
        O EarMix é fornecido <strong>&ldquo;como está&rdquo;</strong>, sem garantias de
        qualquer tipo. O comportamento depende do modelo e firmware da mesa, da qualidade
        da rede Wi-Fi e de fatores fora do nosso controle. Não garantimos funcionamento
        ininterrupto ou livre de erros.
      </p>

      <h2>Limitação de responsabilidade</h2>
      <p>
        Na máxima extensão permitida por lei, não nos responsabilizamos por perdas ou
        danos decorrentes do uso do app — incluindo, por exemplo, ajustes indevidos de
        som durante uma apresentação. O uso é por sua conta e risco.
      </p>

      <h2>Propriedade</h2>
      <p>
        O nome EarMix, o logotipo e o aplicativo pertencem aos seus autores. Marcas de
        terceiros citadas pertencem aos respectivos donos.
      </p>

      <h2>Alterações</h2>
      <p>
        Podemos atualizar estes termos. A versão vigente é sempre a publicada nesta página,
        com a data indicada acima.
      </p>

      <h2>Contato</h2>
      <p>
        Dúvidas? <a href="mailto:contato@earmix.com.br">contato@earmix.com.br</a>.
      </p>
    </LegalLayout>
  );
}
