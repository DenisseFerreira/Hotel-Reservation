
/*Declarando la clase Hotel para ser utilizada
como estructura en la data */
export class Hotel {
    public id: number;   
    public name :string; 
    public stars : number;
    public img : string;
    public regularWeekDay : number;
    public regularWeekEnd : number;
    public frequentWeekDay : number;
    public frequentWeekEnd : number;
    
       constructor(id: number, name: string, stars : number, regularWeekDay : number,
        regularWeekEnd : number, frequentWeekDay : number, frequentWeekEnd : number ) {
          this.id = id;
          this.name = name;
          this.stars = stars;
          this.regularWeekDay = regularWeekDay;
          this.regularWeekEnd = regularWeekEnd; 
          this.frequentWeekDay = frequentWeekDay;
          this.frequentWeekEnd = frequentWeekEnd;
      } 
     
  }
