import { Component, OnInit } from '@angular/core';
import {FeedbackService} from '../shared/feedback.service';
import {Feedback} from '../shared/feedback';

@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.component.html',
  styleUrls: ['./list-feedback.component.css']
})
export class ListFeedbackComponent implements OnInit {

  constructor( private service: FeedbackService) { }

  ngOnInit() {
    this.service.getList();
  }
  onDelete(id: number) {
    this.service.deleteFeedback(id).subscribe(res => {
      this.service.getList();
    });
  }
  populateForm(emp: Feedback) {
    this.service.formData = Object.assign({}, emp);
  }
}
