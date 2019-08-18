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
  title = 'Hotel-Reservation';

  hoteles : Hotel [];

  hotel: Hotel;

  
            constructor() { }


  ngOnInit() {}


search(fechadesde , fechahasta){
    let inicio = new Date(fechadesde); //Fecha inicial
    let fin = new Date(fechahasta); //Fecha final
    let cuentaFinde = 0;
    let cuentaHabiles = 0;
    let masbarato = 0;
    let totalhotel = 0;
    let hotelbarato : Hotel;
    fechadesde = fechadesde.replace(/-+/g, '');
    fechahasta = fechahasta.replace(/-+/g, '');
/*   console.log('fechadesde '+ fechadesde);
  console.log('fechahasta '+ fechahasta); */
  
let diastotales = fechahasta - fechadesde +1;
console.log('Dias totales :' , diastotales);

for (var i=0; i < diastotales; i++) 
    {
        //6 => Domingo - 5 => Sábado
        if (inicio.getDay() == 6 || inicio.getDay() == 5) {
                 cuentaFinde++;
        }
        inicio.setDate(inicio.getDate() + 1);
    }
      console.log('Dias de fin de semana son : ' ,cuentaFinde);
      cuentaHabiles = diastotales - cuentaFinde;
      console.log('Dias habiles son : ' , cuentaHabiles);

      this.hoteles = dataHotel;
      

      this.hoteles.forEach(function (element: Hotel){

         totalhotel = (cuentaFinde * element.frequentWeekEnd ) + (cuentaHabiles * element.frequentWeekDay);
         
        //  totalhotel = (cuentaFinde * element.regularWeekEnd ) + (cuentaHabiles * element.regularWeekDay);
         
         
         
         if(masbarato != 0){
            if(totalhotel < masbarato)
            {
              masbarato = totalhotel;
              hotelbarato = element;
            }

         }else{
           masbarato = totalhotel;
           hotelbarato = element;
         }

      });
      this.hotel = hotelbarato;
      console.log(this.hotel)

}






/* this.getHotel(); */

  /* var diff = Math.abs(date1.getTime() - date2.getTime());
  var diffDays = Math.ceil(diff / (1000 * 3600 * 24));  */

  /*   getHotel(): void {
   
          this.hotel = dataHotel;
          console.log(this.hotel);
    } */
}


