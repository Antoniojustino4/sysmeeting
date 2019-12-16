package br.com.ifpb.sysmeeting.resource;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
import br.com.ifpb.sysmeeting.model.Colegiado;
import br.com.ifpb.sysmeeting.model.Curso;
import br.com.ifpb.sysmeeting.model.NDE;
import br.com.ifpb.sysmeeting.repository.filter.CursoFilter;
import br.com.ifpb.sysmeeting.service.CursoService;

@RestController
@RequestMapping("/cursos")
public class CursoResource {
	
	@Autowired
	private CursoService cursoService;

	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	
	
	@GetMapping
	public Page<Curso> pesquisar(CursoFilter cursoFilter, Pageable pageeble){
		return cursoService.filtrar(cursoFilter, pageeble);
	}
	
//	@GetMapping("/{codigo}/colegiados")
//	public List<Colegiado> listarColegiados(@PathVariable Long codigo){
//		return cursoService.listarColegiados(codigo);
//	}
	
//	@GetMapping("/{codigo}/ndes")
//	public List<NDE> listarNdes(@PathVariable Long codigo){
//		return cursoService.listarNdes(codigo);
//	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Curso> buscarPeloCodigo(@PathVariable Long codigo){
		Curso curso = cursoService.buscarCursoPeloCodigo(codigo);
		return curso != null ? ResponseEntity.ok(curso) : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@PreAuthorize("hasAuthority('ADMINISTRADOR')")
	public ResponseEntity<Curso> criar(@Valid @RequestBody Curso curso,HttpServletResponse response) {
		Curso cursoSalvo=cursoService.save(curso);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, curso.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(cursoSalvo);
	}	
	
	@PostMapping("/{codigo}/orgoes/NDE")
	@PreAuthorize("hasAuthority('ADMINISTRADOR')")
	public ResponseEntity<Curso> addNDEEmCurso(@PathVariable Long codigo,@Valid @RequestBody NDE orgao,  HttpServletResponse response) {
		Curso cursoSalvo=cursoService.addNDE(codigo , orgao);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, orgao.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(cursoSalvo);
	}	
	
	@PostMapping("/{codigo}/orgoes/colegiado")
	@PreAuthorize("hasAuthority('ADMINISTRADOR')")
	public ResponseEntity<Curso> addColegiadoEmCurso(@PathVariable Long codigo,@Valid @RequestBody Colegiado orgao,  HttpServletResponse response) {
		Curso cursoSalvo=cursoService.addColegiado(codigo , orgao);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, orgao.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(cursoSalvo);
	}
	
	@DeleteMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ADMINISTRADOR')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		cursoService.delete(codigo);
	}
	
	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ADMINISTRADOR')")
	public ResponseEntity<Curso> atualizar(@Valid @RequestBody Curso curso, @PathVariable Long codigo){
		Curso cursoSalvo= cursoService.atualizar(codigo, curso);
		return ResponseEntity.ok(cursoSalvo);
	}
	
	
}
