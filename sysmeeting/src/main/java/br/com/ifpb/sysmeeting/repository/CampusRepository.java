package br.com.ifpb.sysmeeting.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ifpb.sysmeeting.model.Campus;
import br.com.ifpb.sysmeeting.repository.campus.CampusRepositoryQuery;

public interface CampusRepository extends JpaRepository<Campus, Long>, CampusRepositoryQuery{
	
	

}
