const employees = [
    {
        id: 1,
        name: 'Farman',
        age: 22,
        position: 'Frontend | Team Leader',
        salary: 250
    },
    {
        id: 2,
        name: 'Subhan',
        age: 22,
        position: 'Backend | Team Leader',
        salary: 250
    },
    {
        id: 3,
        name: 'Aqil',
        age: 27,
        position: 'QA Tester',
        salary: 70
    },
    {
        id: 4,
        name: 'Lala',
        age: 18,
        position: 'QA Tester',
        salary: 70
    },
    {
        id: 5,
        name: 'Oktay',
        age: 12,
        position: 'Frontend',
        salary: 160
    },
]
// Saytın başlığını "Salam, Dünya!" olaraq dəyişdirin.
document.title="Salam, Dünya!"

// Bir HTML faylında id="myParagraph" olan bir paragrafın məzmununu "Yeni məzmun" olaraq dəyişdirin.(Hər iki üsulla)
document.getElementById("myparagraph").textContent="Yeni mezmun"


// Bir HTML faylında name=email olan bir inputun dəyərini "admin@gmail.com" olaraq dəyişdirin.
document.getElementsByName("email").values="admin@gmail.com"




// Bir HTML faylında cədvəlin içinə işçilərin siyahısını əlavə edin.(Arrayin içindəki bütün proopertylər olmaldır)
const tBody=document.querySelector("tbody")
        employees.forEach(employee => {
            const tr = document.createElement("tr")
            tr.innerHTML = `
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.age}</td>
                    <td>${employee.position}</td>
                    <td>${employee.salary}</td>
            `
            tBody.innerHTML+= tr.innerHTML
        })




// Div elementini id-sine görə seçin və ona bir class əlavə edin
document.addEventListener("DOMContentLoaded", function () {
    const div = document.getElementById("divv");
    div.classList.add("axirki-alindi");
})





// Div elementini class-ın a görə  seçin daha sonra isə onun id-sini tapın
const div = document.querySelector(".class-div");
console.log(div.id);
