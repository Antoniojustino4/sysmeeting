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
	private SysmeetingProperty sysmeetingProperty;
	
	
	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {

			HttpServletRequest request = (HttpServletRequest) req;
			HttpServletResponse response = (HttpServletResponse) resp; 
			
			response.setHeader("Acces-Control-Allow-Origin", sysmeetingProperty.getOriginPermitida());
			response.setHeader("Acces-Control-Allow-Credentials", "true");
			
			if("OPTIONS".equals(request.getMethod()) && sysmeetingProperty.getOriginPermitida().equals(request.getHeader("Origin"))) {
				response.setHeader("Acces-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
				response.setHeader("Acces-Control-Allow-Headers", "Authorization, Content-Type, Accept");
				response.setHeader("Acces-Control-Max-Age", "3600");
				
				response.setStatus(HttpServletResponse.SC_OK);
			}else {
				chain.doFilter(req, resp);
			}
		
	}


	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

}
