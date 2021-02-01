export class Quote {
    showDetails: boolean;
    constructor (public content: string,public username: string,public author: string,public upvote : number,public downvote: number){
     this.showDetails=false;
  }
}