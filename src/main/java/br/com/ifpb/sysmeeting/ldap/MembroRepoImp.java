package br.com.ifpb.sysmeeting.ldap;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.ldap.core.AttributesMapper;
import org.springframework.ldap.core.LdapTemplate;

import static org.springframework.ldap.query.LdapQueryBuilder.query;

import java.util.List;

import javax.naming.NamingException;
import javax.naming.directory.Attributes;


public class MembroRepoImp  {
	
	private LdapTemplate ldapTemplate;
	
	    public List<String> ldapContextSource() {
	    	 ClassPathXmlApplicationContext appContext = new ClassPathXmlApplicationContext("/ldapTemplate.xml");
	         ldapTemplate = appContext.getBean(LdapTemplate.class);
	        return ldapTemplate.search(
	                query().where("objectclass").is("person"),
	                new AttributesMapper<String>() {
	                   public String mapFromAttributes(Attributes attrs)throws javax.naming.NamingException {
	                	   appContext.close();
	                      return  attrs.get("cn").get().toString();
	                   }
	                });
	    }
	    public void setLdapTemplate(LdapTemplate ldapTemplate) {
	        this.ldapTemplate = ldapTemplate;
	    
	    }
	    
//	    public List<String> getEmail(String objectclass){
//			LdapTemplate template = getTemplate();
//			  return template.search(
//		                query().where("cn").is(objectclass),
//		                new AttributesMapper<String>() {
//		                   public String mapFromAttributes(Attributes attrs)throws NamingException {
//		                      return  attrs.get("cn").get().toString();
//		                   }
//		                });
//		    }
//	    
	    
	public static void main(String[] args) {
		MembroRepoImp mr= new MembroRepoImp();
		System.out.println(mr.ldapContextSource());
	
	}
}