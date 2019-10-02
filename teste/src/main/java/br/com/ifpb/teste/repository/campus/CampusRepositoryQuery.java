package br.com.ifpb.teste.repository.campus;

import java.util.List;

import br.com.ifpb.teste.model.Campus;
import br.com.ifpb.teste.repository.filter.CampusFilter;

public interface CampusRepositoryQuery {

	public List<Campus> filtrar(CampusFilter campusFilter);
}
