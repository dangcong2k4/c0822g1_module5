package com.example.medical_record.service.impl;

import com.example.medical_record.model.MedicalRecord;
import com.example.medical_record.repository.IMedicalRecordRepository;
import com.example.medical_record.service.IMedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class MedicalRecordService implements IMedicalRecordService {
    @Autowired
    private IMedicalRecordRepository medicalRecordRepository;

    @Override
    public List<MedicalRecord> findAll() {
        return medicalRecordRepository.showList();
    }

    @Override
    public void delete(int id) {
        medicalRecordRepository.deleteId(id);
    }
}
