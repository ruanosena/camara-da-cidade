import { Escrita } from "@/components/escrita";
import { Bloco } from "./types";
import { BlocoCard } from "@/components/bloco-card";

export default async function Page() {
	const conteudo = await fetch("https://dadosabertos.camara.leg.br/api/v2/blocos?itens=6&ordem=ASC&ordenarPor=nome", {
		headers: { Accept: "application/json" },
	});
	const blocos: Bloco = await conteudo.json();

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dados Abertos</h2>
					<Escrita>
						Saiba sobre a atuação dos parlamentares, as votações da Casa, os gastos reembolsados com dinheiro público,
						etc.
					</Escrita>
				</div>
				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{blocos.dados.map((bloco) => (
						<BlocoCard key={bloco.id} dados={bloco} />
					))}

					{/* <!-- More posts... --> */}
				</div>
			</div>
		</div>
	);
}
