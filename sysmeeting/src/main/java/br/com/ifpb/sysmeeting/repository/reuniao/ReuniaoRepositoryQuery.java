package br.com.ifpb.sysmeeting.repository.reuniao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.ifpb.sysmeeting.model.Reuniao;
import br.com.ifpb.sysmeeting.repository.filter.ReuniaoFilter;

public interface ReuniaoRepositoryQuery {

	public Page<Reuniao> filtrar(ReuniaoFilter reuniaoFilter, Pageable pageable);
}
