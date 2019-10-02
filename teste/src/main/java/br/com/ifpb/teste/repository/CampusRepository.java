package br.com.ifpb.teste.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ifpb.teste.model.Campus;
import br.com.ifpb.teste.repository.campus.CampusRepositoryQuery;

public interface CampusRepository extends JpaRepository<Campus, Long>, CampusRepositoryQuery{
	
	

}
