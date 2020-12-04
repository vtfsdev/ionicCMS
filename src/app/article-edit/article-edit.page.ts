import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article.model'; 

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.page.html',
  styleUrls: ['./article-edit.page.scss'],
})
export class ArticleEditPage implements OnInit {

  article: Article;
  errors: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getArticle(params['articleId']);
    });
  }

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
    this.articlesService.updateArticle(this.article).subscribe(
      (response:any) => {
        this.response(response);
      }
    );
  }

  getArticle(id:string):void {
    this.articlesService.getArticle(id).subscribe(
      (response:any)=>{
        this.article = response.article;
      }
    );
  }
}