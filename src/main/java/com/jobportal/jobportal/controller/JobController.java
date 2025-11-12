package com.jobportal.jobportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.jobportal.jobportal.model.Job;
import com.jobportal.jobportal.model.JobRepository;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    @Autowired
    private JobRepository jobRepository;

    @PostMapping("/add")
    @SuppressWarnings("null")
    public Job addJob(@RequestBody Job job) {
        return jobRepository.save(job);
    }

    @GetMapping("/all")
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    // ✅ DELETE JOB BY ID
    @DeleteMapping("/delete/{id}")
    @SuppressWarnings("null")
    public String deleteJob(@PathVariable Long id) {
        if (jobRepository.existsById(id)) {
            jobRepository.deleteById(id);
            return "Job with ID " + id + " deleted successfully!";
        } else {
            return "Job not found!";
        }
    }

    // ✅ SEARCH JOB BY TITLE OR COMPANY
    @GetMapping("/search")
    public List<Job> searchJobs(@RequestParam String keyword) {
        return jobRepository.findByTitleContainingIgnoreCaseOrCompanyContainingIgnoreCase(keyword, keyword);
    }
}
