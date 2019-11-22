package br.com.ifpb.sysmeeting.resource;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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

import br.com.ifpb.sysmeeting.model.ItemDePauta;
import br.com.ifpb.sysmeeting.repository.filter.ItemDePautaFilter;
import br.com.ifpb.sysmeeting.service.ItemDePautaService;

@RestController
@RequestMapping("/itensDePauta")
public class ItemDePautaResource {
	
	@Autowired
	private ItemDePautaService itemDePautaService;
	
	
	
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
		ItemDePauta item = itemDePautaService.findOne(codigo);
		return item != null ? ResponseEntity.ok(item) : ResponseEntity.notFound().build();
	}
	
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
