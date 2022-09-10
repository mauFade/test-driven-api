import { parseISO, setYear } from "date-fns";

/**
 * Função para retornar uma data com um ano para frente
 * @param date Data
 * @returns Data com um ano a mais
 */
export function getFutureDate(date: string): Date {
  return setYear(parseISO(date), new Date().getFullYear() + 1);
}
