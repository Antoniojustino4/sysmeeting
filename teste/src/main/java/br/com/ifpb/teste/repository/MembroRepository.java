package br.com.ifpb.teste.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ifpb.teste.model.Membro;

public interface MembroRepository extends JpaRepository<Membro, Long>{
	
	

}
