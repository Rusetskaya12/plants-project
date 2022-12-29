"use strict"
$('.prices-info__title-inner').on('click',function(){
	$(this).parents('.prices-info').find('.prices-info__body').slideToggle(300);
	$(this).toggleClass('open');
	if ($(this).hasClass('show_all')){
			if ($(this).hasClass('open')) {
				$(this).html('Свернуть все');
			$('.prices-info__title-inner:not(.open)').trigger('click');
		} else {
			$(this).html('Смотреть все');
			$('.prices-info__title-inner.open').trigger('click');
		}
	}
});