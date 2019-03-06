package com.horsemen.feedback.repository;

import com.horsemen.feedback.model.FeedBack;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedBackRepository extends JpaRepository <FeedBack, Long> {
}
