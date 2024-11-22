package com.soa.modelo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Tarea {
    private int id;
    private String nombre;
    private String descripcion;
    private String fecha;

}
