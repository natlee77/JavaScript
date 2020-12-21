/* -------Array--------

      JS                          C#
    ----------------------------------------------
    Array []                      Array string[](decklarera hur mycket plats)
    Array [] dynamiska -peckare   List  List<string>()( statiska - måste decklarera antal plats )
*/

 const array = []//multiarray/kan stoppa blanda: string, object, numer
 console.log(typeof array)

// går att ha flera olika datatyper i en array -
// Bör dock inte göras
    array[0] = 'Hans'
    array[1] = { firstName: 'Tommy'}
    array[2] = 123
  //  console.log(array)

    const names = ['Hans','Tommy','Joakim','Anki','Sarah']
    //console.log(names)
    //console.log(names.length)
    //console.log(names.indexOf('Joakim'))

    const people = [
        { firstName: 'Hans', lastName: 'Mattin-Lassei' },
        { firstName: 'Tommy', lastName: 'Mattin-Lassei' },
        { firstName: 'Joakim', lastName: 'Wahlström' },
        { firstName: 'Anki', lastName: 'Mattin-Lassei' },
        { firstName: 'Nata', lastName: 'Lisjö' }
    ]
   //console.log(people)
   // console.log(people[4])
   // console.log(people.indexOf('Nata'))//kan inte söka by index
 
/* ---.forEach ----sök f. igenom array--*/
    people.forEach(person => {
        if(person.firstName === 'Nata')//=== jämför båda värde och datatyp
            console.log(person)
    })//=
    /* sök igenom med "for of" */
    for(let person of people) {
        if(person.firstName === 'Nata')
        console.log(person)       
    }

    /* sök igenom med vanlig for-loop */
    for(let i=0; i < people.length; i++) {
        if(people[i].firstName === 'Joakim')
        console.log(people[i])  //lista ut -people[i]    
    }

/* ---.filter()----filtrera ut saker och ting med -- */
   //new list mattinlasseis-callback f.-(person => {})
   //sortera ut saker med hjälp .filter()
    let mattinlasseis = people.filter(person => {
        return person.lastName === 'Mattin-Lassei'
    })
    console.log(mattinlasseis)


/*---.map()--- mappa upp en specifik property till en ny array */
    let firstnames = people.map(person => {
       //return person.firstName//return lista med namn
        return person.firstName ==='Nata'//return list med true||false
    })
    //console.log(firstnames)


    const names2 = ['Nata']

/*-----.push() ----- lägg till i slutet av listan ---*/
    names2.push('Hans')
    names.push('Tommy')
    console.log(names2)
    console.log(names)

/* ----.pop()-----ta bort något i slutet av listan med .pop() */
    names2.pop()
    names.pop()
    console.log(names2)
    console.log(names)


/*----.unshift()---- lägg till i början av listan med .unshift() */
    names.unshift('Nata')
    console.log(names)

/*----.shift()----- ta bort något i början av listan med .shift() */
    names.shift()
    console.log(names)

/*----delete ----- ta bort något från en specifik position med delete */
    delete names[0]    
    console.log(names)

    console.log('-------------------')
const names3 = ['Hans','Tommy','Joakim','Anki','Sarah']
/*----.sort()-----sorterar stigande ordning A-Z 0-9 */
    // names3.sort()
   // console.log(names3)   

/*---.sort()---.reverse()---- sortera något i fallande ordning dvs Z-A 9-0 */
    // names3.sort()
    // names3.reverse()
   // console.log(names3)
 
/*------ nestla olika metoder med varandra */
     // names.sort().reverse()     
    //  console.log(names3)
// ------------------------
  /* const int =[21,3,56,17,2,45,7,20]//funkar inte
   console.log(int)
   let value= int[1].toString()
    if (value.includes('1'))
    console.log(int[1],true)
    else
    console.log(int[1],false)*/
//----------------------
/*---------- .splice()---------- */
    console.log(names3)

// ta bort ett värde från en specifik position
     //names3.splice(2, 1)
     // console.log(names3)
// lägg till ett värde på en specifik position
    names3.splice(0,0, 'nata')
    console.log(names3)
/*-------- .slice()--------copiera part array i new array------ */
    console.log('-------------------')
    console.log(names3)
    const names22 = names3.slice() //hela array i new array 
   // console.log(names22)

    const names33 = names3.slice(2)//ta borted [0],[1]& skapad new array
    console.log(names33) 

    const names4 = names3.slice(3,5)//kvar [4],[5]
    console.log(names4)
    console.log (names3[names3.length-1])//last element i array