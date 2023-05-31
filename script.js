let string="";
let deg=0;
let rad=1;
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=> {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='deg'){
            deg=1;
            rad=0;
        }
        else if(e.target.innerHTML=='rad'){
            rad=1;
            deg=0;
        }
        else if(e.target.innerHTML== '='){
            try{
                string=eval(string);
            document.querySelector('input').value=string;
            }catch(error){
                document.querySelector('input').value="Error in the expression";
            }
        }
        else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = string;
          }else if(e.target.innerHTML == '⌫'){
            document.querySelector('input').value = string.slice(0,-1);
            string=string.slice(0,-1);
          }else if(e.target.innerHTML == '!'){
            string=string.slice(0,-1);
            let ans=1;
            let i=1;
            for( i=1;i<=eval(string);i++){
                ans=ans*i;
            }
            document.querySelector('input').value = ans;
            
          }
          else if(e.target.innerHTML == 'sin'){
            console.log(e.target);
            if(rad==1){
            document.querySelector('input').value=Math.sin(string);
            }else{
                document.querySelector('input').value=Math.sin((eval(string))*(Math.PI)/180);
            }
          }else if(e.target.innerHTML == 'cos'){
            console.log(e.target);
            document.querySelector('input').value=Math.cos(string);
          }else if(e.target.innerHTML == 'tan'){
            console.log(e.target);
            document.querySelector('input').value=Math.tan(string);
          }else if(e.target.innerHTML == 'exp'){
            console.log(e.target);
            document.querySelector('input').value=Math.exp(string);
          }else if(e.target.innerHTML == 'ln'){
            console.log(e.target);
            document.querySelector('input').value=Math.log(string);
          }else if(e.target.innerHTML == 'log'){
            console.log(e.target);
            document.querySelector('input').value=Math.log10(string);
          }else if(e.target.innerHTML == 'root'){
            console.log(e.target);
            document.querySelector('input').value=Math.sqrt(string);
          }else if(e.target.innerHTML == 'e'){
            console.log(e.target);
            document.querySelector('input').value=Math.E;
            string+=Math.E;
          }else if(e.target.innerHTML == 'pi'){
            console.log(e.target);
            document.querySelector('input').value=Math.PI;
            string+=Math.PI;
          }else if(e.target.innerHTML == 'log'){
            console.log(e.target);
            document.querySelector('input').value=Math.log10(string);
          }else if(e.target.innerHTML == 'log'){
            console.log(e.target);
            document.querySelector('input').value=Math.log10(string);
          }
        
        
        
        
        else{
        console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
});