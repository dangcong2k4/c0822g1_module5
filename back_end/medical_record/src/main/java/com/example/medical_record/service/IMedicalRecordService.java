package com.example.medical_record.service;

import com.example.medical_record.model.MedicalRecord;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IMedicalRecordService {
    List<MedicalRecord> findAll();

    void delete(int id);

    void save(MedicalRecord medicalRecord);

    void update(MedicalRecord medicalRecord);
}
