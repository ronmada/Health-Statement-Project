export class Student {
  userType: string;
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  institute: {
    id: number;
    name: string;
  };
  guardian: [
    {
      id: string;
      firstName: string;
      lastName: string;
      gender: string;
    }
  ];
}
