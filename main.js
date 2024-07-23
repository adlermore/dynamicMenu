$(function(){

  $('.category-btn').on('click', function() {
    var $this = $(this);
    var subcategories = $this.data('sub');
    var subcategoriesHtml = '<ul class="subcategories">';

    subcategories.forEach(function(category) {
        for (var key in category) {
            if (Array.isArray(category[key])) {
                subcategoriesHtml += '<li>' + key + '<ul>';
                category[key].forEach(function(sub) {
                    for (var subKey in sub) {
                        subcategoriesHtml += '<li>' + sub[subKey].name + '</li>';
                    }
                });
                subcategoriesHtml += '</ul></li>';
            } else {
                subcategoriesHtml += '<li>' + category[key] + '</li>';
            }
        }
    });

    subcategoriesHtml += '</ul>';

    // Remove any previously appended subcategories
    $('.subcategories').remove();

    // Append the new subcategories below the clicked category button
    $this.after(subcategoriesHtml);

    // Toggle the display of the subcategories
    $this.next('.subcategories').toggleClass('active');
});
});