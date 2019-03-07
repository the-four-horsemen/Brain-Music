import {Component, OnInit} from '@angular/core';
import {FeedbackService} from '../../shared/feedback.service';
import {Feedback} from '../../shared/feedback.model';

@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.component.html',
  styleUrls: ['./list-feedback.component.css']
})
export class ListFeedbackComponent implements OnInit {

  constructor(public service: FeedbackService) {
  }

  ngOnInit() {
    this.service.getList();
  }
  onDelete(id: number) {
    console.log(id);
    this.service.deleteFeedback(id).subscribe(res => {
      this.service.getList();
    });
  }

  populateForm(feedback: Feedback) {
    this.service.formData = Object.assign({}, feedback);
  }
}
