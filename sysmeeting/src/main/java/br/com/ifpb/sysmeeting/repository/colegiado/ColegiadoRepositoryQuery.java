package br.com.ifpb.sysmeeting.repository.colegiado;

import java.util.List;

import br.com.ifpb.sysmeeting.model.Colegiado;
import br.com.ifpb.sysmeeting.repository.filter.ColegiadoFilter;

public interface ColegiadoRepositoryQuery {

	public List<Colegiado> filtrar(ColegiadoFilter colegiadoFilter);
}
