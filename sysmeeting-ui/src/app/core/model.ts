export class Campus {
  cnpj;
  nome: string;
  cidade: string;
  cursos = [];
}

export class Curso {
  id: number;
  nome: string;
  turno: string;
  modalidade: string;
  formacao: string;
}

export class Colegiado {
  inicioDeVigencia: Date;
  mesesDaVigencia: number;
  qtdDiscentes: number;
  qtdTecAdministrativos: number;
  portaria: number;
  mesesDeReconducao: number;
  qtdDocentes: number;
  qtdDocentesExternos: number;
  regulamento: number;
  membros: Membro[];
}

export class Membro {
  matricula: string;
  nome: string;
  cpf: string;
  dataDeNascimento: string;
  grupo: string;
  tipo: string;
  orgoes = [];
  email: string;
  senha: string;
}

export class Tipo {
  nome: string;
}

export class Orgao {
  id: number;
  curso = new Curso();
}

export class Reuniao {
  id: string;
  tipo: string;
  data: string;
  horarioInicio: string;
  horarioFinal: string;
  itensDePauta = [];
  modalidade: string;
}

export class Item {
  estado;
  assunto: string;
  descricao: string;
  id: number;
}