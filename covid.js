
function validate(){
var Cold = document.getElementsByName("cold");
var Cattarh = document.getElementsByName("cattarh");
var Cough = document.getElementsByName("cough");
var Throat = document.getElementsByName("throat");
var Fever = document.getElementsByName("fever");
var Ache = document.getElementsByName("ache");
var Fatigue = document.getElementsByName("fatigue");
var Breathing = document.getElementsByName("breath");
var Infected  =  document.getElementsByName("infected");
var Travel = document.getElementsByName("travel");
var Contact = document.getElementsByName("contact"); 


if(Cold[0].checked && Cattarh[0].checked && Cough[0].checked && Throat[0].checked && Fever[0].checked
    && Ache[0].checked && Fatigue[0].checked && Breathing[0].checked && Infected[0].checked
    && Travel[0].checked && Contact[0].checked ){
        alert("You have a high risk of having been infected with COVID-19, please do not panic and contact the emergency line of the NCDC immediately");
    }
    else if(Cold[0].checked && Cattarh[0].checked && Cough[0].checked && Throat[1].checked && Fever[0].checked
        && Ache[1].checked && Fatigue[1].checked && Breathing[0].checked && Infected[1].checked
        && Travel[1].checked && Contact[1].checked){
            alert ("Your risk of having COVID-19 is low, You most likely have common flu, folllow the safety measures against COVID-19 and retake this test after 2 days to be sure. ");
        }
        else if(Cold[0].checked && Cattarh[0].checked && Cough[0].checked && Throat[0].checked && Fever[0].checked
            && Ache[0].checked && Fatigue[0].checked && Breathing[0].checked && Infected[1].checked
            && Travel[1].checked && Contact[1].checked){
                alert("Your risk of having COVID-19 is high, please dont panic, isolate yourself from family members and contact the emergency line of the NCDC immediately ");
    }
            else if(Cold[1].checked && Cattarh[1].checked && Cough[1].checked && Throat[1].checked && Fever[1].checked
                && Ache[1].checked && Fatigue[1].checked && Breathing[1].checked && Infected[0].checked
                && Travel[0].checked && Contact[0].checked){
                    alert ("Please stay isolated for 14days as you may be infected and be assyptomatic. Take a test after 14 days if there are no symptoms to be sure. otherwise, contact the NCDC immediately! ")

            }
            else {
                alert("you are at low risk of having been infected with COVID-19, please observe all the necessary precautions and take this test when you notice new symptoms ");
            }
        
    



}


