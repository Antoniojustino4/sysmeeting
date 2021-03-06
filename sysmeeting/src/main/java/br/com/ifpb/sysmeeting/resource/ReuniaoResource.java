package br.com.ifpb.sysmeeting.resource;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
import br.com.ifpb.sysmeeting.model.Ata;
import br.com.ifpb.sysmeeting.model.ItemDePauta;
import br.com.ifpb.sysmeeting.model.Reuniao;
import br.com.ifpb.sysmeeting.service.ReuniaoService;

@RestController
@RequestMapping("/reuniao")
public class ReuniaoResource {
	
	@Autowired
	private ReuniaoService reuniaoService;
	
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	
	
	@GetMapping
	public List<Reuniao> listar(){
		return reuniaoService.findAll();
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Reuniao> buscarPeloCodigo(@PathVariable Long codigo){
		Reuniao reuniao = reuniaoService.findOne(codigo);
		return reuniao != null ? ResponseEntity.ok(reuniao) : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@PreAuthorize("hasAuthority('PRESIDENTE')")
	public ResponseEntity<Reuniao> criar(@Valid @RequestBody Reuniao reuniao,HttpServletResponse response) throws DesafioException {
		Reuniao reuniaoSalvo=reuniaoService.save(reuniao);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, reuniao.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(reuniaoSalvo);
	}	
	
	@PostMapping("/{codigo}/criarItemDePauta")
	@PreAuthorize("hasAuthority('PRESIDENTE')")
	public ResponseEntity<Reuniao> criarItemDePautaEmReuniao(@PathVariable Long codigo,@Valid @RequestBody ItemDePauta item,  HttpServletResponse response) {
		Reuniao reuniaoSalvo=reuniaoService.criarItemDePauta(codigo , item);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, item.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(reuniaoSalvo);
	}
	
	@PostMapping("/{codigo}/criarAta")
	@PreAuthorize("hasAuthority('PRESIDENTE')")
	public ResponseEntity<Reuniao> criarAtaEmReuniao(@PathVariable Long codigo,@Valid @RequestBody Ata ata,  HttpServletResponse response) throws DesafioException {
		Reuniao reuniaoSalvo=reuniaoService.criarAta(codigo , ata);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, ata.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(reuniaoSalvo);
	}
	
	@PutMapping("/{codigoReuniao}/addItemDePauta")
	@PreAuthorize("hasAuthority('PRESIDENTE')")
	public ResponseEntity<Reuniao> addItemDePautaEmReuniao(@PathVariable Long codigoReuniao,@RequestBody Long codigoitem) {
		Reuniao reuniaoSalvo=reuniaoService.addItemDePauta(codigoReuniao , codigoitem);
		return ResponseEntity.status(HttpStatus.CREATED).body(reuniaoSalvo);
	}
	
	
	
	@PutMapping("/{codigo}/removerItem")
	@PreAuthorize("hasAuthority('PRESIDENTE')")
	public ResponseEntity<Reuniao> removerItemDeReuniao(@PathVariable Long codigo,@RequestBody Long codigoitem) {
		Reuniao reuniaoSalvo=reuniaoService.removerItemDePauta(codigo , codigoitem);
		
		return ResponseEntity.ok(reuniaoSalvo);
	}
	
	@DeleteMapping("/{codigo}")
	@PreAuthorize("hasAuthority('PRESIDENTE')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		reuniaoService.delete(codigo);
	}
	
	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('PRESIDENTE')")
	public ResponseEntity<Reuniao> atualizar(@Valid @RequestBody Reuniao reuniao, @PathVariable Long codigo) throws DesafioException{
		Reuniao reuniaoSalvo= reuniaoService.atualizar(codigo, reuniao);
		return ResponseEntity.ok(reuniaoSalvo);
	}
	
	
}
