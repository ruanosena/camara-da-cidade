export interface BlocoDados {
	id: "string";
	idLegislatura: "string";
	nome: "string";
	uri: "string";
}
interface BlocoLink {
	href: "string";
	rel: "string";
	type: "string";
}
export interface Bloco {
	dados: Array<BlocoDados>;
	links: Array<BlocoLink>;
}
