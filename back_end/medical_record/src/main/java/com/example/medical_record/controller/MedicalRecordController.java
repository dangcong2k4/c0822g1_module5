package com.example.medical_record.controller;

import com.example.medical_record.model.MedicalRecord;
import com.example.medical_record.service.IMedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("")
@CrossOrigin("*")
public class MedicalRecordController {
    @Autowired
    private IMedicalRecordService medicalRecordService;
    @GetMapping("/list")
    public ResponseEntity<List<MedicalRecord>> showList(Model model){
        List<MedicalRecord> medicalRecordList = medicalRecordService.findAll();
        if (medicalRecordList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(medicalRecordList, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<MedicalRecord> delete(@PathVariable("id") int id){
        medicalRecordService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
