package br.com.ifpb.sysmeeting;


import br.com.ifpb.sysmeeting.ldap.LdapRepository;

public class Application {
	
	public static void main(String[] args) {
		LdapRepository ldap= new LdapRepository();
		
		String base= "cn=admin,dc=sysmeeting,dc=com";

		System.out.println(ldap.getMembro("rsilva","ui", "123",base));
				
	}
	
	

}