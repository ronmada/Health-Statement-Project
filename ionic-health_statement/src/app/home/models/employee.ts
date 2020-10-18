export interface Employee {
  userType: string;
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  phoneNum: string;
  institute: [
    {
      id: number;
      name: string;
    }
  ];
}
// export class Employee {
//     userType: string;
//     id: string;
//     firstName: string;
//     lastName: string;
//     gender: string;
//     phoneNum: string;
//     institute : string[];
//     intsId : string
//     instName : string
//     constructor(userType : string,id: string,firstName: string,lastName: string,gender: string,phoneNum: string,institute :string[],instId,instName)
//     { 
//         this.userType = userType;
//         this.id = id;
//         this.firstName =  firstName;
//         this.lastName = lastName;
//         this.gender = gender;
//         this.phoneNum =  phoneNum;
//         this.institute = institute
//         //   {
//         //     this.id =  instId;
//         //     this.name = instName;
//         //   }
//         // ];}
//     }
