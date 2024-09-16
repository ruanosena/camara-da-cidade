import { BlocoDados } from "@/app/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
	dados: BlocoDados;
}

export function BlocoCard({ dados, className, ...props }: Props) {
	return (
		<article className={cn("flex max-w-xl flex-col items-start justify-between", className)} {...props}>
			<div className="flex items-center gap-x-4 text-xs">
				<span className="text-gray-500">{dados.id}</span>
				<a
					href="#"
					className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
				>
					{dados.idLegislatura}
				</a>
			</div>
			<div className="group relative">
				<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
					<a href="#">
						<span className="absolute inset-0"></span>
						{dados.nome}
					</a>
				</h3>
				<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
					Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo
					necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
				</p>
			</div>
			<div className="relative mt-8 flex items-center gap-x-4">
				<Image
					src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
					width={40}
					height={40}
					className="rounded-full bg-gray-50"
				/>
				<div className="h-10 w-10 rounded-full bg-gray-50" />
				<div className="text-sm leading-6">
					<p className="font-semibold text-gray-900">
						<a href="#">
							<span className="absolute inset-0"></span>
							Michael Foster
						</a>
					</p>
					<p className="text-gray-600">Co-Founder / CTO</p>
				</div>
			</div>
		</article>
	);
}
