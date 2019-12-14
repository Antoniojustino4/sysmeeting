//package br.com.ifpb.sysmeeting.ldap;
//
//import java.util.List;
//
//import javax.naming.NamingEnumeration;
//import javax.naming.NamingException;
//import javax.naming.directory.Attributes;
//
//import org.springframework.ldap.AuthenticationException;
//import org.springframework.ldap.core.AttributesMapper;
//import org.springframework.ldap.core.LdapTemplate;
//import org.springframework.ldap.core.support.LdapContextSource;
//import org.springframework.ldap.query.LdapQuery;
//import org.springframework.ldap.query.LdapQueryBuilder;
//
//import br.com.ifpb.sysmeeting.model.ContaAcesso;
//
//public class LdapRepository {
//
//	/**
//	 * conexão com LDAP
//	 * 
//	 * @return
//	 */
//	
////	https://dados.ifpb.edu.br/api/3/action/datastore_search_sql?format=json&q=SELECT * from="29c2b593-ed14-4b73-b30c-d6135f072cf7" where curso.nome like "502 - Tecnologia em Análise e Desenvolvimento de Sistemas - Monteiro (CAMPUS MONTEIRO)" and matricula like "201625020058"
//	
////	https://dados.ifpb.edu.br/api/3/action/datastore_search?q=jones&resource_id=29c2b593-ed14-4b73-b30c-d6135f072cf7
//
//	//	contextSource.setUrl("ldap://192.168.135.128:389");
////	contextSource.setUserDn("cn=admin,dc=sysmeeting,dc=com");
////	contextSource.setPassword("sysmeeting");
//	
//	
//	private LdapTemplate getTemplate(String url,String user,String password) {
//		LdapContextSource contextSource = new LdapContextSource();
//		contextSource.setUrl(url);
//		contextSource.setUserDn(user);
//		contextSource.setPassword(password);
//		
//		
//
//		
//		try {
//			contextSource.afterPropertiesSet();
//		} catch (Exception ex) {
//			ex.printStackTrace();
//		}
//
//		LdapTemplate template = new LdapTemplate();
//
//		template.setContextSource(contextSource);
//
//		return template;
//
//	}
//
//	/***
//	 * 
//	 * @return retorna o usuario que foi autenticado do LDAP e salva no banco de dados do sysmeeting
//	 */
//	
//	
////	fazer um para professor
//	public ContaAcesso getMembro(String login, String nomeAtributoMatricula, String senha,String base) {
//		
//		String url= "ldap://192.168.135.128:389";
//		String user="cn=admin,dc=sysmeeting,dc=com";
//		String password= "sysmeeting";
//		LdapTemplate template = getTemplate(url, user, password);
//		
//		LdapQuery query= LdapQueryBuilder.query()
//		.base(base)
//		.where (nomeAtributoMatricula)
//		. is (login);
//		
////		lança AuthenticationException
//		List<ContaAcesso> membros= null;
//		try {
//			template.authenticate(query, senha);
//			membros = template.search(query, new MembroAttributesMapper());
//
////			MembroService serviceMembro= new MembroService();
////			for (Membro membro : membros) {
////				System.out.println(membro);
////				serviceMembro.save(membro);
////			}
//			
//		} catch (AuthenticationException e) {
//			e.printStackTrace();
//		}
//		return(membros == null) ? null : membros.get(0);
//	}
//
//
//	private class MembroAttributesMapper implements AttributesMapper<ContaAcesso> {
//		public ContaAcesso mapFromAttributes(Attributes attrs) throws NamingException {
//			ContaAcesso person = new ContaAcesso();
////			if(attrs.get("givenName")!=null)
////				person.setNome((String) attrs.get("givenName").get());
//			if(attrs.get("mail")!=null)
//				person.setEmail((String) attrs.get("mail").get());
//
//			NamingEnumeration<String> itr = attrs.getIDs();
//			
//			
//			while (itr.hasMore()) {
//				String attrId = itr.next();
//				String attrValor = attrs.get(attrId).toString();
//				System.out.println(attrValor);
//				
//				
// 			}
//			
//			return person;
//		}
//	}
//
//	
//
//}
