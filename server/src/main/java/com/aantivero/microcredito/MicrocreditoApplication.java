package com.aantivero.microcredito;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.stream.Stream;

@EnableResourceServer
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

	@Bean
	public FilterRegistrationBean simpleCorsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
		config.setAllowedMethods(Collections.singletonList("*"));
		config.setAllowedHeaders(Collections.singletonList("*"));
		source.registerCorsConfiguration("/**", config);
		FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
		bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
		return bean;
	}
}
