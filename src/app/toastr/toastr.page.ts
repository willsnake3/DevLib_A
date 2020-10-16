import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.page.html',
  styleUrls: ['./toastr.page.scss'],
})
export class ToastrPage implements OnInit {

  public toastr: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.toastr = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
