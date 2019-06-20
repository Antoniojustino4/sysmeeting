package br.com.ifpb.sysmeeting.ldap;

import java.util.Hashtable;
import java.util.List;

import javax.naming.Context;
import javax.naming.Name;
import javax.naming.NamingEnumeration;
import javax.naming.NamingException;
import javax.naming.directory.Attribute;
import javax.naming.directory.Attributes;
import javax.naming.directory.BasicAttribute;
import javax.naming.directory.BasicAttributes;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;
import javax.naming.directory.SearchControls;
import javax.naming.directory.SearchResult;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ldap.core.AttributesMapper;
import org.springframework.ldap.core.DirContextAdapter;
import org.springframework.ldap.core.DistinguishedName;
import org.springframework.ldap.core.LdapTemplate;
import org.springframework.ldap.core.support.LdapContextSource;
import org.springframework.ldap.filter.OrFilter;
import org.springframework.ldap.query.ContainerCriteria;
import org.springframework.ldap.query.LdapQuery;
import org.springframework.ldap.query.LdapQueryBuilder;
import org.springframework.ldap.query.SearchScope;
import org.springframework.ldap.support.LdapNameBuilder;
import org.springframework.ldap.support.LdapUtils;

import br.com.ifpb.sysmeeting.model.Membro;

import static org.springframework.ldap.query.LdapQueryBuilder.query;

public class LdapTest {

	public List<String> getListing(String diretorio) {

		LdapTemplate template = getTemplate();

		List<String> children = template.list("cn=admin,dc=sysmeeting,dc=com");

		return children;
	}

	/**
	 * conexão com LDAP
	 * 
	 * @return
	 */
	private LdapTemplate getTemplate() {
		LdapContextSource contextSource = new LdapContextSource();
		contextSource.setUrl("ldap://192.168.153.128:389");
		contextSource.setUserDn("cn=admin,dc=sysmeeting,dc=com");
		contextSource.setPassword("sysmeeting");
		try {
			contextSource.afterPropertiesSet();
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		LdapTemplate template = new LdapTemplate();

		template.setContextSource(contextSource);

		return template;

	}

	/***
	 * 
	 * @return retorna o nome dos diretórios principais do LDAP
	 */
	public List<String> getAllDiretórios() {
		LdapTemplate template = getTemplate();
		return template.list("dc=sysmeeting,dc=com");
	}

	/***
	 * 
	 * @return retorna os registros de um diretório específico
	 */
	public List<String> getRegistroDiretorioAlunos(String diretorio) {
		LdapTemplate template = getTemplate();
		return template.list("cn=" + diretorio + ",dc=sysmeeting,dc=com");
	}

	private class MemberAttributesMapper implements AttributesMapper<Membro> {
		public Membro mapFromAttributes(Attributes attrs) throws NamingException {
			Membro person = new Membro();
			person.setNome((String) attrs.get("cn").get());
			person.setEmail((String) attrs.get("title").get());
			// person.setTelefone((String)attrs.get("telephone").get());
			return person;
		}
	}

	public List<Membro> getAllMembers() {
		LdapTemplate template = getTemplate();
		return template.search(query().where("cn").is("member"), new MemberAttributesMapper());
	}

public Name buildGroupDn(String groupName) {
	LdapTemplate template = getTemplate();
    return LdapNameBuilder.newInstance("ou=Groups")
        .add("cn", groupName).build();
}
	
}
