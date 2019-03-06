package com.horsemen.feedback.controller;

import com.horsemen.feedback.exception.ResourceNotFoundException;
import com.horsemen.feedback.model.FeedBack;
import com.horsemen.feedback.repository.FeedBackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FeedBackController {
    @Autowired
    FeedBackRepository feedBackRepository;

    @GetMapping("/admin/feedbacks")
    public Page <FeedBack> getAllFeedbacks(Pageable pageable) {
        return feedBackRepository.findAll(pageable);
    }

    @PostMapping("/feedback")
    public FeedBack createFeedback(@Valid @RequestBody FeedBack feedBack) {
        return feedBackRepository.save(feedBack);
    }

    @GetMapping("/admin/feedbacks/{id}")
    public FeedBack getFeedbackById(@PathVariable(value = "id") Long feedbackId) {
        return feedBackRepository.findById(feedbackId)
                .orElseThrow(() -> new ResourceNotFoundException("Feedback", "id", feedbackId));
    }

    @DeleteMapping("/admin/feedbacks/{id}")
    public ResponseEntity <?> deleteFeedback(@PathVariable(value = "id") Long feedbackId) {
        FeedBack feedBack = feedBackRepository.findById(feedbackId)
                .orElseThrow(() -> new ResourceNotFoundException("Feedback", "id", feedbackId));
        feedBackRepository.delete(feedBack);
        return ResponseEntity.ok().build();
    }
}
