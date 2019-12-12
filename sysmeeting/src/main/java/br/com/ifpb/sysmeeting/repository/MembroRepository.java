package br.com.ifpb.sysmeeting.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.repository.membro.MembroRepositoryQuery;

public interface MembroRepository extends JpaRepository<Membro, Long>, MembroRepositoryQuery{

}
