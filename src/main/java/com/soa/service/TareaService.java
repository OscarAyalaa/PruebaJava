package com.soa.service;

import java.util.List;

import com.soa.modelo.Tarea;

public interface TareaService {
    
    List<Tarea> findAll();
    
    int save(Tarea item);

}
