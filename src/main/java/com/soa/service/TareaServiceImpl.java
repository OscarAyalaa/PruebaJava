package com.soa.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.soa.mapper.TareaMapper;
import com.soa.modelo.Tarea;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TareaServiceImpl implements TareaService{
    
    private final TareaMapper mapper;

    @Override
    public List<Tarea> findAll() {
        return mapper.findAll();
    }

    @Override
    public int save(Tarea item) {
        return mapper.save(item);
    }

}
