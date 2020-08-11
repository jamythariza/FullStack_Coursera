$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
      interval: 2000
    });
    $('#contacto').on('show.bs.modal', function (e) {
      $('#btncontacto').removeClass('btn-outline-success');
      $('#btncontacto').addClass('btn-primary');
      $('#btncontacto').prop('disabled', true);
    });
    $('#contacto').on('hidden.bs.modal', function (e) {
      $('#btncontacto').prop('disabled', false);
    });
  });