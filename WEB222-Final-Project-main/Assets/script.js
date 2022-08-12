/*Name: Sanya Khurana
Student Number: 146381215
Email: skhurana26@myseneca.ca
*/

let menu = document.querySelector('.menu-icon');
let navigationbar = document.querySelector('.nav-links');

menu.addEventListener('click', function() 
{
    navigationbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
});

window.onscroll = () => 
{
    navigationbar.classList.remove('open-menu');
    menu.classList.remove('move');
}

let hiringRadioButton = document.getElementById('hiring');
let questionRadioButton = document.getElementById('question');
let commentRadioButton = document.getElementById('comment');

var clicked = 0;

hiringRadioButton.addEventListener('click', function() 
{
    if (clicked == 0) 
    {
        generatePayRateInput();
        clicked++;
    }
});

questionRadioButton.addEventListener('click', function() 
{
    if (clicked > 0) 
    {
        deletePayRateInput();
        clicked = 0;
    }
});

commentRadioButton.addEventListener('click', function() 
{
    if (clicked > 0) 
    {
        deletePayRateInput();
        clicked = 0;
    }
});

function generatePayRateInput() 
{
    let break1 = document.createElement('br');
    break1.id = 'b1';
    let break2 = document.createElement('br');
    break2.id = 'b2';
    let break3 = document.createElement('br');
    break3.id = 'b3';

    const node1 = document.createElement("label");
    const textNode = document.createTextNode("Expected Hourly Rate: ");
    node1.appendChild(textNode);
    node1.id = 'hiring-rate-label';

    const node2 = document.createElement("input");
    node2.id = 'hiring-rate-input';
    node2.type = 'number';
    node2.step = '0.1';
    node2.placeholder = 'Hourly Pay';
    node2.classList.add('format')

    document.querySelector(".radio-btns").appendChild(break1);
    document.querySelector(".radio-btns").appendChild(break2);
    document.querySelector(".radio-btns").appendChild(node1);
    document.querySelector(".radio-btns").appendChild(break3);
    document.querySelector(".radio-btns").appendChild(node2);
}

function deletePayRateInput() 
{
    let label = document.getElementById('hiring-rate-label');
    let input = document.getElementById('hiring-rate-input');
    let div = document.querySelector(".radio-btns");
    let b1 = document.getElementById('b1');
    let b2 = document.getElementById('b2');
    let b3 = document.getElementById('b3');

    div.removeChild(b1);
    div.removeChild(b2);
    div.removeChild(b3);
    div.removeChild(input);
    div.removeChild(label);
}

let messages = [];
const form = document.getElementById('contact-form');
const errorElement = document.getElementById('error');

function formValidate() 
{
    let name= document.forms["contactForm"]["cname"].value;
    let email= document.forms["contactForm"]["cemail"].value;
    let city = document.forms["contactForm"]["ccity"].value;
    let address = document.forms["contactForm"]["caddress"].value;
    let postal = document.forms["contactForm"]["cpostalcode"].value;
    let message= document.forms["contactForm"]["cmessage"].value;
    let rate = document.forms["contactForm"]["hourlyrate"].value;


    if (name == "" || email == "" || city == "" || address == "" || postal == "" || message == "" || (flag == 1 && rate == "")) 
    {
        alert("Field can't be empty");
        return false;
    }
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) 
    {
        alert("Please enter a valid email address");
        return false;
    }
    
    if (!postal.match(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/))
    {
        alert("Please enter a valid canada postal code");
        return false;
    }  


function payRateValidation() 
{
    let payRateInput = document.getElementById('hiring-rate-input');
    if (payRateInput.value <= 0) 
    {
        messages.push("- Enter an appropriate expected hourly pay rate")
    }
}

function nullChecker(element, elementName)
 {
    result = true;
    if (element.value === '' || element.value == null)
    {
        messages.push(`- ${elementName} is required`);
        result = false;
    }

    return result;
}

function areAlphabets(element, message) 
{
    let validRegex = /^[A-Za-z\s]+$/;
    if (!(element.value.match(validRegex)))
    {
        messages.push(message);
    }
}
}