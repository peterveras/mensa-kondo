
$('a').magnificPopup({
  type: 'image',
  closeBtnInside: false,
  closeOnContentClick: true,

  image: {
    verticalFit: true,
    titleSrc: function(item) {
      return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.src+'" target="_blank">open original</a>';
    }
  }

});