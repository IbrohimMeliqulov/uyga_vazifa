
const contacts=[
    {name:"Ibrohim",surname:"Meliqulov",phone:"+998978483355"}
]



function add_to_contacts(callback){
    let name=prompt("yangi contacts ro'yxatiga qo'shmoqchi bo'lgan kishingizni ismini kiriting: ")
    let surname=prompt("Familiyasini kiriting:")
    let phone=prompt("Telefon nomerini kirgizing: ")
    const new_contac={
        name:name,
        surname:surname,
        phone:phone}

    contacts.push(new_contac)

}

function update_contacts(obj){
    let n=prompt("update qilmoqchi bo'lgan kishini ismini kiriting: ")
    contacts.forEach(contact=>{
        if(contact.name.toLowerCase()==n.toLowerCase()){
            contact.name=prompt("Yangi ismni kiriting: ")
            contact.surname=prompt("Yangi familiyani kiriting: ")
            contact.phone=prompt("Yangi telefon raqamini kiriting: ")
        }
        if(!(contact.name)){
            console.log("Not found")
        }
    })
}
function delete_contact(obj){
    let n=prompt("O'chirmoqchi bo'lgan kishini ismini kiriting: ")
    for(let i=0;i<contacts.length;i++){
        if(contacts[i].toLowerCase()===n.toLowerCase()){
            contacts.splice(i,1)
        }
    }
}




add_to_contacts()
update_contacts()
delete_contact()



