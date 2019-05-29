using System;
using System.Collections.Generic;
using System.Linq;
using ElCoffe.Models;


namespace ElCoffe.DAL
{
    public class ElCoffeInitializer
    {
        protected void Seed(DbConn context)
        {
            var categories = new List<Category>
            {
                new
                    Category{Id=1,Name="Cafea Concetrata",Description="Nivel ridicat de cofeina pentru o doza mai mare de energie"},
                new
                    Category{Id=2,Name="Cafea Medium",Description="Nivel mediu de cofeina pentru a savura alintaroma"},
                new
                    Category{Id=3,Name="Cafea Slaba",Description="Nivel scazut de cofeina pentru o doza de relaxare"},
                new
                    Category{Id=4,Name="Cookies",Description="Perfecti langa o cafea buna"},
                new
                    Category{Id=5,Name="Briose",Description="Atunci cand ai pofta de ceva dulce"}
            };
            categories.ForEach(s => context.Categories.Add(s));
            context.SaveChanges();

            //var orders = new List<Order>
            //{
            //    new
            //        Order{Id=1,Address="Gazarului, 10",Details="Caffe latte - Nivel scazut de cofeina pentru o doza de relaxare", User=1, Products=1, Status=1},
            //    new
            //        Order{Id=2,Address="Drumul Sarii, 85",Details="Espresso - Nivel ridicat de cofeina pentru o doza mai mare de energie", User=2, Products=2, Status=2},
            //    new
            //        Order{Id=3,Address="Aleea Sacamului, 21",Details="Cappuccino - Nivel mediu de cofeina pentru a savura alintaroma", User=3, Products=3, Status=3}
            //};
            //orders.ForEach(s => context.Orders.Add(s));
            //context.SaveChanges();

            var products = new List<Product>
            {
                new
                    Product{Id=1,Name="Caffe Latte",Description="O băutură relaxantă, ușoară, potrivită pentru un moment de liniște după masa de prânz. 1 espresso normal, cu o măsură de cafea, peste care se toarnă laptele aburit și un strat de lapte spumos.",Price=15,Weight=160,CategoryId=3},
                new
                    Product{Id=2,Name="Espresso",Description="Dacă e o dimineață ca oricare alta în care au nevoie de energie și o minte limpede, un espresso este soluția perfectă. Nu este atât de intens precum red eye de aceea este potrivit și pentru persoanele care nu consumă cafea zilnic.",Price=12,Weight=90,CategoryId=1},
                new
                    Product{Id=3,Name="Cappuccino",Description="Această băutură este perfectă pentru momentul în care ești în oraș cu fetele și schimbați povești. 1 espresso normal, cu o măsură de cafea peste care se adaugă laptele spumant. Nu este nici prea slabă, așa cum este caffe latte, dar nu are nici acea esență a unui espresso care îți trezește simțurile.",Price=18,Weight=150,CategoryId=2},
                new
                    Product{Id=4,Name="Mocha",Description="Mocha este o băutură potrivită pentru orice moment al zilei, se poate considera și un desert ușor (având în vedere că unul dintre ingrediente este ciocolata).",Price=13,Weight=150,CategoryId=3},
                new
                    Product{Id=5,Name="Iced Mocha",Description="Pe lângă deliciul oferit de ciocolată, această băutură se servește cu gheață și frișcă. Este perfectă pentru sezonul cald, oferă o senzație de răcorire și este un dulce binevenit.",Price=16,Weight=190,CategoryId=3},
                new
                    Product{Id=6,Name="Iced Coffee",Description="O băutură potrivită pentru sezonul cald. 1 espresso normal, puțin lapte, câteva cuburi de gheață și puțin sirop de caramel îți vor transforma ziua călduroasă de vară într-una relaxată, lipsită de stres, cu o cafea bună în mână.",Price=13,Weight=200,CategoryId=2},
                new
                    Product{Id=7,Name="Red Eye",Description="Dacă te simți lipsit de energie, nu ai dormit destul și urmează o zi plină, red eye este cafeaua perfectă pentru tine. Doza de espresso adăugată într-o cană de cafea la filtru sigur te va menține în priză și vei îndeplini fiecare task.",Price=10,Weight=80,CategoryId=1},
                new
                    Product{Id=8,Name="Cookies cu ciocolata",Description="Perfecti langa o cafea buna.",Price=10,Weight=120,CategoryId=4},
                 new
                    Product{Id=8,Name="Briose glazurate",Description="Acel moment cand ai pofta de ceva dulce (poti alege glazura pe loc).",Price=10,Weight=120,CategoryId=5}
            };
            products.ForEach(s => context.Products.Add(s));
            context.SaveChanges();

            var reservation = new List<Reservation>
            {
                new
                    Reservation{Id=1,PeopleNumber=3,Date=DateTime.Parse("2019-06-01"),Details="Aniversare",UserID=2},
                new
                    Reservation{Id=2,PeopleNumber=3,Date=DateTime.Parse("2019-06-03"),Details="Isire",UserID=1}
            };
            reservation.ForEach(s => context.Reservations.Add(s));
            context.SaveChanges();

            var status = new List<Status>
            {
                new
                    Status{Id=1,Name="In pregatire"},
                new
                    Status{Id=2,Name="Comanda dumneavoastra a plecat de la noi"},
                new
                    Status{Id=1,Name="Comanda livrata"}
            };
            status.ForEach(s => context.Statuses.Add(s));
            context.SaveChanges();

            var user = new List<User>
            {
                new
                    User{Username="AlexP",Password="123",FirstName="Alex",LastName="Popa",PhoneNumber="0259865623",Address="Gazarului, 8",Email="alex.popa@gmail.com",IsAdmin=false},
                new
                   User{Username="BogdanR",Password="321",FirstName="Bogdan",LastName="Roman",PhoneNumber="9955455366",Address="Piata Sudului",Email="bogdan.roman@gmail.com",IsAdmin=false}
            };
            status.ForEach(s => context.Statuses.Add(s));
            context.SaveChanges();
        }
    }
}
