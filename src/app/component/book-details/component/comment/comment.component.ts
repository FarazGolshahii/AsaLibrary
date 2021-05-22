import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { formatDistance } from 'date-fns';

import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { Comment } from './models/comment-data-model';
import { CommentServiceApi } from './services/comment.service';
import { BookComment } from './models/book-comment-data-model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  commentData: Comment;
  BookCommentData: BookComment;
  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';

  public Editor = DecoupledEditor;

  constructor(private commentService: CommentServiceApi) { }

  ngOnInit(): void {
  }
  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }
   
  handleSubmit(): void {

    // this.commentData = {
    //   BookId : 1,
    //   UserId : 1,
    //   CText : this.inputValue
    // }
    // this.commentService.InsertComment(this.commentData)
    // this.commentService.getAllCommentByBookId(1).subscribe(res => this.BookCommentData = res);
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: formatDistance(new Date(), new Date())
        }
      ].map(e => {
        return {
          ...e,
          displayTime: formatDistance(new Date(), e.datetime)
        };
      });
    });
  }





}
