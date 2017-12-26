package com.aantivero.microcredito;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigDecimal;

@Entity
@Getter @Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
public class Cuenta {
    @Id @GeneratedValue
    private Long id;
    private String cbu;
    private String aliasCbu;
    private BigDecimal saldo;
}
