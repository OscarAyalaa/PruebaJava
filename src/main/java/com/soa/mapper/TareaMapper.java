package com.soa.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;


import com.soa.modelo.Tarea;

@Mapper
public interface TareaMapper {
    
    @Select("SELECT * FROM tareas")
    List<Tarea> findAll();
    
    @Insert("INSERT INTO tareas (nombre, descripcion, fecha) VALUES (#{nombre}, #{descripcion}, #{fecha})")
    int save(Tarea item);
    
}
