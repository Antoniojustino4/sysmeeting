package br.com.ifpb.sysmeeting.resource;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
import br.com.ifpb.sysmeeting.model.Campus;
import br.com.ifpb.sysmeeting.model.Curso;
import br.com.ifpb.sysmeeting.repository.CampusRepository;
import br.com.ifpb.sysmeeting.repository.filter.CampusFilter;
import br.com.ifpb.sysmeeting.repository.projection.ResumoCampus;
import br.com.ifpb.sysmeeting.service.CampusService;

@RestController
@RequestMapping("/campus")
public class CampusResource {
	
	@Autowired
	private CampusService campusService;
	
	@Autowired
	private CampusRepository campusRepository;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	
	
	@GetMapping
	public Page<Campus> pesquisar(CampusFilter campusFilter, Pageable pageable){
		return campusService.filtrar(campusFilter, pageable);
	}
	
	@GetMapping(params = "resumo")
	public Page<ResumoCampus> resumir(CampusFilter campusFilter, Pageable pageable){
		return campusService.resumir(campusFilter, pageable);
	}
	
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Campus> buscarPeloCodigo(@PathVariable Long codigo){
		Campus campus = campusRepository.findOne(codigo);
		return campus != null ? ResponseEntity.ok(campus) : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@PreAuthorize("hasAuthority('ADMINISTRADOR') and #oauth2.hasScope('write')")
	public ResponseEntity<Campus> criar(@Valid @RequestBody Campus campus,HttpServletResponse response) throws DesafioException {
		Campus campusSalvo=campusService.save(campus);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, campus.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(campusSalvo);
	}	
	
	@PostMapping("/{codigo}/cursos")
	@PreAuthorize("hasAuthority('ADMINISTRADOR')")
	public ResponseEntity<Campus> addCursoEmCampus(@PathVariable Long codigo,@Valid @RequestBody Curso curso, HttpServletResponse response) {
		Campus campusSalvo=campusService.addCurso(codigo , curso);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, curso.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(campusSalvo);
	}	
	
	@DeleteMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ADMINISTRADOR')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		campusRepository.delete(codigo);
	}
	
	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ADMINISTRADOR')")
	public ResponseEntity<Campus> atualizar(@Valid @RequestBody Campus campus, @PathVariable Long codigo) throws DesafioException{
		Campus campusSalvo= campusService.atualizar(codigo, campus);
		return ResponseEntity.ok(campusSalvo);
	}
	
	
}
