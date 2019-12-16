package br.com.ifpb.sysmeeting.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ifpb.sysmeeting.model.Reuniao;
import br.com.ifpb.sysmeeting.repository.reuniao.ReuniaoRepositoryQuery;

public interface ReuniaoRepository extends JpaRepository<Reuniao, Long>, ReuniaoRepositoryQuery{
	
	

}
