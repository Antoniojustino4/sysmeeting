package br.com.ifpb.sysmeeting.event;

import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationEvent;

public class RecursoCriadoEvent extends ApplicationEvent {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private HttpServletResponse response;
	private Long cpf;

	public RecursoCriadoEvent(Object source, HttpServletResponse response, Long cpf) {
		super(source);
		this.response = response;
		this.cpf = cpf;
	}

	public HttpServletResponse getResponse() {
		return response;
	}

	public Long getCpf() {
		return cpf;
	}

}
