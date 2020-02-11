function validation(){
    var name = document.forma.name.value;
    var email = document.forma.email.value;
    var poruka = document.forma.message.value;
    
        if ( name.length < 6){
            document.getElementById('imp').style.borderColor = "red"
            alert('Ime i prezime moraju da imaju najmanje 6 karaktera!');
            event.preventDefault();
        }
        else{
            document.getElementById('imp').style.borderColor = "green"
    
        }
        if (email.length < 6){
            document.getElementById('mail').style.borderColor = "red"
            alert('Mail ili broj telefona moraju da imaju najmanje 6 karaktera!');
            event.preventDefault();
        }
        else {
            document.getElementById('mail').style.borderColor = "green"
    
        }
        if (poruka.length < 20) {
            document.getElementById('porudzbina').style.borderColor = "red"
            alert('Poruka mora da sadrzi najmanje 20 karaktera!');
            event.preventDefault();
        }
        else {
            document.getElementById('porudzbina').style.borderColor = "green"
    
        }
    }