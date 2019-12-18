export class CampusFilter {
  nome: string;
  formacao: string;
  pagina = 0;
  itensPorPagina = 12;
}

export class ReuniaoFilter {
  anos;
  mes;
  orgao;
}

export class ItemFilter {
  assunto: string;
  estado: string;
  pagina = 0;
  itensPorPagina = 10;
}

