import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit ,AfterViewInit{

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

    $('.selectpicker').selectpicker('refresh');
}
}
