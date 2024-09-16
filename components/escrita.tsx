"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, useCallback } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

export function Escrita({ className, children, ...props }: Props) {
	const descricaoRef = useCallback((node: HTMLParagraphElement | null) => {
		if (node !== null) {
			const texto = node.innerHTML;
			const textoArray = texto.split("");
			node.innerHTML = "";
			let escrevendo = true;
			let limparBarra: NodeJS.Timeout | undefined;
			textoArray.forEach((letra, i) => {
				setTimeout(() => {
					if (escrevendo) {
						node.innerHTML += letra;
					}
					if (i === textoArray.length - 1 || (!escrevendo && !limparBarra))
						limparBarra = setTimeout(() => {
							node.classList.remove("after:content-['|']", "after:ml-1", "after:animate-pulse");
						}, 999);
				}, 68 * i);
			});
			node.addEventListener(
				"click",
				() => {
					escrevendo = false;
					node.innerHTML = texto;
				},
				{ once: true }
			);
		}
	}, []);

	return (
		<p
			ref={descricaoRef}
			className={cn(
				"mt-2 text-lg leading-8 text-gray-600 after:content-['|'] after:ml-1 after:animate-pulse",
				className
			)}
			{...props}
		>
			{children}
		</p>
	);
}
