var hex = /^[A-F]+$/;
var b1 = [ "pax", "pbx", "pcx", "pdx"]; 
var b2 = [ "pax2", "pbx2", "pcx2", "pdx2"];
var rejestry = ["ax", "bx", "cx", "dx"]; 
var rejestry2 = ["si", "di", "bp", "disp"];
var stack = [0, 0, 0 ,0];

var r1, r2, rej1="", rej2="";


function checkhex(){
    rax = document.getElementById("ax").value;
    if(rax.value.match(hex))
      return true;
    else
    {
        alert("Wartości adresu muszą być w systemie hexadecymalnym");
    }
}


function mov(){

    for(var i=0; i<4; i++)
    {
        if(document.getElementById(b1[i]).checked == true)
            {
                rej1 = rejestry[i];
                break;
            }
    }
  for(var i=0; i<4; i++)
    {
        if(document.getElementById(b2[i]).checked == true)
        {
            rej2 = rejestry[i];
            break;
        }
    }

    document.getElementById(rej2).value = document.getElementById(rej1).value;
}

function xchg(){
    for(var i=0; i<4; i++)
    {
        if(document.getElementById(b1[i]).checked == true)
            {
                rej1 = rejestry[i];
                r1 = document.getElementById(rej1).value;
                break;
            }
    }
  for(var i=0; i<4; i++)
    {
        if(document.getElementById(b2[i]).checked == true)
        {
            rej2 = rejestry[i];
            r2 = document.getElementById(rej2).value;
            break;
        }
    }

    document.getElementById(rej2).value = r1;
    document.getElementById(rej1).value = r2;
}

function random(){
    var letters = 'ABCDEF1234567890';
    var val = '';
    var letterslength = letters.length;

   for(var x=0; x<4; x++)
   {
    for(var i=0; i<4; i++){
        val += letters.charAt(Math.floor(Math.random() *  letterslength));
    }
    document.getElementById(rejestry[x]).value = val;
    val = '';
   }

   for(var x=0; x<4; x++)
   {
    for(var i=0; i<4; i++){
        val += letters.charAt(Math.floor(Math.random() *  letterslength));
    }
    document.getElementById(rejestry2[x]).value = val;
    val = '';
   }

}

function zer(){

    for(var x=0; x<4; x++)
    {
     document.getElementById(rejestry[x]).value = '0000';
    }
 
    for(var x=0; x<4; x++)
    {
     document.getElementById(rejestry2[x]).value = '0000';
    }
}

function pop(){

    for(var i=0; i<4; i++)
    {
        if(document.getElementById(b1[i]).checked == true)
            {
                rej1 = rejestry[i];
                break;
            }
    }

        var val='';
        if(stack[0]<14)
            {
                stack[0] = stack[0]+2;
                
            }
        else if(stack[1]<14){
            stack[1] = stack[1]+2;
        }
        else if(stack[2]<14){
            stack[2] = stack[2]+2;
        }
        else if(stack[3]<14){
            stack[3] = stack[3]+2;
        }
        else
            alert("Stos jest pelny");

            // document.getElementById('sp').value = stack[3]+" "+stack[2]+" "+stack[1]+" "+stack[0];
           console.log(stack[0]+" "+stack[1]+" "+stack[2]+" "+stack[3]);

           for(var i=stack.length-1; i>=0; i--)
           {
               if(stack[i]>=10)
               {
                    if(stack[i]==10)
                        val = val + "A";
                    if(stack[i]==12)
                        val = val + "C";
                    if(stack[i]==14)
                        val = val + "E";
               }
               else
                val = val+stack[i];
           }
        document.getElementById('sp').value = val;
}

function push(){

    var val = '';
    if(stack[3]>0)
            {
                stack[3] = stack[3]-2;
                
            }
        else if(stack[2]>0){
            stack[2] = stack[2]-2;
        }
        else if(stack[1]>0){
            stack[1] = stack[1]-2;
        }
        else if(stack[0]>0){
            stack[0] = stack[0]-2;
        }
        else
            alert("Stos jestpusty");

        console.log(stack[0]+" "+stack[1]+" "+stack[2]+" "+stack[3]);

        for(var i=stack.length-1; i>=0; i--)
           {
               if(stack[i]>=10)
               {
                    if(stack[i]==10)
                        val = val + "A";
                    if(stack[i]==12)
                        val = val + "C";
                    if(stack[i]==14)
                        val = val + "E";
               }
               else
                val = val+stack[i];
           }
           document.getElementById('sp').value = val;

        
}