package com.aantivero.microcredito;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;
import java.util.stream.Stream;

@SpringBootApplication
public class MicrocreditoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MicrocreditoApplication.class, args);
	}

	@Bean
	ApplicationRunner init(CuentaRepository repository) {
		return args -> {
			Stream.of("alias1", "alias2", "alias3").forEach(aliascbu -> {
				Cuenta cuenta = new Cuenta();
				cuenta.setAliasCbu(aliascbu);
				cuenta.setCbu("cbu"+aliascbu);
				cuenta.setSaldo(BigDecimal.ZERO);
				repository.save(cuenta);
			});
			repository.findAll().forEach(System.out::println);
		};
	}
}
