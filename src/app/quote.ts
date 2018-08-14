export class Quote {
  public showAuthor:boolean;
  public showPerson:boolean;
  constructor(public identity:number,public msg:string,public author:string,public person:string,public upvotes:number,public downvotes:number,public completeDate: Date) {
    this.showAuthor = false;
    this.showPerson= false;
  }
}
