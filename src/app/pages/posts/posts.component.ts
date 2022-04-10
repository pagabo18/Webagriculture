import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shared/interfaces/post';
import { PostService } from 'src/app/shared/services/post.service';

interface PostsParams {
  user: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  userId: string = '';
  post: Post[]=[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('El usuario es: ' + params['user']);
      this.userId = params['user'];
      this.getPosts();
    });
  }

  getPosts() {
    this.postService.getPosts().subscribe(response => {
      console.log('Response:', response);
      this.post = response.filter((post: { userId: string; }) => post.userId == this.userId);
    });
  }

}



