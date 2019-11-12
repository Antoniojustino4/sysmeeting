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
		Reuniao reuniao = reuniaoService.buscarReuniaoPeloCodigo(codigo);
		return reuniao != null ? ResponseEntity.ok(reuniao) : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<Reuniao> criar(@Valid @RequestBody Reuniao reuniao,HttpServletResponse response) {
		Reuniao reuniaoSalvo=reuniaoService.save(reuniao);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, reuniao.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(reuniaoSalvo);
	}	
	
	@PostMapping("/{codigo}/criarItemDePauta")
	public ResponseEntity<Reuniao> criarItemDePautaEmReuniao(@PathVariable Long codigo,@Valid @RequestBody ItemDePauta item,  HttpServletResponse response) {
		Reuniao reuniaoSalvo=reuniaoService.criarItemDePauta(codigo , item);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, item.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(reuniaoSalvo);
	}
	
	@PutMapping("/{codigoReuniao}/addItemDePauta")
	public ResponseEntity<Reuniao> addItemDePautaEmReuniao(@PathVariable Long codigoReuniao,@RequestBody Long codigoitem) {
		Reuniao reuniaoSalvo=reuniaoService.addItemDePauta(codigoReuniao , codigoitem);
		return ResponseEntity.status(HttpStatus.CREATED).body(reuniaoSalvo);
	}
	
	@PutMapping("/{codigo}/removerItem")
	public ResponseEntity<Reuniao> removerItemDeReuniao(@PathVariable Long codigo,@Valid @RequestBody ItemDePauta item,  HttpServletResponse response) {
		Reuniao reuniaoSalvo=reuniaoService.removerItemDePauta(codigo , item);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, item.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(reuniaoSalvo);
	}
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		reuniaoService.delete(codigo);
	}
	
	@PutMapping("/{codigo}")
	public ResponseEntity<Reuniao> atualizar(@Valid @RequestBody Reuniao reuniao, @PathVariable Long codigo){
		Reuniao reuniaoSalvo= reuniaoService.atualizar(codigo, reuniao);
		return ResponseEntity.ok(reuniaoSalvo);
	}
	
	
}
