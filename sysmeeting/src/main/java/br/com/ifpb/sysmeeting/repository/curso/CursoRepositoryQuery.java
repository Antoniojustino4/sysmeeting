package br.com.ifpb.sysmeeting.repository.curso;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.ifpb.sysmeeting.model.Curso;
import br.com.ifpb.sysmeeting.repository.filter.CursoFilter;

public interface CursoRepositoryQuery {
	
	public Page<Curso> filtrar(CursoFilter cursoFilter, Pageable pageeble);

}
