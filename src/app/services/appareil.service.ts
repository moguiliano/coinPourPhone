
export class AppareilService {//injection du service
  articles=[
    
    {
      id:1,
      nom:'5 noir',
      model:'LCD_iphone_5_noir_1.jpg  ',
      prix:11
    },
    {
      id:2,
      nom:'5c noir',
      model:'LCD_iphone_5C_noir_1.jpg',
      prix:12
    },
    { id:3,
      nom:'6 noir',
      model:'LCD_iphone_6_noir_1.jpg',
      prix:13
    },
    { id:4,
      nom:'6 plus noir',
      model:'LCD_iphone_6Plus_noir_1.jpg',
      prix:11
    },
    { id:5,
      nom:'6s noir',
      model:'LCD_iphone_6S_noir_1.jpg',
      prix:11
    },
    { id:6,
      nom:'7 noir',
      model:'LCD_iphone_7_noir_1.jpg',
      prix:11
    },
    { id:7,
      nom:'8 noir',
      model:'LCD_iphone_8_noir_1.jpg',
      prix:11
    },
    { id:8,
      nom:'X',
      model:'LCD_iphone_X_1.jpg',
      prix:55,
    }


  ]
  getArticleById(id:number)
  {
    const article = this.articles.find(
      (s)=>{return s.id === id;}

    );
    return article;
  }
    // Persons = [
    //     {
    //       name:'moha',
    //       age:12
    //     },
    //     {
    //       name:'anis',
    //       age:22
    //     },
    //     {
    //       name:'yanis',
    //       age:28
    //     }
       
    //       ]
    //       resetAge()
    //       {
    //         for(let Person of this.Persons)
    //         Person.age=0
    //       }
    //       augmenterAge()
    //       {
    //         for(let Person of this.Persons)
    //         Person.age=20
    //       }
    //       resetForOne(index:number)
    //       {
    //         this.Persons[index].age=0;
    //       }
    //       AugmenterForOne(index:number)
    //       {
    //         this.Persons[index].age=20;
    //       }
}