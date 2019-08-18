import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => { //componente que quiero testear
//en esta seccion puedo declarar variables


  // esta seccion renderiza el componente, se escribe una vez y se ejecuta en cada it
  beforeEach(async(() => {  // bloque de codigo que se ejecuta antes de cada testeo, uso async por la asincronia
    TestBed.configureTestingModule({     
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  //aqui podria ir un afterEach


  it('debería crear la aplicación', () => { // cada it es un testeo en particular
    // beforeEach se ejecuta en esta parte
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();   //sera la expectativa, lo que espero que me de
    // si tengo afterEach se ejecuta aqui en cada it 
  });

  it(`debe tener como título 'Reserva de hotel'`, () => {  //los it deben recibir 2 parametros
    // beforeEach se ejecuta en esta parte
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Hotel-Reservation');   //se mete en app, busca title (si fuese necesario le envio parametros)
    // y espero que ese resultado sea igual a lo que coloco en la funcion toEqual
  });

  it('debería representar el título en una etiqueta h1', () => {
    // beforeEach se ejecuta en esta parte
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Hotel-Reservation!'); //toContain aplica para un string, busca si dentro de la variable contiene un trozo del string que nosotros buscamos
        // si tengo afterEach se ejecuta aqui en cada it 
  });
});




// los input siempre seran string (su value)
// puedo hacer testeos siguiendo el flujo del usuario (interactividad)
//el toEqual (seria como el ===) debe ser estrictamente igual a diferente del Tobe (seria como el ==)
//.toMatch permite ver una expresion regular (rejest?)

/*Tambien se pueden hacer test para comprobar que una variable este definida
por ejemplo al usar expect(title).tobeDefined();  puede ser tambien indefinida con  .tobeUndefined();
o nula con .tobeNull();

colocar un .not hace negar algo, por ejemplo al usar .not.tobeNull digo que no esta nula


*/