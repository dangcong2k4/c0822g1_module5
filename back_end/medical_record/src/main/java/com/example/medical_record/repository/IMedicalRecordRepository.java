package com.example.medical_record.repository;

import com.example.medical_record.model.MedicalRecord;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository

public interface IMedicalRecordRepository extends JpaRepository<MedicalRecord, Integer> {
    @Query(value = "select * from medical_record", nativeQuery = true)
    List<MedicalRecord> showList();


    @Modifying
    @Transactional
    @Query(value = "delete from medical_record s where s.id = :id", nativeQuery = true)
    void deleteId(@Param("id") int id);



    @Modifying
    @Transactional
    @Query(value = "insert into medical_record(code,patient_code,patient,start_date,end_date,reason,cures,doctor) values(?,?,?,?,?,?,?,?);", nativeQuery = true)
    void saveMedical(@Param("medicalRecord") MedicalRecord medicalRecord);

    @Modifying
    @Transactional
    @Query(value = "update customer set code = ?,patient_code= ?, patient =?, start_date =?,end_date =?, reason =?,cures =?, doctor =? where id = ?;", nativeQuery = true)
    void update(@Param("medicalRecord") MedicalRecord medicalRecord);



}
