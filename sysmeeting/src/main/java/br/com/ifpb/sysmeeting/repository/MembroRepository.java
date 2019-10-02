package br.com.ifpb.sysmeeting.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ifpb.sysmeeting.model.Membro;

public interface MembroRepository extends JpaRepository<Membro, Long>{
	
	

}
