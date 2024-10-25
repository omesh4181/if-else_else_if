
        console.log("1. Income Tax Calculation Based on Income Slabs : ")
        console.log("")
        let income=+prompt("enter the income : ");
        if(income > 250000 && income <= 500000){
            console.log("//apply 5% tax on 250000 ")
            let exceed=income-250000;
            console.log(`Exceed Amount : ${exceed}`)
            let tax=(1/20)*exceed;
            console.log(`total_tax_payable = ${tax}`);
        }
        else if(income > 500000 && income <= 1000000){
            console.log("//apply 25% tax on 250000 ")
            let exceed=income-500000;
            console.log(`Exceed Amount : ${exceed}`)
            let tax=((1/5)*exceed)+12500;
            console.log(`total_tax_payable = ${tax}`);
        }
        else if( income > 1000000){
            console.log("//apply 55% tax on 250000 ")
            let exceed=income-1000000;
            console.log(`Exceed Amount : ${exceed}`)
            let tax=((3/10)*exceed)+112500;
            console.log(`total_tax_payable = ${tax}`);
        }
        else{
            if(income<250000){
                console.log("No tax")
            }
        }


        // let income = +prompt("Enter Income : ");
        // if(income <= 250000){
        //     console.log("No Tax");
        // }
        // else if(income > 250000 && income <= 500000){
        //     exceed = income - 250000
        //     console.log("Exceed amount : ",exceed);
        //     tax_paid = (1/20)*exceed;
        //     console.log("total tax payable",tax_paid);
        // }
        // else if(income > 500000 && income <= 1000000){
        //     exceed = income - 500000
        //     console.log("Exceed amount",exceed);
        //     tax_paid = (1/5*exceed) + 12500;
        //     console.log("total tax payable",tax_paid);
        // }

        // else if(income > 1000000){
        //     exceed = income - 1000000
        //     console.log("Exceed amount",exceed);
        //     tax_paid = ((3/10)*exceed) + 112500
        //     console.log(tax_paid);
        // }

        console.log("question 2 :")
        console.log("");
        console.log("2. Shipping Cost Based on Weight and Destination Problem:Write a program that calculates the shipping cost for a parcel based on its weight and destination:Weight <= 1kg Local: $5 National: $8 International: $15")
        
        let weight=+prompt("enter the weight : ");
        let destination=prompt("enter the destination : ");

        if(weight<=1){
            let ans=(destination=="Local") ? "Total Shiping Cost is : 5$" : (destination=="National") ? "Total Shiping Cost is : 8$" : (destination=="International") ? "Total Shiping Cost is : 15$" : "invalid destination";
            console.log(ans)
        }
        else if(weight>1 && weight<=5){
            let ans=(destination=="Local") ? ("Total Shiping Cost is : 10$") : (destination=="National") ? ("Total Shiping Cost is : 15$") : (destination=="International") ? ("Total Shiping Cost is : 30$") : "invalid destination";
            console.log(ans)
        }
        else if(weight > 5 && weight <= 10){
            let ans=(destination=="Local") ? "Total Shiping Cost is : 20$" : (destination=="National") ? "Total Shiping Cost is : 25$" : (destination=="International") ? "Total Shiping Cost is : 50$" : "invalid destination";
            console.log(ans)
        }
        else if(weight>10){
            let ans=(destination=="Local") ? console.log("Total Shiping Cost is : 30$") : (destination=="National") ? "Total Shiping Cost is : 35$" : (destination=="International") ? "Total Shiping Cost is : 70$" : "invalid destination";
            console.log(ans)
        }

        console.log("Question 3 :");
        console.log("");
        console.log("3. Electricity Bill Calculation Based on Usage");
        console.log("Write a program to calculate the electricity bill based on the number of units consumed:Units <= 100: $1 per unit ,Units > 100 and <= 300: $1 per unit for the first 100 units + $1.5 per unit for the next 200 units  Units > 300: $1 per unit for the first 100 units + $1.5 per unit for the next 200 units + $2 per unit beyond 300")

        let Number_of_units=+prompt("enter the number of units : ");
        if(Number_of_units<=100){
            console.log("Total Electricity Bill Amount :",( Number_of_units)*1)
        }
        else if( Number_of_units > 100 &&  Number_of_units<=300){
            console.log("Total Electricity Bill Amount : ",( Number_of_units*1)+( Number_of_units-100)*1.5)

        }
        else if ( Number_of_units>300){
            console.log("Total Electricity Bill Amount : " ,( Number_of_units*1)+(( Number_of_units-100)*1.5)+(( Number_of_units-300)*2))
        }