export class Quote {
public showDescription:boolean;
  constructor(public identity:number,public msg:string,public author:string,public submitter:string,public upvotes:number,public downvotes:number,public completeDate: Date) {
      this.showDescription = false;
}
