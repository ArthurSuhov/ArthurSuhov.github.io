ymaps.ready(init);

function init(){
	var map__container = new ymaps.Map('map__container', {
		center: [61.52060761, 30.33056762],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
    
    var placemark = new ymaps.Placemark([61.52060761, 30.33056762], {
        hintContent: '<div class="map__hint">д.Микли, Гостевой дом "Русь"</div>'

    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'images/icons/home-icon-map.svg',
        iconImageSize: [60, 87],
        iconImageOffset: [-23, -57]
    });

    map__container.geoObjects.add(placemark);
}
