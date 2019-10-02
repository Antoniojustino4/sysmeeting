package br.com.ifpb.teste.resource;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.ifpb.teste.model.Colegiado;
import br.com.ifpb.teste.model.Membro;
import br.com.ifpb.teste.repository.ColegiadoRepository;
import br.com.ifpb.teste.service.ColegiadoService;

@RestController
@RequestMapping("/orgoes/colegiado")
public class ColegidoResource {
	
	@Autowired
	private ColegiadoService colegiadoService;
	
	@Autowired
	private ColegiadoRepository colegidoRepository;
	
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	
	
	@GetMapping
	public List<Colegiado> listar(){
		return colegidoRepository.findAll();
	}
	
	@GetMapping("/{codigo}/membros")
	public List<Membro> listarMembros(@PathVariable Long codigo){
		return colegiadoService.listarMembros(codigo);
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Colegiado> buscarPeloCodigo(@PathVariable Long codigo){
		Colegiado nde = colegidoRepository.findOne(codigo);
		return nde != null ? ResponseEntity.ok(nde) : ResponseEntity.notFound().build();
	}
	
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		colegidoRepository.delete(codigo);
	}
	
	@PutMapping("/{codigo}")
	public ResponseEntity<Colegiado> atualizar(@Valid @RequestBody Colegiado orgao, @PathVariable Long codigo){
		Colegiado orgaoSalvo= colegiadoService.atualizar(codigo, orgao);
		return ResponseEntity.ok(orgaoSalvo);
	}
	
	@PutMapping("/{codigo}/membros/adicionar")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<Colegiado> addMembros(@PathVariable Long codigo, @RequestBody Long membro){
		Colegiado orgaoSalvo= colegiadoService.addMembros(codigo, membro);
		return ResponseEntity.ok(orgaoSalvo);
	}
	
	@PutMapping("/{codigo}/membros/remover")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<Colegiado> removerMembros(@PathVariable Long codigo, @RequestBody Long membro){
		Colegiado orgaoSalvo= colegiadoService.addMembros(codigo, membro);
		return ResponseEntity.ok(orgaoSalvo);
	}
	
	
}
