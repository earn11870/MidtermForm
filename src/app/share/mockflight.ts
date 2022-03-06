import { Flight } from "../components/bookaflight/flight";

export class Mockflight {
  public static mflights: Flight[]=[
    { fullName: "Jung Woo",
      from: "Korea",
      to: "New York",
      type: "One way",
      adults: 1,
      children: 1,
      infants: 1,
      departure: new Date("1-1-2565"),
      arrival: new Date("1-12-2565"),
    }
  ]
}
