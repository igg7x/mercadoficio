import { ROLES } from "../utils";

export type Notification = {
    id: string;
    title: string;
    type: string;
    message: string;
    read_status: boolean;
    createdAt: Date;
    jobId: string;
}

export type Job = 
{
    userCustomerEmail: string,
    title : string ,
    location :string ,
    deadline_date : Date,
    description : string,
    category : string,
    status : boolean,
    publish_date : Date,
    jobId : number,
    applicants : number
}
export type  JobStats = {
    totalJobs: number;
    activeJobs: number;
    completedJobs: number;
}


export type JobUpdate = {
    jobId : number , 
    title : string  , 
    userOfferingEmail : string , 
    deadlineDate : Date , 
    description : string 
}

export type UserSession = {
email: string , 
email_verified:  boolean , 
family_name: string , 
given_name: string  ,
name: string ,  
nickname: string  ,
picture: string , 
sub: string 
}


export  type User = {
    name : string,
    surname : string,
    email : string,
    phone : number,
    picture : string,
    biography : string,
    location : string,
    isBanned : boolean,
    isDeleted : boolean,
    roles : Set<ROLES>
}

export type UserUpdate = {
    location : string  , 
    biography : string ,
    phone : number,
    newRoles : Set<ROLES>
};

export type Report   = {
    reporterEmail : string , 
    reportedEmail :string  
}


export type Filter  = {
    category : string  , 
    location :string , 
    rating : number 
}


export type Review = {
    jobId :number , 
    userEmailReviewer : string , 
    userEmailReviewed : string , 
    text: string ,
    rating : number 
}

export type Category  = {
    name : string 
} 

export type CategoryUpdate = {
    name : string , 
    status : boolean 
}

export type UserOffering ={
    userCategories : Array<Category>
}

export type JobApplication = {
    userOfferingEmail : string 
    applyDate : Date 
}
 export interface Page<T> {
  content: T[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
}

