import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.page.html',
  styleUrls: ['./article-create.page.scss'],
})
export class ArticleCreatePage implements OnInit {

  article:Article = new Article();
  errors: any = {};

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit() {}

  response(response): void{

    if(response.success===false){

      if( response.errors.title == 'MissingTitleError' ){
        this.errors.username = 'Please enter a title';
      }

      if( response.errors.description == 'MissingDescriptionError' ){
        this.errors.username = 'Please enter a description';
      }

      if( response.errors.keywords == 'MissingKeywordError' ){
        this.errors.username = 'Please enter a keyword';
      }

      if( response.errors.description == 'MissingBodyError' ){
        this.errors.username = 'Please enter a body';
      }

    }

    if(response.success===true){
      this.router.navigate(['/articles']);
    }
  }

  onSubmit(): void{
    this.articlesService.createArticle(this.article).subscribe(
      (response:any) => {
        this.response(response);
      }
    );
  }

}