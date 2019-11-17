package br.com.ifpb.sysmeeting.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ifpb.sysmeeting.model.Colegiado;
import br.com.ifpb.sysmeeting.repository.colegiado.ColegiadoRepositoryQuery;

public interface ColegiadoRepository extends JpaRepository<Colegiado, Long>, ColegiadoRepositoryQuery{
	
	

}
