package com.aantivero.microcredito;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
public class CuentaController {

    private CuentaRepository repository;

    public CuentaController(CuentaRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/cuentas")
    public Collection<Cuenta> cuentas() {
        return repository.findAll().stream().collect(Collectors.toList());
    }

    @GetMapping("/cuentas/consaldo")
    public Collection<Cuenta> cuentasConSaldo() {
        return repository.findAll().stream()
                .filter(this::isSaldoGreatThenZero)
                .collect(Collectors.toList());
    }

    private boolean isSaldoGreatThenZero(Cuenta cuenta) {
        return cuenta.getSaldo().compareTo(BigDecimal.ZERO) > 0;
    }
}
