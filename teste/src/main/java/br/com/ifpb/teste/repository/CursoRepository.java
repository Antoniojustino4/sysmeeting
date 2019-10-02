package br.com.ifpb.teste.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ifpb.teste.model.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long>{
	
	

}
