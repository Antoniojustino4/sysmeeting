package br.com.ifpb.sysmeeting.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.expression.OAuth2MethodSecurityExpressionHandler;

@Configuration
@EnableWebSecurity
@EnableResourceServer
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class ResourceServeConfig  extends ResourceServerConfigurerAdapter{
	
	@Autowired
	private UserDetailsService userDetailsService ;
	
	@Autowired
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.
		userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
//		inMemoryAuthentication()
//		.withUser("admin").password("admin").roles("ROLE");
	}
	

	@Override
	public void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
				.antMatchers("/campus").permitAll()
				.antMatchers("/campus/{codigo}").permitAll()
				.antMatchers("/orgoes/colegiado").permitAll()
				.antMatchers("/orgoes/colegiado/{codigo}").permitAll()
				.antMatchers("/orgoes/NDE").permitAll()
				.antMatchers("/orgoes/NDE/{codigo}").permitAll()
				.antMatchers("/cursos").permitAll()
				.antMatchers("/cursos/{codigo}").permitAll()
				.antMatchers("/cursos/{codigo}/ndevirgente").permitAll()
				.antMatchers("/cursos/{codigo}/colegiadovirgente").permitAll()
				.antMatchers("/itensDePauta").permitAll()
				.antMatchers("/itensDePauta/{estado}").permitAll()
				.antMatchers("/itensDePauta/{codigo}").permitAll()
				.antMatchers("/reuniao").permitAll()
				.antMatchers("/reuniao/{codigo}").permitAll()
				.anyRequest().authenticated()
				.and()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
			.csrf().disable();
		super.configure(http);
	}
	
	@Override
	public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
		resources.stateless(true);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public MethodSecurityExpressionHandler createExpressionHandler() {
		return new OAuth2MethodSecurityExpressionHandler();
	}
}
