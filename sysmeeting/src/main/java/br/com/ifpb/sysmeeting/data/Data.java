package br.com.ifpb.sysmeeting.data;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import br.com.ifpb.sysmeeting.model.Orgao;

public class Data {
	
	public static Date getDateTime() {
		DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		Date date = new Date();
		String a = dateFormat.format(date);

		SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
		Date data = null;
		try {
			data = formato.parse(a);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return data;
	}
	
	private static Date copiar(Date data) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(data);
		return cal.getTime();
	}
	
	public static void adicionarVencimentoDoOrgao(Orgao orgao) {
		int qntdMeses= orgao.getVigenciaMandatoMeses()+orgao.getVigenciaReconducaoMeses();
		int qntdAno = 0;
		orgao.setVencimentoDeMandato(copiar(orgao.getInicioDeMandato()));
		
		//Transformar 12 meses em 1 ano
		while (qntdMeses>=12) {
			qntdAno+=1;
			qntdMeses -=12;
		}
		
		orgao.getVencimentoDeMandato().setYear(orgao.getVencimentoDeMandato().getYear()+qntdAno);
		orgao.getVencimentoDeMandato().setMonth(orgao.getVencimentoDeMandato().getMonth()+qntdMeses);
	}

}
