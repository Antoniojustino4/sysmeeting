package br.com.ifpb.sysmeeting.security;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.repository.MembroRepository;
import br.com.ifpb.sysmeeting.repository.filter.MembroFilter;

@Service
public class AppUserDetailsService implements UserDetailsService{
	
	@Autowired
	private MembroRepository membroRepository;
	

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		MembroFilter membro = new MembroFilter();
		membro.setEmail(email);
		Membro usuarioOptional = membroRepository.findByEmail(membro);
		if(usuarioOptional==null) {
			new UsernameNotFoundException("usuario e/ou senha incorreto");
		}
		Membro usuario = usuarioOptional;
		return new User(email, usuario.getContaAcesso().getSenha(), getPermissoes(usuario));
	}


	private Collection<? extends GrantedAuthority> getPermissoes(Membro usuario) {
		Set<SimpleGrantedAuthority> authorities = new HashSet<>();
		authorities.add(new SimpleGrantedAuthority(usuario.getTipo().getNome().toUpperCase()));
		
		return authorities;
	}

}
