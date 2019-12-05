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
import br.com.ifpb.sysmeeting.repository.filter.ItemDePautaFilter;
import br.com.ifpb.sysmeeting.service.ItemDePautaService;

@RestController
@RequestMapping("/itensDePauta")
public class ItemDePautaResource {
	
	@Autowired
	private ItemDePautaService itemDePautaService;
	
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	
	@GetMapping
	public List<ItemDePauta> listar(ItemDePautaFilter itemFilter){
		return itemDePautaService.filtrar(itemFilter);
	}
	
	@GetMapping("/sugeridos")
	public List<ItemDePauta> buscarItensSugeridos(){
		return itemDePautaService.buscarItensSugeridos();
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<ItemDePauta> buscarPeloCodigo(@PathVariable Long codigo){
		ItemDePauta item = itemDePautaService.buscarPeloCodigo(codigo);
		return item != null ? ResponseEntity.ok(item) : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<ItemDePauta> criar(@Valid @RequestBody ItemDePauta curso,HttpServletResponse response) {
		ItemDePauta itemSalvo=itemDePautaService.save(curso);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, curso.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(itemSalvo);
	}	
	
//	@PostMapping("/{codigo}/orgoes/colegiado")
//	public ResponseEntity<ItemDePauta> addColegiadoEmCurso(@PathVariable Long codigo,@Valid @RequestBody Colegiado orgao,  HttpServletResponse response) {
//		ItemDePauta cursoSalvo=itemDePautaService.addColegiado(codigo , orgao);
//		
//		publisher.publishEvent(new RecursoCriadoEvent(this, response, orgao.getId()));
//		return ResponseEntity.status(HttpStatus.CREATED).body(cursoSalvo);
//	}
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		itemDePautaService.delete(codigo);
	}
	
	@PutMapping("/{codigo}")
	public ResponseEntity<ItemDePauta> atualizar(@Valid @RequestBody ItemDePauta item, @PathVariable Long codigo){
		ItemDePauta itemSalvo= itemDePautaService.atualizar(codigo, item);
		return ResponseEntity.ok(itemSalvo);
	}
	
	
}
