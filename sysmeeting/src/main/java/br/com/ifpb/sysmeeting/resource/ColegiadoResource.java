package br.com.ifpb.sysmeeting.resource;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.ifpb.sysmeeting.event.RecursoCriadoEvent;
import br.com.ifpb.sysmeeting.exceptionhandler.DesafioException;
import br.com.ifpb.sysmeeting.model.Colegiado;
import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.model.Reuniao;
import br.com.ifpb.sysmeeting.repository.ColegiadoRepository;
import br.com.ifpb.sysmeeting.repository.filter.ColegiadoFilter;
import br.com.ifpb.sysmeeting.service.ColegiadoService;

@RestController
@RequestMapping("/orgaos/colegiado")
public class ColegiadoResource {
	
	@Autowired
	private ColegiadoService colegiadoService;
	
	@Autowired
	private ColegiadoRepository colegidoRepository;
	
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	
	
	@GetMapping
	public List<Colegiado> filtrar(ColegiadoFilter coletiadoFilter){
		return colegiadoService.filtrar(coletiadoFilter);
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
	
	@PostMapping("/{codigo}/criarReuniao")
	public ResponseEntity<Colegiado> addReuniaoEmOrgao(@PathVariable Long codigo,@Valid @RequestBody Reuniao reuniao,  HttpServletResponse response) throws DesafioException {
		Colegiado orgaoSalvo=colegiadoService.addReuniao(codigo , reuniao);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, reuniao.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(orgaoSalvo);
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
