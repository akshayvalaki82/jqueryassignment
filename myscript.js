function claculateAge()
{
    var month = $("#month").val();
    var year = $("#year").val();
    var day = $("#day").val();
    if(month != "select" && year != "select" && day != "select")
    {
      var date = new Date();
      
      var m = Number(month);
      var cm = Number(date.getMonth()+1);
      var y = Number(year);
      var cy = date.getFullYear();
      var d = Number(day);
      var cd = date.getDate();
      var mdiff = Math.abs(m-cm);
      var ydiff = cy - y;
      if(m>cm)
      {
        ydiff = ydiff-1;
        mdiff = 12 -(m-cm);
      }
      if(d < cd)
      {
        mdiff = mdiff+1;
      }
      if(d > cd)
      {
        mdiff = mdiff-1;
      }
      if(m == cm && d>cd)
      {
        ydiff = ydiff-1;
        mdiff = 12 - 1;
      }
      var result = ydiff+"."+mdiff;
      console.log("result")
      $("#age").val(parseInt(result));
      $("#lblage").css('visibility','hidden');
    }
    else{
      $("#lblage").css('visibility','visible');
      
    }
}
function gender()
    {
      var x = $("input[name='gender']:checked").val();
      if(x)
      {
        $("#gender1").css('visibility','hidden');
      }
      else{
        $("#gender1").css('visibility','visible');
      }
    }

function interest()
    {
      var y = $("input[name='check']:checked").val();
      if(y=="on")
      {
        $("#interest1").css('visibility','hidden');
      }
      else{
        $("#interest1").css('visibility','visible');
      }
    }

$(document).ready(function(){

    // $.validator.addMethod("stpass",function(value){
    //     var regx = /^([a-z A-z]{8,12})$/;
    //     return regx.test(value);
    // },"***");

    $.validator.addMethod("monthValidate",function(value){
        return value != "select";
      },"--select month");
      
    $.validator.addMethod("dayValidate",function(value){
          return value != "select";
      },"--select day");
  
    $.validator.addMethod("yearValidate",function(value){
        return value != "select";
      }," --select year");

      $("#submit").click(function () { 
        gender();
        interest();
      });  
      
    $("#form1").validate({
        rules:{
            firstname:{
                required:true
            },
            lastname:{
                required:true
            },
            phno:{
                required:true,              
                minlength:10,
                maxlength:10,
                digits:true
            },
            offno:{
                required:true,
                minlength:10,
                maxlength:10,
                digits:true
            },
            email:{
                required:true,
                email:true
            },
            pass:{
                required:true,
                // stpass:true,
                alphanumeric:true,
                
                minlength:8,
                maxlength:12,
            },
            cpass:{
                required:true,
                equalTo:"#pass"
            },
            month:{
                monthValidate:true
              },
              day:{
                dayValidate:true
              },
              year:{
                yearValidate:true
              },
            // 'gender1[]':{
            //     required:true
            // },
            // about:{
            //     required:true
            // }
            
        },
       
        messages:{
            firstname:{
                required:"**name is compulsory"
            },
            lastname:{
                required:"**lastname is compulsory"
            },
            phno:{
                required:"**enter valid number",
                maxlength:"More Than 10 Characters are not allowed",
                digits:"**alphabatic and special characters are not allowed"

            },
            offno:{
                required:"**number is requried",
                maxlength:"More Than 10 Characters are not allowed",
                digits:"**alphabatic and special characters are not allowed"
            },
            email:{
                required:"**plze enter email",
                email:"**plze enter valid email"
            },
            pass:{
                required:"**plze enter password",
                // stpass:"**spical char are not allowed",
                alphanumeric:"special char is not allowed",
                
            },
            cpass:{
                required:"**plze enter password",
                equalTo:"password are not matched"
                
            },
            // about:{
            //     required:"**plze enter ay "
            // }
            

        }
    });
});
