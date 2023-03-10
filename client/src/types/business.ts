export default interface Business {
  id: number;
  name: string;
  display_name: string;
  address: string;
  phone: string;
  fax: string;
  mobile: string;
  email: string;
  socials: {
    social: string;
    content: string;
  }[];
}
