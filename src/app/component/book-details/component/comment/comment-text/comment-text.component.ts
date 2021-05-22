import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comment-text',
  templateUrl: './comment-text.component.html',
  styleUrls: ['./comment-text.component.css']
})
export class CommentTextComponent implements OnInit {

  @ViewChild('elem',{static:true}) elem:ElementRef;
  @Input() content:string;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setProperty(this.elem.nativeElement,'innerHTML', this.content)
  }

}
