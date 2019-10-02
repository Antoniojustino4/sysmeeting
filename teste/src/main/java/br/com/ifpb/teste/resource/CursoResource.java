package br.com.ifpb.teste.resource;

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

import br.com.ifpb.teste.event.RecursoCriadoEvent;
import br.com.ifpb.teste.model.Colegiado;
import br.com.ifpb.teste.model.Curso;
import br.com.ifpb.teste.model.NDE;
import br.com.ifpb.teste.repository.CursoRepository;
import br.com.ifpb.teste.service.CursoService;

@RestController
@RequestMapping("/cursos")
public class CursoResource {
	
	@Autowired
	private CursoService cursoService;
	
	@Autowired
	private CursoRepository cursoRepository;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	
	
	@GetMapping
	public List<Curso> listar(){
		return cursoRepository.findAll();
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Curso> buscarPeloCodigo(@PathVariable Long codigo){
		Curso curso = cursoRepository.findOne(codigo);
		return curso != null ? ResponseEntity.ok(curso) : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<Curso> criar(@Valid @RequestBody Curso curso,HttpServletResponse response) {
		Curso cursoSalvo=cursoService.save(curso);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, curso.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(cursoSalvo);
	}	
	
	@PostMapping("/{codigo}/orgoes/NDE")
	public ResponseEntity<Curso> addNDEEmCurso(@PathVariable Long codigo,@Valid @RequestBody NDE orgao,  HttpServletResponse response) {
		Curso cursoSalvo=cursoService.addNDE(codigo , orgao);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, orgao.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(cursoSalvo);
	}	
	
	@PostMapping("/{codigo}/orgoes/colegiado")
	public ResponseEntity<Curso> addColegiadoEmCurso(@PathVariable Long codigo,@Valid @RequestBody Colegiado orgao,  HttpServletResponse response) {
		Curso cursoSalvo=cursoService.addColegiado(codigo , orgao);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, orgao.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(cursoSalvo);
	}
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		cursoRepository.delete(codigo);
	}
	
	@PutMapping("/{codigo}")
	public ResponseEntity<Curso> atualizar(@Valid @RequestBody Curso curso, @PathVariable Long codigo){
		Curso cursoSalvo= cursoService.atualizar(codigo, curso);
		return ResponseEntity.ok(cursoSalvo);
	}
	
	
}
