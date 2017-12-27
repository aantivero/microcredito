package com.aantivero.microcredito;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CuentaController {

    private CuentaRepository repository;

    public CuentaController(CuentaRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/todas")
    public Collection<Cuenta> cuentas() {
        return repository.findAll().stream().collect(Collectors.toList());
    }

    @GetMapping("/consaldo")
    public Collection<Cuenta> cuentasConSaldo() {
        return repository.findAll().stream()
                .filter(this::isSaldoGreatThenZero)
                .collect(Collectors.toList());
    }

    private boolean isSaldoGreatThenZero(Cuenta cuenta) {
        return cuenta.getSaldo().compareTo(BigDecimal.ZERO) > 0;
    }
}
