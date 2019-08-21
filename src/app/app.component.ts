import { Component,OnInit } from '@angular/core';
import { dataHotel } from 'src/app/dataHotel';
import { Hotel } from 'src/app/hotel';
import { HotelService } from 'src/app/services/hotel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

/*Variables del tipo Hotel */
  hoteles : Hotel [];
  hotel: Hotel;

  
constructor() {}
ngOnInit() {}


/* Funciones */
search(startDate , endDate){

  /* Declaro variables globales */
    let inicio = new Date(startDate); //Fecha inicial
    let fin = new Date(endDate); //Fecha final
    let cuentaFinde = 0;
    let cuentaHabiles = 0;
    let masbarato = 0;
    let totalhotel = 0;
    let hotelbarato : Hotel;

 /* Buscando la cantidad de dias ingresada por el usuario */
    startDate = startDate.replace(/-+/g, '');
    endDate = endDate.replace(/-+/g, '');
      /*console.log('startDate '+ startDate);
       console.log('endDate '+ endDate); */
    let totalDays = endDate - startDate +1;
    console.log('Dias totales :' , totalDays);

  /* Identificar dias habiles y fin de semana */
  for (let i=0; i < totalDays; i++) {
        //6 => Domingo - 5 => Sábado
        if (inicio.getDay() == 6 || inicio.getDay() == 5) {
                 cuentaFinde++;
        }
        inicio.setDate(inicio.getDate() + 1);
    }
      console.log('Dias de fin de semana son : ' ,cuentaFinde);
      cuentaHabiles = totalDays - cuentaFinde;
      console.log('Dias habiles son : ' , cuentaHabiles);
      this.hoteles = dataHotel;
      this.hoteles.forEach((element: Hotel) => {

        // si radio button name="client-type" value="frequent-client"
       // if (client_type === "frequent-client"){
         totalhotel = (cuentaFinde * element.frequentWeekEnd ) + (cuentaHabiles * element.frequentWeekDay);
     //   }
       //  else{
       //   totalhotel = (cuentaFinde * element.regularWeekEnd ) + (cuentaHabiles * element.regularWeekDay);
      //  }
         
         
         if(masbarato != 0){
            if(totalhotel < masbarato)
            {
              masbarato = totalhotel;
              hotelbarato = element;
            }
            else if(totalhotel === masbarato){
                    if(hotelbarato.stars < element.stars){
                      hotelbarato = element;                   
                    }
            }

         }else{
           masbarato = totalhotel;
           hotelbarato = element;
         }

      });
      this.hotel = hotelbarato;
      console.log(this.hotel, "total del hotel:" ,totalhotel);
}







/* this.getHotel(); */

  /* var diff = Math.abs(date1.getTime() - date2.getTime());
  var diffDays = Math.ceil(diff / (1000 * 3600 * 24));  */

  /*   getHotel(): void {
   
          this.hotel = dataHotel;
          console.log(this.hotel);
    } */
}


