package br.com.ifpb.sysmeeting.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ifpb.sysmeeting.model.Curso;
import br.com.ifpb.sysmeeting.repository.curso.CursoRepositoryQuery;

public interface CursoRepository extends JpaRepository<Curso, Long>, CursoRepositoryQuery{
	
	

}
