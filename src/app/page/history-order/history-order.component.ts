import { Component } from '@angular/core';

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrls: ['./history-order.component.scss']
})
export class HistoryOrderComponent {

  list_value: Array<any> = [

    {
      buyer: "Marcin Szyszka",
      payment: "pay",
      details: {
        date: "15.09.2023",
        company: "Pan obiadek",
        dish: "Danie dnia",
        price: "22.00zł",
        payment: "pay",
        buyer: "Marcin Szyszka",
        seller: "Tomasz Nowosielski"
      }
    },

    {
      buyer: "Marcin Szyszka",
      payment: "no-pay",
      details: {
        date: "22.09.2023",
        company: "Pan obiadek",
        dish: "Danie dnia",
        price: "22.00zł",
        payment: "no-pay",
        buyer: "Marcin Szyszka",
        seller: "Tomasz Nowosielski"
      }
    },

    {
      buyer: "Marcin Szyszka",
      payment: "",
      details: {
        date: "23.09.2023",
        company: "Dara Kebab",
        dish: "Kapsalon",
        price: "30.00zł",
        payment: "",
        buyer: "Marcin Szyszka",
        seller: "Tomasz Nowosielski"
      }
    },

    {
      buyer: "Marcin Szyszka",
      payment: "",
      details: {
        date: "24.09.2023",
        company: "Pan obiadek",
        dish: "Zupa dnia",
        price: "15.00zł",
        payment: "",
        buyer: "Marcin Szyszka",
        seller: "Tomasz Nowosielski"
      }
    }


  ]

}
