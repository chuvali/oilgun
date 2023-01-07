// JavaScript Document

    $(document).ready(function(){
		$('.venobox').venobox({
			numeratio: true,
			infinigall: true,
			border: '0px',
		});
		$('.venoboxvid').venobox({
			bgcolor: '#000'
		});
		$('.venoboxframe').venobox({
			border: '6px'
		});
		$('.venoboxinline').venobox({
			framewidth: 'auto',
			frameheight: 'auto',
			border: '10px',
			bgcolor: '#000',
			titleattr: 'data-title',
		});
		$('.venoboxajax').venobox({
			border: '30px;',
			frameheight: '220px'
		});
	})