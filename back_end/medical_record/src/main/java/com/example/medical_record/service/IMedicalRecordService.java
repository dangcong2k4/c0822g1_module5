package com.example.medical_record.service;

import com.example.medical_record.model.MedicalRecord;

import java.util.List;

public interface MedicalRecordService {
    List<MedicalRecord> findAll();
}
