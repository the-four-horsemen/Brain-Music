import {Component, OnInit} from '@angular/core';
import {FeedbackService} from '../shared/feedback.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {FeedbackComponent} from '../user/feedback/feedback.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public service: FeedbackService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onShow() {
    // this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.height = '90%';
    this.dialog.open(FeedbackComponent, dialogConfig);
  }
}


