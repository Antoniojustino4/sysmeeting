package br.com.ifpb.sysmeeting.repository.campus;

import java.util.List;

import br.com.ifpb.sysmeeting.model.Campus;
import br.com.ifpb.sysmeeting.repository.filter.CampusFilter;

public interface CampusRepositoryQuery {

	public List<Campus> filtrar(CampusFilter campusFilter);
}
