package br.com.ifpb.sysmeeting.ldap;

import static org.springframework.ldap.query.LdapQueryBuilder.query;

import java.util.List;

import javax.naming.directory.Attributes;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.ldap.core.AttributesMapper;
import org.springframework.ldap.core.LdapTemplate;


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
	        
	public static void main(String[] args) {
		MembroRepoImp mr= new MembroRepoImp();
		System.out.println(mr.ldapContextSource());
	
	}
}