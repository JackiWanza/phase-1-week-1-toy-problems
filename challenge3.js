// gross salary=basic salary+allowances
// paye=total tax -personal relief
// net salary=gross salary - deductions
let basicSalary = parseInt(prompt("enter individual'sbasic salary"))
let benefits = parseInt(prompt("enter individual's benefits"))
function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits

}
function calculatePaye() {
    let taxablePay = calculateGrossSalary(basicSalary,benefits)
    let rate,paye,personalRelief=2400
    if (0<= taxablePay && taxablePay<=24000){
        rate=0.1

    }else if(24001<=taxablePay && taxablePay<=32333){
        rate=0.25
    }else if(32334<=taxablePay && taxablePay<=500000){
        rate=0.3
    }else if(500001<=taxablePay && taxablePay<=800000){
        rate=0.325
    }else{
        rate=0.35
    }
    paye=(taxablePay*rate)-personalRelief
    return paye

}
function calculateNssf(){
    let grossPay=calculateGrossSalary(basicSalary,benefits)
    let nssf=0.05*grossPay
    return nssf
}
function calculateNhif(){
    let grossPay=calculateGrossSalary(basicSalary,benefits) 
    let nhif
    if (0<=grossPay && grossPay<=5999){
        nhif=150
    }else if(6000<=grossPay && grossPay<=7999){
        nhif=300
    }else if(8000<=grossPay && grossPay<=11999){
        nhif=400
    }else if(12000<=grossPay && grossPay<=14999){
        nhif=500
    }else if(15000<=grossPay && grossPay<=19999){
        nhif=600
    }else if(20000<=grossPay && grossPay<=24999){
        nhif=750
    }else if(25000<=grossPay && grossPay<=29999){
        nhif=850
    }else if(30000<=grossPay && grossPay<=34999){
        nhif=900
    }else if(35000<=grossPay && grossPay<=39999){
        nhif=950
    }else if(40000<=grossPay && grossPay<=44999){
        nhif=1000
    }else if(45000<=grossPay && grossPay<=49999){
        nhif=1100
    }else if(50000<=grossPay && grossPay<=59999){
        nhif=1200
    }else if(60000<=grossPay && grossPay<=69999){
        nhif=1300
    }else if(70000<=grossPay && grossPay<=79999){
        nhif=1400
    }else if(80000<=grossPay && grossPay<=89999){
        nhif=1500
    }else if(90000<=grossPay && grossPay<=99999){
        nhif=1600
    }else {
        nhif=1700
    }
    return nhif
}
function calculateNetSalary(){
    let gross=calculateGrossSalary(basicSalary,benefits)
    let paye=calculatePaye()
    let nssf=calculateNhif()
    let nhif=calculateNhif()
    let netSalary=gross-paye-nssf-nhif
    return netSalary
}
calculateNetSalary()