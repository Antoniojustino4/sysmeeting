package br.com.ifpb.sysmeeting.repository.campus;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.ifpb.sysmeeting.model.Campus;
import br.com.ifpb.sysmeeting.repository.filter.CampusFilter;
import br.com.ifpb.sysmeeting.repository.projection.ResumoCampus;

public interface CampusRepositoryQuery {

	public Page<Campus> filtrar(CampusFilter campusFilter, Pageable pageable);
	public Page<ResumoCampus> resumir(CampusFilter campusFilter, Pageable pageable); 
}
