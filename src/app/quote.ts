export class Quote {
    showDetails: boolean;
    upvote:number;
    downvote:number;
    constructor (public content: string,public username: string,public author: string,public datePosted:Date){
     this.showDetails=false;
     this.upvote = 0;
     this.downvote = 0;
  }
}