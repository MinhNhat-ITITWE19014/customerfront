export interface Customer {
  customerID: number;
  userName: string;
  password: string;
  fullName: string;
  email: string;
  address: Address;
  confirmPassword:String;
  //paymentDetailsList: PaymentDetails[];
}

export interface Address{
  streetNum: string;
  streetName: string;
  ward: string;
  district: string;
  city: string;
  postalCode: string;
}
