
	$(document).ready(
  function()
  {
  	let str="";
  	$("#one").click(
    function()
    {
    	str=$("#result").val()+"1";
    	$("#result").val(str);
    }

  		);
    $("#two").click(
    	function()
    	{
    		str=$("#result").val()+"2";
    		$("#result").val(str);
    	}

    	);
    $("#three").click(
    	function()
    	{
    		str=$("#result").val()+"3";
    		$("#result").val(str);
    	}

    	);
    $("#four").click(
    	function()
    	{
    		str=$("#result").val()+"4";
    		$("#result").val(str);
    	}

    	);
    $("#five").click(
    	function()
    	{
    		str=$("#result").val()+"5";
    		$("#result").val(str);
    	}

    	);
    $("#six").click(
    	function()
    	{
    		str=$("#result").val()+"6";
    		$("#result").val(str);
    	}

    	);
    $("#seven").click(
    	function()
    	{
    		str=$("#result").val()+"7";
    		$("#result").val(str);
    	}

    	);
    $("#eight").click(
    	function()
    	{
    		str=$("#result").val()+"8";
    		$("#result").val(str);
    	}

    	);
    $("#nine").click(
    	function()
    	{
    		str=$("#result").val()+"9";
    		$("#result").val(str);
    	}

    	);
    $("#zero").click(
    	function()
    	{
    		str=$("#result").val()+"0";
    		$("#result").val(str);
    	}

    	);

    $("#plus").click(
    	function()
    	{
    		str=$("#result").val()+"+";
    		$("#result").val(str);
    	}

    	);
    $("#minus").click(
    	function()
    	{
    		str=$("#result").val()+"-";
    		$("#result").val(str);
    	}

    	);
    $("#multiply").click(
    	function()
    	{
    		str=$("#result").val()+"*";
    		$("#result").val(str);
    	}

    	);
    $("#divide").click(
    	function()
    	{
    		str=$("#result").val()+"/";
    		$("#result").val(str);
    	}

    	);
    $("#equal").click(
    	function()
    	{
    		str=eval($("#result").val());
    		$("#result").val(str);
        $(".calculator").addClass("color");
    	}
    	);


  }

	);


