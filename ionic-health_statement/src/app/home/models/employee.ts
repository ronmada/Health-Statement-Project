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

