package br.com.ifpb.sysmeeting.repository.nde;

import java.util.List;

import br.com.ifpb.sysmeeting.model.NDE;
import br.com.ifpb.sysmeeting.repository.filter.NdeFilter;

public interface NdeRepositoryQuery {

	public List<NDE> filtrar(NdeFilter ndeFilter);
}
