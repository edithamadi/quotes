export class Quote {
public showDescription:boolean;
  constructor(public identity:number,public msg:string,public author:string,public upvote:number,public downvote:number,public dateadded:Date){}
}
