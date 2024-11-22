package com.soa.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.soa.modelo.Tarea;
import com.soa.service.TareaService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/tareas")
@CrossOrigin(origins = "http://localhost:4200/")
@RequiredArgsConstructor
public class TareaController {
    
    private final TareaService service;
    
    @GetMapping
    public List<Tarea> findAll(){
        return service.findAll();
    }
    
    @PostMapping
    public int save(@RequestBody Tarea tarea) {
        return service.save(tarea);
    }
    
}
