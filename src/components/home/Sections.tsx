/**
 * Barrel file — re-exporta todas as seções da home page.
 * Cada seção tem seu próprio arquivo em /components/home/.
 *
 * Você pode importar individualmente:
 *   import Especialidades from "@/components/home/Especialidades"
 *
 * Ou importar várias de uma vez daqui:
 *   import { Especialidades, Sobre } from "@/components/home/Sections"
 */

export { default as Especialidades } from "./Especialidades";
export { default as Sobre }          from "./Sobre";
export { default as Formacao }       from "./Formacao";
export { default as Depoimentos }    from "./Depoimentos";
export { default as CTABanner }      from "./CTABanner";
export { default as Contato }        from "./Contato";
