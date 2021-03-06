package br.com.ifpb.sysmeeting.resource;

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

import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.model.NDE;
import br.com.ifpb.sysmeeting.repository.NDERepository;
import br.com.ifpb.sysmeeting.service.NDEService;

@RestController
@RequestMapping("/orgoes/NDE")
public class NDEResource {
	
	@Autowired
	private NDEService ndeService;
	
	@Autowired
	private NDERepository ndeRepository;
	
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	
	
	@GetMapping
	public List<NDE> listar(){
		return ndeRepository.findAll();
	}
	
	@GetMapping("/{codigo}/membros")
	public List<Membro> listarMembros(@PathVariable Long codigo){
		return ndeService.listarMembros(codigo);
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<NDE> buscarPeloCodigo(@PathVariable Long codigo){
		NDE nde = ndeRepository.findOne(codigo);
		return nde != null ? ResponseEntity.ok(nde) : ResponseEntity.notFound().build();
	}
	
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		ndeRepository.delete(codigo);
	}
	
	@PutMapping("/{codigo}")
	public ResponseEntity<NDE> atualizar(@Valid @RequestBody NDE orgao, @PathVariable Long codigo){
		NDE orgaoSalvo= ndeService.atualizar(codigo, orgao);
		return ResponseEntity.ok(orgaoSalvo);
	}
	
	@PutMapping("/{codigo}/membros/adicionar")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<NDE> addMembros(@PathVariable Long codigo, @RequestBody Long membro){
		NDE orgaoSalvo= ndeService.addMembros(codigo, membro);
		return ResponseEntity.ok(orgaoSalvo);
	}
	
	@PutMapping("/{codigo}/membros/remover")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<NDE> removerMembros(@PathVariable Long codigo, @RequestBody Long membro){
		NDE orgaoSalvo= ndeService.addMembros(codigo, membro);
		return ResponseEntity.ok(orgaoSalvo);
	}
	
	
}
