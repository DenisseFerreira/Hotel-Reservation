import { Component,OnInit } from '@angular/core';
import { dataHotel } from 'src/app/dataHotel';
import { Hotel } from 'src/app/hotel';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

/*Atributos(es una variable, pero al estar
  dentro de una clase se llama atributo) y su tipo */
  hoteles : Hotel [];
  hotel: Hotel;

  
constructor() {}
ngOnInit() {}


/* Metodos (funciones) */
search(startDate , endDate, typeClient){

  /* Declaro variables globales */
    let inicio = new Date(startDate); //Fecha inicial
    let fin = new Date(endDate); //Fecha final
    let cuentaFinde = 0;
    let cuentaHabiles = 0;
    let masbarato = 0;
    let totalhotel = 0;
    let hotelbarato : Hotel;

 /* Buscando la cantidad de dias ingresada por el usuario */
    // startDate = startDate.replace(/-+/g, '');
     //endDate = endDate.replace(/-+/g, '');
    
     let fecha1 = moment(startDate);
     let fecha2 = moment(endDate);
     let totalDays = fecha2.diff(fecha1, 'days')+1;
    console.log(totalDays, ' dias de diferencia');


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

        if (typeClient === "frequent-client"){
         totalhotel = (cuentaFinde * element.frequentWeekEnd ) + (cuentaHabiles * element.frequentWeekDay);
      }
       else{
        totalhotel = (cuentaFinde * element.regularWeekEnd ) + (cuentaHabiles * element.regularWeekDay);
       }
         
         
         if(masbarato != 0){
            if(totalhotel < masbarato)
            {
              masbarato = totalhotel;
              hotelbarato = element;
            }
            else if(totalhotel === masbarato){ //Comparacion del mismo precio
                    if(hotelbarato.stars < element.stars){   //El que tiene mas estrella sera escogido
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


}


