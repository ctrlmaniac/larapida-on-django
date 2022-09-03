export default interface Prodotto {
  id?: number;
  sito?: boolean;
  servizio?: boolean;
  nome?: string;
  descrizione_breve?: string;
  descrizione?: string;
  url?: string;
  prezzo?: string;
  prezzo_a_partire?: boolean;
  prezzo_offerta?: string;
  immagini?: { thumbnail: boolean; file: string }[];
  resourcetype?: string;
  varianti?: Prodotto[];
}
