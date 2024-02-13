let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

function hideDenialImages()
{
    for(let i = 1; i <= 10; i++)
    {
        document.getElementById(`denialImage${i}`).style.display = 'none';
    }
}
// Mostrar el gif inicial
document.getElementById('initialImage').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    hideDenialImages();
    document.getElementById('initialImage').style.display = 'none';
    document.getElementById('loveImage').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = 'Excelente decisión, te amo mucho mi niña <3';

    // Mostrar otro gif después de 3 segundos
    setTimeout(function() {
        document.getElementById('loveImage').style.display = 'none';
        document.getElementById('loveImage2').style.display = 'block';
    }, 1500);

    setTimeout(function() {
        document.getElementById('loveImage2').style.display = 'none';
        document.getElementById('loveImage3').style.display = 'block';
    }, 3000);
    
  
});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Primera vez haciendo clic en "No"
            document.getElementById('loveImage').style.display = 'none';
            document.getElementById('initialImage').style.display = 'none';
            document.getElementById('denialImage1').style.display = 'block';

            // Modificar el botón "No"
            document.getElementById('noBtn').innerHTML = '¡Oh no! Creo que te has equivocado de botón';
          
            
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';
            // Aumentar el contador y el estado
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Segunda vez haciendo clic en "No"
            hideDenialImages();
            document.getElementById('denialImage2').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'Piénsalo detenidamente, te espero';
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';
        
            noButtonState++;
            break;

        case 2:
            hideDenialImages();
            document.getElementById('denialImage3').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'Estás bromeando, ¿no?';
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';
        
            noButtonState++;
            break;
        
        case 3:
            hideDenialImages();
            document.getElementById('denialImage4').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'No es gracioso, di que sí';
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
        
            noButtonState++;
            break;
        case 4:
            hideDenialImages();
            document.getElementById('denialImage5').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'Por favor, será maravilloso';
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '80px';
            document.getElementById('siBtn').style.padding = '60px 80px';
         
            noButtonState++;
            break;
        case 5:
            hideDenialImages();
            document.getElementById('denialImage6').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'Estaré triste si dices que no';
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '90px';
            document.getElementById('siBtn').style.padding = '70px 90px';

            noButtonState++;
            break;
        case 6:
            hideDenialImages();
            document.getElementById('denialImage7').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'Por favor di que sí';
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '100px';
            document.getElementById('siBtn').style.padding = '80px 100px';
            
            noButtonState++;
            break;
        case 7:
            hideDenialImages();
            document.getElementById('denialImage8').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'Anda, di que sí';
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '90px 120px';
  
            noButtonState++;
            break;
        case 8:
            hideDenialImages();
            document.getElementById('denialImage9').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'Vale, ya dejaré de preguntar...';
            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '90px 120px';
       
            noButtonState++;
            break;

        default:
            hideDenialImages();
            document.getElementById('denialImage10').style.display = 'block';
            document.getElementById('noBtn').innerHTML = 'Me niego a aceptar un "no" como respuesta';
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '90px 120px';
          
            noButtonState++;
            break;
    }
});
