package br.com.ifpb.sysmeeting.cors;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;


@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsFilter implements Filter{
	
	@Autowired
	private SysmeetingProperty testeProperty;
	
	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {
		
		HttpServletRequest request= (HttpServletRequest) req;
		HttpServletResponse response=(HttpServletResponse) resp;
		
		response.setHeader("Access-Control-Allow-Origin", testeProperty.getOriginPermitida());
		response.setHeader("Access-Control-Allow-Credentials", "true");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");

		
		if("OPTIONS".equals(request.getMethod()) && testeProperty.getOriginPermitida().equals(request.getHeader("Origin"))) {
			response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
	        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
			response.setHeader("Access-Control-Max-Age", "3600");			
			
			response.setStatus(HttpServletResponse.SC_OK);
		}else {
			chain.doFilter(req, resp);
		}
		
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		
	}


	@Override
	public void destroy() {
		
	}

}
