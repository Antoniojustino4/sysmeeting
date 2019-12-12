package br.com.ifpb.sysmeeting.repository.membro;

import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.repository.filter.MembroFilter;

public interface MembroRepositoryQuery {

	public Membro findByEmail(MembroFilter membroFilter);
}
