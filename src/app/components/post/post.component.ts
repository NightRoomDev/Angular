import { Component, OnInit } from "@angular/core";
import { PostService } from "src/app/services/post/post.service";

@Component({
    selector: 'app-post',
    templateUrl: 'post.component.html'
})

export class PostComponent implements OnInit {

    posts: any[] = [];

    constructor(public postService: PostService) {

    }

    ngOnInit(): void {
        this.postService.getPosts().subscribe((res: any) => {
            this.posts = res;
        })
    }

}