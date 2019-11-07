//package br.com.ifpb.sysmeeting.security;
//
//import java.util.Collection;
//import java.util.HashSet;
//import java.util.Optional;
//import java.util.Set;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import br.com.ifpb.sysmeeting.model.Membro;
//import br.com.ifpb.sysmeeting.repository.MembroRepository;
//
//@Service
//public class AppUserDetailsService implements UserDetailsService{
//	
//	@Autowired
//	private MembroRepository membroRepository;
//	
//
//	@Override
//	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//		Optional<Membro> usuarioOptional = membroRepository.findByEmail(email);
//		Membro usuario = usuarioOptional.orElseThrow(() -> new UsernameNotFoundException("usuario e/ou senha incorreto"));
//		return new User(email, usuario.getContaAcesso().getSenha(), getPermissoes(usuario));
//	}
//
//
//	private Collection<? extends GrantedAuthority> getPermissoes(Membro usuario) {
//		Set<SimpleGrantedAuthority> authorities = new HashSet<>();
//		
//		return null;
//	}
//
//}
