package com.horsemen.feedback.repository;

import com.horsemen.feedback.model.FeedBack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
public interface FeedBackRepository extends JpaRepository <FeedBack, Long> {
}
